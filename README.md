# Piyush Jha — Portfolio

Personal brand site built with **Next.js**, **Tailwind CSS**, **Framer Motion**, and **Lenis** smooth scrolling.

## Edit all content in one file

**`content/site.json`** — every headline, paragraph, metric, project case study, link, and image path lives here. Save the file and refresh the site; no code changes needed for copy updates.

Draft copies and design notes live in **`insights/`** (`insights/site.json`, `insights/portfolio-design-brief.md`). When updating copy, edit `content/site.json` (the file the app loads).

| JSON section | What it controls |
|--------------|------------------|
| `site` | Name, tagline, SEO, GitHub/LinkedIn, location |
| `nav` | Header navigation |
| `footer` | Footer copy |
| `hero` | Home page hero |
| `stats` | Aggregate numbers & career highlights |
| `philosophy` | Philosophy section on home |
| `workPreview` | Spotlight cards section labels |
| `breadth` | Industries, delivery types, “also shipped” list |
| `capabilities` | Six capability cards |
| `process` | Zero-to-hero process steps |
| `marquee` | Scrolling tech keywords |
| `workPage` | /work page copy |
| `aboutPage` | /about page copy |
| `caseStudy` | Labels on project detail pages |
| `projects[]` | Full spotlight case studies + `media` per project |

### Loom walkthroughs

In each project under `projects[].media`:

```json
"loomEmbedId": "your-loom-id"
```

From `https://www.loom.com/share/abc123xyz` → use `abc123xyz`.

### Images

Set `projects[].media.hero` and `gallery` to paths under `public/`, e.g. `/images/my-screenshot.png`.

## Development

```bash
npm install
npm run dev
```

## Deploy (Vercel)

Import on [vercel.com](https://vercel.com) — Next.js auto-detected. Update `site.url` in `content/site.json` when your domain is live.

## Code structure

- **`content/site.json`** — all editable content
- **`src/lib/content.ts`** — loads JSON (do not edit for copy changes)
- **`src/types/content.ts`** — TypeScript types for the JSON shape
- **`src/components/`** — UI only; reads from `@/lib/content`
