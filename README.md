# Viet Portfolio

A personal portfolio and blog for Viet Trinh, built with Next.js, TypeScript, Tailwind CSS, and MDX content collections.

The site presents a concise software engineering profile: hero/about sections, education, skills, selected projects, GitHub activity, contact links, and a paginated blog.

## Tech Stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- MDX via `content-collections`
- Radix UI primitives and lucide-react icons
- next-themes for light/dark mode
- Motion-based UI transitions

## Getting Started

Use Node.js 18 or newer. This project uses `pnpm` and includes a `pnpm-lock.yaml`.

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000` in your browser.

## Scripts

```bash
pnpm dev       # Start the local development server
pnpm build     # Create a production build
pnpm start     # Run the production server
pnpm lint      # Run ESLint
pnpm lint:fix  # Run ESLint with automatic fixes
```

## Project Structure

```text
src/app/                 App Router pages, layout, metadata, and OG images
src/components/          Reusable UI, sections, MDX components, and icons
src/data/resume.tsx      Portfolio profile data, skills, education, projects, and links
src/lib/                 Utility functions, pagination, and MDX remark helpers
content/                 Blog posts written in MDX
public/                  Images, project screenshots, avatar, logos, and fonts
content-collections.ts   MDX collection schema and compilation config
```

## Editing Content

Most portfolio content lives in `src/data/resume.tsx`. Update this file to change the profile summary, skills, education, projects, and contact links.

Blog posts live in `content/` as `.mdx` files. Each post must include frontmatter matching the schema in `content-collections.ts`:

```yaml
---
title: "Post title"
publishedAt: "2026-01-01"
summary: "Short description shown in previews."
---
```

Images and other static assets belong in `public/` and can be referenced from the app with root-relative paths such as `/me.png` or `/project1.png`.

## License

This project is licensed under the MIT License. See `LICENSE` for details.
