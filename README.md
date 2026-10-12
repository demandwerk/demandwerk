# DemandWerk website

The website for demandwerk.com, built with [Astro](https://astro.build) as a fast static site. Deploys to Vercel.

## Editing

| What | Where |
| --- | --- |
| Company name, tagline, email, form key | `src/site.ts` (`company`) |
| Site map: About, Services, Learn pages, their titles, intros and menu order | `src/site.ts` (`about`, `services`, `learn`) |
| Longer copy for any of those pages | `src/content/pages/<page path>.md`, e.g. `services/seo.md` for `/services/seo/` |
| Blog posts | `src/content/posts/*.md` |
| Homepage copy (what we do, guarantees, how we work, why us) | `src/site.ts` |
| Homepage layout | `src/pages/index.astro` |
| Colors and fonts | `src/styles/global.css` (`:root` variables) |

Adding an entry to the site map in `src/site.ts` creates the page, adds it to the menus and footer, and lists it on its parent page. A page with no Markdown copy and no sub-pages shows a short "we're writing this page" note and is hidden from search engines until copy is added.

Long-form page copy is plain Markdown with an optional description for Google:

```md
---
description: "One or two sentences for search results."
---
## A heading

Body text…
```

A blog post looks like this (`category` is a slug from `blogCategories` in `src/site.ts`; the post appears at `/blog/<category>/<file name>/`):

```md
---
title: "Post title"
description: "One or two sentences for Google and the blog list."
date: 2026-10-12
category: opinions
---
Post body in Markdown…
```

## Running locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploying (Vercel)

Import this repo in Vercel; it detects Astro and builds automatically. Then add `demandwerk.com` under the project's Domains settings.

The contact form emails submissions through [Web3Forms](https://web3forms.com) (free). Enter the email that should receive inquiries on their site, then paste the access key into `formKey` in `src/site.ts`. Until then the form shows a "not connected yet" message.
