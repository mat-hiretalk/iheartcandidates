# iHeart Candidates — Client Collaboration Portal

This Next.js application showcases a recruiter-to-client collaboration hub. Recruiters can search a curated pool of candidates, review AI-tailored resume insights, shortlist favorites, and share a live link with clients so they can react, favorite, and schedule interviews.

## Features

- 🔎 **Searchable candidate catalog** with role, skill, and location filters.
- 🤖 **AI-assisted tailoring** that highlights how each profile maps to a selected job description.
- 🧭 **Client alignment radar** summarizing how well each candidate fits individual client accounts.
- 📝 **Engagement timeline & resume highlights** for fast context during candidate reviews.
- 💌 **Shareable slates** that generate trackable links for client collaboration.
- 📅 **Calendly scheduling shortcut** so hiring teams can immediately book interviews.

## Getting started

Install dependencies (already handled in this workspace, but run again if needed):

```bash
npm install
```

Run the development server on port **3222**:

```bash
npm run dev -- --port 3222
```

Then open [http://localhost:3222](http://localhost:3222) in your browser.

## Project structure

- `src/app/page.tsx` – Main application UI and mocked product data.
- `src/app/globals.css` – Global Tailwind-driven styling with a custom background.
- `public/` – Static assets served by Next.js.

## Scripts

- `npm run dev` – Start the dev server (pass `-- --port 3222` to match this setup).
- `npm run build` – Create an optimized production build.
- `npm run start` – Launch the production server after building.
- `npm run lint` – Run ESLint for code quality checks.

## Notes

The app uses static, curated data to illustrate the workflow. Swap in your ATS/CRM and AI enrichment endpoints to power a production-ready experience.
