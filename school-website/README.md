# SchoolWeb

A responsive React and Vite demo for a school website, with Basic, Standard, and Premium page examples.

## Develop

```sh
npm install
npm run dev
```

## Verify and build

```sh
npm run lint
npm run build
npm run preview
```

Vite writes the production site to `dist/`. The included `vercel.json` rewrites direct requests for client-side routes to `index.html`, so nested paths work when opened directly or refreshed.

## Deploy to Vercel

1. Import this repository in Vercel and set the project root to this `school-website` directory.
2. Select the Vite preset, build command `npm run build`, and output directory `dist`.
3. Deploy a preview and check the home page, a nested page opened directly, contact links, calendar downloads, and gallery images.

No server-side runtime or environment variables are configured. Contact forms open a prefilled email draft addressed to `karlilinux097@gmail.com`; they do not send mail themselves. Visitors need an email application or browser mail handler configured. RSVP buttons work the same way. Calendar buttons download `.ics` files.

## Before publishing for a real school

This is a sample site. Replace Greenfield International School, the fictional address and phone numbers, sample staff/student counts and claims, event dates, and demo copy with approved school information. Check admissions availability, fees, accreditation claims, contact recipient, map location, and every downloadable document. The hero and gallery use credited Unsplash photos when visitors have internet access, with locally hosted vector illustrations as image-load fallbacks. These are stock photos, not photos of the fictional Greenfield campus. Replace them with school-approved, properly licensed campus photos before publishing this as a real school's website.

The pricing pages describe example package features. Confirm each listed feature exists and is supported before offering a package to clients.
