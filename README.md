# DemandWerk website

The website for demandwerk.com, built with [Astro](https://astro.build) as a fast static site. Deploys to Vercel.

## Editing

| What | Where |
| --- | --- |
| Company name, tagline, email, form key | `src/site.ts` (`company`) |
| Services, process steps, "why us" points, practice areas | `src/site.ts` |
| Homepage layout | `src/pages/index.astro` |
| Colors and fonts | `src/styles/global.css` (`:root` variables) |

## Running locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploying (Vercel)

Import this repo in Vercel; it detects Astro and builds automatically. Then add `demandwerk.com` under the project's Domains settings.

The contact form emails submissions through [Web3Forms](https://web3forms.com) (free). Enter the email that should receive inquiries on their site, then paste the access key into `formKey` in `src/site.ts`. Until then the form shows a "not connected yet" message.
