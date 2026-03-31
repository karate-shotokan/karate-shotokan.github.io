## Checkpoint

### What was done
- Initialized git repository and pushed to https://github.com/karate-shotokan/karate-shotokan.git
- Fixed GitHub Pages routing: switched from `createBrowserRouter` to `createHashRouter`
  - URLs change from `/sobre` to `/#/sobre` — works perfectly on GitHub Pages
- Configured `vite.config.ts` base path to `/karate-shotokan/` for GitHub Pages deployment
- Created `.github/workflows/deploy.yml` — auto-deploys on every push to `main`
- Extracted ALL editable content to JSON files in `public/data/`:
  - `dojos.json` — 6 dojos with addresses, phones, emails, schedules, images
  - `events.json` — events/competitions/exams list
  - `home.json` — hero text, benefits, dojo preview, testimonials
  - `faq.json` — FAQs + beginner's guide
  - `graduations.json` — belt system, exam requirements, PDF documents
  - `resources.json` — videos, tutorial series, useful links
  - `partners.json` — affiliations + partners list
  - `schedule.json` — training schedule per city/age group
  - `about.json` — Sensei bio, achievements, philosophy, photos
  - `gallery.json` — gallery images with categories
  - `contact.json` — phone, email, address, social media links
- Created `src/app/hooks/useData.ts` — reusable hook that fetches JSON at runtime
- Refactored 10 pages (Home, Dojos, Events, Gallery, FAQ, Graduations, Resources, Partners, About, Schedule, Contact) to use `useData`
- Fixed broken `<a href>` links in Graduations/Contact to use `<Link to>` (HashRouter compatible)
- Build confirmed working: `vite build` succeeds with 0 errors

### Pending user decisions
- **GitHub Pages setup**: Go to https://github.com/karate-shotokan/karate-shotokan/settings/pages → set Source to "GitHub Actions"
- **Real content**: Replace placeholder data in JSON files with real info (phone numbers, addresses, real photos, etc.)
- **Custom domain**: If using `www.karateshotokan.pt`, change `base: '/karate-shotokan/'` to `base: '/'` in `vite.config.ts`

### Still left to do
- Fill in real contact info, addresses, phone numbers in JSON files
- Add real photos to `public/images/` and update image paths in JSON
- Configure GitHub Pages in repository settings (Source → GitHub Actions)
- (Optional) Add Google Maps embed to Contact page
- (Optional) Add form submission backend (e.g. Formspree) to Contact/Enrollment forms
