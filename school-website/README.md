# SchoolWeb

A responsive React and Vite demo for a school website, with Basic, Standard, and Premium page examples. Tailwind CSS v4 is integrated through the Vite plugin and used for shared layout components; the page demos retain their existing component styles.

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

## Connect the Website CMS

The Standard website pages can load published page content from the Django CMS. Set `VITE_CMS_API_URL` to the public base URL of the deployed Django project (do not include `/api/pages/`). In Vercel, add this as a project environment variable and redeploy.

For local development, copy `.env.example` to `.env.local` and set `VITE_CMS_API_URL=http://127.0.0.1:8000`. Start Django from the sibling `CMS` project with `python manage.py runserver`, then start Vite from this `school-website` directory with `npm run dev`.

Create CMS pages with these slugs to replace the matching Standard pages when published:

- `standard` (home), `standard-about`, `standard-academics`, `standard-staff`, `standard-news`, `standard-events`, `standard-gallery`, `standard-downloads`, `standard-contact`.

If the API URL is unset or a page is not published, the site continues to show its built-in demo content. The Django deployment must allow this Vercel origin in `CMS_CORS_ALLOWED_ORIGINS` and its own hostname in `DJANGO_ALLOWED_HOSTS`.
