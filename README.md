<div align="center">

# ✦ Finvera

**SEO-first Astro landing for a universal fintech platform**

[![Astro](https://img.shields.io/badge/Astro-6.0.8-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2.2-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Sitemap](https://img.shields.io/badge/SEO-Sitemap_Ready-67E8F9?style=for-the-badge)](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
[![Netlify](https://img.shields.io/badge/Netlify-Deploy-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://netlify.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

*A polished static-first landing system for a fictional fintech brand, built to demonstrate senior-level information architecture, premium visual direction, and route-level SEO foundations from day one.*

*Originally scoped as a landing concept, Finvera evolved into a compact multi-page SEO-first marketing site while keeping the initial naming for continuity.*

</div>

---

## ✨ Highlights

- Static-first Astro architecture with minimal client overhead
- Route-level pages for `solutions`, `industries`, `security`, `contact`, and `blog`
- Shared layout and metadata layer with canonical tags, Open Graph, Twitter tags, and JSON-LD support
- Sitemap integration and dynamic `robots.txt`
- Data-driven content model in `src/data/site.ts`
- Tailwind CSS 4 with a custom brand system, atmospheric background, and reusable surface classes
- Responsive layout designed to feel premium on desktop and mobile without unnecessary JavaScript

---

## 🧭 Pages

- `/` - fintech landing homepage
- `/solutions` - solution overview
- `/solutions/[slug]` - solution detail pages
- `/industries` - industry overview
- `/industries/[slug]` - industry detail pages
- `/security` - trust and governance overview
- `/contact` - conversion page
- `/blog` - insight hub
- `/blog/[slug]` - article pages
- `/robots.txt` - dynamic crawler rules

---

## 🛠️ Tech Stack

| Layer | Technology |
|------|------------|
| Framework | Astro 6 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| SEO | `@astrojs/sitemap`, canonical metadata, JSON-LD, Open Graph |
| Content | Local TypeScript content model |
| Hosting | Static deployment ready |

---

## 🗂️ Project Structure

```text
astro-fintech-universal-landing/
├── public/
│   ├── favicon.svg
│   └── og-finvera.svg
├── src/
│   ├── components/
│   │   ├── CtaBanner.astro
│   │   ├── FaqList.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── JsonLd.astro
│   │   ├── PageHero.astro
│   │   └── SectionHeading.astro
│   ├── data/
│   │   └── site.ts
│   ├── layouts/
│   │   └── MainLayout.astro
│   ├── pages/
│   │   ├── blog/
│   │   ├── industries/
│   │   ├── solutions/
│   │   ├── contact.astro
│   │   ├── index.astro
│   │   ├── robots.txt.ts
│   │   └── security.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── LICENSE
├── netlify.toml
├── package.json
└── README.md
```

---

## 💻 Local Development

### 📦 Install

```bash
npm install
```

### ▶️ Run dev server

```bash
npm run dev
```

### 🏗️ Build

```bash
npm run build
```

---

## 🔎 SEO Notes

- `site` URL is configured in `astro.config.mjs`
- Override the production domain with `SITE_URL` during deployment
- Metadata is managed centrally in `src/layouts/MainLayout.astro`
- Structured data is passed page-by-page through the `schema` prop
- Sitemap output is generated automatically during build

---

## 🧠 Content Model

All core brand copy, solution data, industry data, FAQ items, and articles live in:

`src/data/site.ts`

This keeps the MVP simple while making future CMS migration straightforward if the project grows.

## 🌐 Deployment

### 🌐 Netlify (Recommended)

1. Push your code to GitHub
2. Connect repository to Netlify
3. Build settings are auto-configured via `netlify.toml`
4. Deploy!

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

---

## 📄 License

MIT License. See `LICENSE`.
