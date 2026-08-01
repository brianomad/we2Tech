#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const REPO = path.resolve(__dirname, '..', '..');
const DATA_FILE = path.join(REPO, 'src', 'data', 'blog-data.json');
const TOPICS_FILE = path.join(REPO, 'scripts', 'blog-bot', 'topics.json');

const API_KEY = process.env.BLOG_BOT_API_KEY || '';
const MODEL = process.env.BLOG_BOT_MODEL || 'gpt-4o-mini';
const API_BASE = (process.env.BLOG_BOT_API_BASE || 'https://api.openai.com/v1').replace(/\/+$/, '');
const DRY_RUN = process.env.BLOG_BOT_DRY_RUN === '1';
const FIXTURE = process.env.BLOG_BOT_FIXTURE || '';
const MODE = process.env.BLOG_BOT_MODE || 'push'; // 'push' | 'pr'

const today = new Date().toISOString().slice(0, 10);

function fail(msg) {
  console.error(`[blog-bot] FAIL: ${msg}`);
  process.exit(1);
}

function readingTime(posts) {
  const words = posts
    .map((b) => (b.text || '').split(/\s+/).filter(Boolean).length + (b.items ? b.items.join(' ').split(/\s+/).filter(Boolean).length : 0))
    .reduce((a, b) => a + b, 0);
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

const BLOCK_TYPES = ['p', 'h2', 'ul'];

function validate(post) {
  const errs = [];
  if (!post || typeof post !== 'object') errs.push('response is not an object');
  if (!/^[a-z0-9-]+$/.test(post.slug || '')) errs.push(`bad slug: ${post.slug}`);
  if (!post.title || post.title.length < 15) errs.push('missing/too-short title');
  if (!post.description || post.description.length < 60) errs.push('description must be 60+ chars');
  if (!post.category) errs.push('missing category');
  if (!Array.isArray(post.tags) || post.tags.length < 2) errs.push('need 2+ tags');
  if (!Array.isArray(post.content) || post.content.length < 3) errs.push('content must have 3+ blocks');
  if (!post.content.some((b) => b.type === 'h2')) errs.push('content needs at least one h2');
  post.content.forEach((b, i) => {
    if (!BLOCK_TYPES.includes(b.type)) errs.push(`block ${i} has invalid type ${b.type}`);
    if (b.type === 'ul' && (!Array.isArray(b.items) || b.items.length < 2)) errs.push(`block ${i} ul needs items`);
    if (b.type !== 'ul' && (!b.text || b.text.length < 20)) errs.push(`block ${i} text too short`);
  });
  if (errs.length) fail(`generated post failed validation:\n  - ${errs.join('\n  - ')}\n${JSON.stringify(post).slice(0, 800)}`);
}

function cleanPost(raw) {
  const post = {
    slug: String(raw.slug || '').trim(),
    title: String(raw.title || '').trim(),
    description: String(raw.description || '').trim(),
    category: String(raw.category || '').trim(),
    tags: Array.isArray(raw.tags) ? raw.tags.map((t) => String(t).trim()).filter(Boolean) : [],
    date: today,
    readingTime: '', // set below
    content: Array.isArray(raw.content)
      ? raw.content.map((b) =>
          b.type === 'ul'
            ? { type: 'ul', items: (b.items || []).map((i) => String(i).trim()).filter(Boolean) }
            : { type: b.type, text: String(b.text || '').trim() }
        )
      : [],
  };
  post.readingTime = readingTime(post.content);
  validate(post);
  return post;
}

async function generate(topic, sample) {
  const system = `You are a blog writer for we2Tech, a Hong Kong software development company that builds mobile apps, websites, UI/UX design and cloud systems.

Write clear, practical, honest business content in natural English aimed at Hong Kong business owners deciding whether to build software.

STRICT RULES:
- Target the Hong Kong market. Use "Hong Kong" naturally.
- Use realistic HKD price ranges. Do NOT invent precise figures, statistics, sources, citations, company names or case studies you cannot verify.
- If you are unsure of a number, use a broad range or speak qualitatively.
- Keep the tone professional, confident, helpful — never hypey or pushy.
- Do NOT mention prices/claims inconsistent with the sample post provided.
- Return ONLY valid JSON. No markdown fences, no commentary.

JSON SCHEMA (match exactly):
{
  "slug": "lowercase-hyphenated-slug",
  "title": "Title under 70 characters",
  "description": "One to two sentence meta description, 120-160 characters",
  "category": "One word, e.g. Mobile | Web | Strategy | Compliance | Industry",
  "tags": ["tag1", "tag2", "tag3"],
  "content": [
    { "type": "p", "text": "Opening paragraph..." },
    { "type": "h2", "text": "Section heading" },
    { "type": "p", "text": "Paragraph..." },
    { "type": "ul", "items": ["Bullet point", "Bullet point"] },
    ...
  ]
}

Content requirements:
- 600-900 words total.
- Start with a short opening paragraph, then 4-6 "h2" sections.
- Use "ul" for 3-6 item lists where natural.
- End with a short paragraph that softly invites the reader to talk to we2Tech (free consultation) WITHOUT sounding like an ad.
- The "title" field below the slug must be reused as the article title.`;

  const user = JSON.stringify({
    topic,
    sample: sample || null,
    instructions: 'Write the article for this topic. Follow the schema and rules exactly. Do not change the slug.',
  });

  const body = {
    model: MODEL,
    temperature: 0.7,
    messages: [
      { role: 'system', content: system },
      { role: 'user', content: user },
    ],
  };

  const call = async (withJsonMode) => {
    const payload = withJsonMode ? { ...body, response_format: { type: 'json_object' } } : body;
    const res = await fetch(`${API_BASE}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const text = await res.text();
      const err = new Error(`API ${res.status}: ${text.slice(0, 300)}`);
      err.status = res.status;
      throw err;
    }
    const data = await res.json();
    const content = data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
    if (!content) throw new Error('empty completion');
    return JSON.parse(content);
  };

  try {
    return await call(true);
  } catch (e) {
    if (e.status === 400 && String(e.message).includes('response_format')) {
      console.log('[blog-bot] retrying without response_format...');
      return await call(false);
    }
    throw e;
  }
}

function git(args) {
  execSync(`git ${args}`, { cwd: REPO, stdio: 'inherit' });
}

async function main() {
  if (!API_KEY && !DRY_RUN && !FIXTURE) fail('BLOG_BOT_API_KEY is not set');

  const posts = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  const topics = JSON.parse(fs.readFileSync(TOPICS_FILE, 'utf8'));
  const used = new Set(posts.map((p) => p.slug));
  const next = topics.find((t) => !used.has(t.slug));

  if (!next) {
    console.log('[blog-bot] No unused topics left in topics.json — nothing to do.');
    process.exit(0);
  }

  console.log(`[blog-bot] Generating post for topic: ${next.title}`);
  const raw = FIXTURE
    ? JSON.parse(fs.readFileSync(FIXTURE, 'utf8'))
    : await generate(next, posts[posts.length - 1]);
  const post = cleanPost(raw);

  if (posts.some((p) => p.slug === post.slug)) fail(`slug collision: ${post.slug}`);

  const updated = [post, ...posts];
  fs.writeFileSync(DATA_FILE, JSON.stringify(updated, null, 2) + '\n');
  console.log(`[blog-bot] Wrote post "${post.title}" (${post.slug})`);

  if (DRY_RUN) {
    console.log('[blog-bot] DRY RUN — not committing.');
    return;
  }

  git('config user.name "we2Tech Blog Bot"');
  git('config user.email "blog-bot@we2tech.pro"');

  if (MODE === 'pr') {
    const branch = `blog-bot/${post.slug}`;
    git(`checkout -b ${branch}`);
    git('add -A');
    git(`commit -m "blog-bot: add ${post.title}"`);
    git(`push -u origin ${branch}`);
    execSync(`gh pr create --title "New blog post: ${post.title}" --body "Auto-generated by the we2Tech blog bot. Review then merge to publish." --base master`, { cwd: REPO, stdio: 'inherit' });
    console.log('[blog-bot] Opened PR — review then merge to publish.');
  } else {
    git('add -A');
    git(`commit -m "blog-bot: add ${post.title}"`);
    git('push origin master');
    console.log('[blog-bot] Pushed to master — Vercel will auto-deploy.');
  }
}

main().catch((e) => fail(e.stack || e.message));
