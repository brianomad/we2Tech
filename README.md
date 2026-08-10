# we2Tech — Official Website

Marketing and SEO website for **we2Tech Ltd** (https://we2tech.pro), a Hong Kong-based development team building mobile apps, websites, UI/UX design and cloud systems.

Built with Next.js 9.5.3 + React 16 + theme-ui. Deploys automatically to Vercel from the `master` branch.

## Tech Stack

| Area        | Technology                                              |
| ----------- | ------------------------------------------------------- |
| Framework   | Next.js 9.5.3 (serverless target)                       |
| UI          | React 16.13, theme-ui, emotion                           |
| Animations  | framer-motion, react-scroll, react-stickynode           |
| Icons       | react-icons                                             |
| SEO         | next-sitemap, custom SEO component, JSON-LD schemas      |
| Forms       | Serverless API route (Google Sheets via `googleapis`)    |
| Analytics   | react-ga (`NEXT_PUBLIC_GA_ID`)                          |
| Blog bot    | Node.js script + GitHub Actions (no LLM API)            |

## Getting Started

```bash
# install dependencies (uses legacy-peer-deps via .npmrc)
npm install

# development server (http://localhost:3000)
npm run dev

# production build
npm run build

# start the production server
npm run serve
```

> **Important:** this project runs an old toolchain (Next 9.5.3 / webpack 4) on a modern Node. The build script already sets `NODE_OPTIONS=--openssl-legacy-provider`, which is required. Use a Node version compatible with that flag if your local build fails (e.g. Node 16–20).

If you start the server manually, e.g. for local verification:

```bash
pkill -f 'next start'; pkill -f 'next-server'; sleep 2
npx next start -p 3777
```

## Project Structure

```
├── blog-posts/                # 200 queued blog posts (plain text, parsed by the bot)
├── public/
│   ├── images/cases/          # 200 case-study photos (case-<id>.jpg)
│   ├── favicon.ico/.png       # company-logo favicons
│   ├── og-image.png           # social share image (1200x630)
│   └── sitemap.xml            # auto-regenerated on every build (next-sitemap)
├── scripts/blog-bot/
│   └── index.js               # publishes queued posts into blog-data.json + commits
├── .github/workflows/
│   └── blog-bot.yml           # cron (1st & 15th, 02:00 UTC) + manual dispatch
└── src/
    ├── pages/
    │   ├── index.js           # home page
    │   ├── cases.js           # case studies (200 anonymized projects, paginated + modal)
    │   ├── contact.js         # contact page
    │   ├── faq.js             # FAQ page
    │   ├── blog.js            # blog listing
    │   ├── blog/[slug].js     # individual blog post
    │   ├── services/          # 5 service pages (mobile, web, ui-ux, server, maintenance)
    │   ├── api/submit.js      # POST endpoint → Google Sheets (contact form)
    │   ├── _app.js            # providers, GA init, global CSS
    │   └── _document.js       # HTML shell, favicon links
    ├── components/            # header, footer, seo, json-ld, layout, service-blocks, ...
    ├── sections/              # home-page sections + page sections
    │   ├── cases.js           # case grid + detail modal + pagination
    │   ├── case-data.js       # 200 case entries (id/title/summary/tags/detail/tech)
    │   ├── blog.js            # blog listing section
    │   └── contactUs.tsx      # contact form section
    ├── data/blog-data.json    # all published blog content (single source of truth)
    ├── contexts/              # sticky + drawer providers
    ├── theme/                 # theme-ui theme (teal #008B8B branding)
    └── analytics/index.js     # react-ga helpers
```

### Key files for common tasks

| Task                                    | File                                            |
| --------------------------------------- | ----------------------------------------------- |
| Edit case list / add a case             | `src/sections/case-data.js`                     |
| Case card layout / modal / pagination   | `src/sections/cases.js`                         |
| Add or edit service page content        | `src/pages/services/*.js`                       |
| Home page section order                 | `src/pages/index.js`                            |
| Footer (address, links, sections)       | `src/components/footer/footer.js`               |
| Nav menu / Services dropdown            | `src/components/header/header.js` + `header.data` |
| SEO meta / structured data              | `src/components/seo.js`, `src/components/json-ld.js` |
| FAQ questions (also feeds JSON-LD)      | `src/sections/faq.js`                           |
| Blog content store                      | `src/data/blog-data.json`                       |

## Blog Bot (auto-publishing, no AI API)

Queued posts live as plain-text files in `blog-posts/*.txt`. Each file has YAML-style headers (`slug:`, `title:`, `description:`, `category:`, `tags:`) followed by `===BODY===` markdown content and ends with `===BLOG-END===`.

The bot (`scripts/blog-bot/index.js`) parses new files, skips slugs already published, validates the content, and prepends the newest posts to `src/data/blog-data.json`, then commits and pushes `master`.

Environment variables:

| Env var            | Purpose                                        | Default |
| ------------------ | ---------------------------------------------- | ------- |
| `BLOG_BOT_COUNT`   | How many queued posts to publish this run      | `2`     |
| `BLOG_BOT_DRY_RUN` | `1` = validate/print only, don't write or push | off     |
| `BLOG_BOT_MODE`    | `push` (commit+push master) or `pr` (open a PR)| `push`  |

The workflow `.github/workflows/blog-bot.yml` runs on a cron schedule (1st and 15th of each month at 02:00 UTC) and can also be triggered manually from the GitHub Actions tab with a custom `count`.

Local dry run:

```bash
BLOG_BOT_DRY_RUN=1 node scripts/blog-bot/index.js
```

> Note: GitHub disables scheduled workflows after 60 days of repo inactivity.

## Environment Variables

| Variable                 | Used by                                  |
| ------------------------ | ---------------------------------------- |
| `NEXT_PUBLIC_GA_ID`      | Google Analytics ID (react-ga)           |
| `GOOGLE_CLIENT_EMAIL`    | Contact form → Google Sheets (service account) |
| `GOOGLE_PRIVATE_KEY`     | Contact form → Google Sheets (service account) |
| `GOOGLE_SHEET_ID`        | Contact form → Google Sheets (spreadsheet ID) |
| `SMTP_HOST`              | Contact form → email (nodemailer SMTP host) |
| `SMTP_PORT`              | Contact form → email (default `465`)     |
| `SMTP_USER`              | Contact form → email (SMTP auth user)    |
| `SMTP_PASS`              | Contact form → email (SMTP auth password/app password) |
| `EMAIL_TO`               | Contact form → email recipient (default `enquiry@we2tech.pro`) |
| `EMAIL_FROM`             | Contact form → email sender (defaults to `SMTP_USER`) |

## SEO

- Canonical URLs + hreflang (`en` / `x-default`) on all pages.
- JSON-LD: `Organization`, `ProfessionalService`, `FAQPage`, `Service`, `BreadcrumbList`, `Article`.
- `next-sitemap` regenerates `public/sitemap.xml` + robots.txt on every build (so bot-published blog posts appear automatically).
- Social share image: `public/og-image.png`.

## Deployment

- Push to `master` → Vercel auto-deploys to https://we2tech.pro (45–120s delay).
- Local verification: build with `npm run build`, then `npx next start -p 3777` and curl/grep the pages.
- Static export / Firebase / Netlify configs (`vercel.json`, `netlify.toml`, `firebase.json`) are present but Vercel is the active deployment.
