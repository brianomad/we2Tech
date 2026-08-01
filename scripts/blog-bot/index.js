#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const REPO = path.resolve(__dirname, '..', '..');
const DATA_FILE = path.join(REPO, 'src', 'data', 'blog-data.json');
const POSTS_DIR = path.join(REPO, 'blog-posts');

const COUNT = parseInt(process.env.BLOG_BOT_COUNT || '2', 10);
const DRY_RUN = process.env.BLOG_BOT_DRY_RUN === '1';
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
    if (b.type === 'p' && (!b.text || b.text.length < 20)) errs.push(`block ${i} text too short`);
    if (b.type === 'h2' && (!b.text || b.text.length < 4)) errs.push(`block ${i} heading too short`);
  });
  if (errs.length) fail(`post failed validation for "${post.title}":\n  - ${errs.join('\n  - ')}`);
}

function parseMarkdownBody(body) {
  const lines = body.split('\n');
  const blocks = [];
  let para = [];
  let list = [];
  const flushPara = () => {
    if (para.length) {
      blocks.push({ type: 'p', text: para.join(' ').replace(/\s+/g, ' ').trim() });
      para = [];
    }
  };
  const flushList = () => {
    if (list.length) {
      blocks.push({ type: 'ul', items: list.slice() });
      list = [];
    }
  };
  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      flushPara();
      flushList();
      continue;
    }
    if (line.startsWith('## ')) {
      flushPara();
      flushList();
      blocks.push({ type: 'h2', text: line.slice(3).trim() });
      continue;
    }
    if (line.startsWith('- ')) {
      flushPara();
      list.push(line.slice(2).trim());
      continue;
    }
    flushList();
    para.push(line);
  }
  flushPara();
  flushList();
  return blocks;
}

function parsePost(chunk, file) {
  const idx = chunk.indexOf('===BODY===');
  if (idx === -1) fail(`post in ${file} has no ===BODY=== section`);
  const header = chunk.slice(0, idx);
  const body = chunk.slice(idx + '===BODY==='.length);
  const fields = {};
  header.split('\n').forEach((line) => {
    const m = line.match(/^([a-z]+):\s*(.*)$/);
    if (m) fields[m[1]] = m[2].trim();
  });
  ['slug', 'title', 'description', 'category'].forEach((k) => {
    if (!fields[k]) fail(`post in ${file} missing header field "${k}"`);
  });
  return {
    slug: fields.slug,
    title: fields.title,
    description: fields.description,
    category: fields.category,
    tags: (fields.tags || '').split(',').map((t) => t.trim()).filter(Boolean),
    date: today,
    readingTime: '',
    content: [],
    _body: body,
    _file: file,
  };
}

function git(args) {
  execSync(`git ${args}`, { cwd: REPO, stdio: 'inherit' });
}

function main() {
  if (!fs.existsSync(POSTS_DIR)) fail(`posts dir missing: ${POSTS_DIR}`);
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.txt')).sort();

  const published = new Set(JSON.parse(fs.readFileSync(DATA_FILE, 'utf8')).map((p) => p.slug));
  const queued = [];
  for (const file of files) {
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8');
    const chunks = raw.split('===BLOG-END===').map((c) => c.trim()).filter(Boolean);
    for (const chunk of chunks) {
      const post = parsePost(chunk, file);
      if (!published.has(post.slug)) queued.push(post);
    }
  }

  console.log(`[blog-bot] ${published.size} posts published, ${queued.length} queued. Publishing up to ${COUNT}.`);
  if (!queued.length) {
    console.log('[blog-bot] No unpublished posts left — nothing to do.');
    process.exit(0);
  }

  const picks = queued.slice(0, COUNT);
  for (const post of picks) {
    post.content = parseMarkdownBody(post._body);
    delete post._body;
    delete post._file;
    post.readingTime = readingTime(post.content);
    validate(post);
  }

  const existing = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  const updated = [...picks.map(({ date, readingTime, ...rest }) => rest), ...existing].map((p) => p);
  // simpler: keep order picks newest-first
  const clean = (p) => {
    const { date, readingTime, ...rest } = p;
    return { ...rest, date, readingTime };
  };
  const final = [...picks.map(clean), ...existing];
  fs.writeFileSync(DATA_FILE, JSON.stringify(final, null, 2) + '\n');
  console.log(`[blog-bot] Wrote ${picks.length} post(s): ${picks.map((p) => p.title).join(' | ')}`);

  if (DRY_RUN) {
    console.log('[blog-bot] DRY RUN — not committing.');
    return;
  }

  git('config user.name "we2Tech Blog Bot"');
  git('config user.email "blog-bot@we2tech.pro"');
  const summary = picks.map((p) => `"${p.title}"`).join(', ');

  if (MODE === 'pr') {
    const branch = `blog-bot/${picks[0].slug}`;
    git(`checkout -b ${branch}`);
    git('add -A');
    git(`commit -m "blog-bot: publish ${summary}"`);
    git(`push -u origin ${branch}`);
    execSync(`gh pr create --title "Publish blog post(s)" --body "Auto-generated from blog-posts queue. Review then merge." --base master`, { cwd: REPO, stdio: 'inherit' });
    console.log('[blog-bot] Opened PR — review then merge to publish.');
  } else {
    git('add -A');
    git(`commit -m "blog-bot: publish ${summary}"`);
    git('push origin master');
    console.log('[blog-bot] Pushed to master — Vercel will auto-deploy.');
  }
}

main();
