# Hulet Fish Tourism Platform

A modern, scalable platform for discovering and booking authentic Ethiopian tourism experiences. This repository contains the frontend (Next.js + TypeScript) and supporting utilities for a role-based application that serves tourists, hosts, guides, and administrators.

Live demo: https://v0-huletfishtourism.vercel.app/

---

## Table of Contents
- [Description](#description)
- [Repository](#repository)
- [Tech Stack](#tech-stack)
- [Getting Started (Local Development)](#getting-started-local-development)
   - [Prerequisites](#prerequisites)
   - [Install dependencies](#install-dependencies)
   - [Run the dev server](#run-the-dev-server)
- [Designs & Screenshots](#designs--screenshots)
- [Deployment](#deployment)
- [Project structure](#project-structure)
- [Development notes](#development-notes)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)

---

## Description
This project is a full-featured frontend for a tourism booking platform focused on authentic Ethiopian experiences. The app includes:
- A public marketing homepage with in-page sections (Destinations, Experiences, Become a Host, About, Contact).
- A role-based dashboard for Admin / Host / Guide / Tourist to manage tours, bookings, reviews, and content.
- UI primitives and reusable components located under `components/ui` for rapid development.

The frontend is implemented using Next.js App Router and TypeScript for predictable builds and strong editor support.

## Repository
Replace the placeholder below with the actual GitHub repo URL for this project:

Repository: https://github.com/<YOUR-ORG>/<YOUR-REPO>

(You should update the above line with the real repository link before sharing.)

---

## Tech Stack
Frontend:
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- lucide-react (icons)
- sonner / toast patterns for notifications

Optional / Recommended backend (not shipped in this frontend-only repo):
- Node.js + Express or NestJS
- PostgreSQL (Prisma) or MongoDB
- Redis (cache, sessions)
- S3-compatible object storage (images)

Tools & Dev:
- ESLint, Prettier
- pnpm (recommended) / npm
- Vercel for frontend hosting

---

## Getting Started (Local Development)

### Prerequisites
- Node.js 18+ installed in your environment
- Git
- Recommended: pnpm (project prefers pnpm but npm works)
- If running inside WSL, open the project folder in WSL to keep paths and node_modules consistent

### Install dependencies
From the project root:

```bash
# If you have pnpm installed in your environment
pnpm install

# Otherwise (works in WSL), use npm
npm install
```

### Run the dev server

```bash
# Start the Next.js dev server
npm run dev
# or with pnpm
pnpm dev
```

Open the Local URL printed by Next in your terminal (e.g., http://localhost:3000 or 3001). If the browser shows ChunkLoadError or 404 for _next/ chunks, confirm you opened the exact port the server is listening on and perform a hard refresh.

---

## Designs & Screenshots
Include links to your design assets and illustrative screenshots here. Replace the placeholders below with real links/files:

- Figma mockups: https://www.figma.com/file/<YOUR-FIGMA-PATH>
- Circuit / architecture diagram: docs/architecture-diagram.png (or a link to Miro/diagrams.net)

Screenshots (add images to `public/screenshots/` and reference them):

- `public/screenshots/homepage.png` — Homepage hero and nav
- `public/screenshots/destinations.png` — Destinations section
- `public/screenshots/dashboard-admin.png` — Admin dashboard (analytics)

Add these images to the `public/screenshots` folder and reference them here for the repo README to display them.

---

## Deployment
The frontend is deployed to Vercel:

- Production: https://v0-huletfishtourism.vercel.app/

Deployment notes:
- The project is configured for Vercel (Next.js) — environment variables should be set in the Vercel dashboard.
- For backend services (if any), deploy the API to a separate host (Heroku, DigitalOcean App Platform, AWS) and set the API base URL via env vars.

Quick steps to deploy the frontend to Vercel:
1. Connect the GitHub repository to Vercel.
2. Configure environment variables (if required).
3. Choose production branch (e.g., `main`) and deploy.

---

## Project structure
A short overview of the important folders and files:

```
app/                # Next.js App Router pages and layouts
components/         # Reusable UI components (site header, footer, dashboard pieces)
components/ui/      # UI primitives (Button, Dialog, Input, etc.)
lib/                # Utilities, i18n, mock data
hooks/               # Custom React hooks
public/             # Static assets and images
styles/             # Global CSS (Tailwind config + globals.css)
README.md           # This file
```

---

## Development notes
- Use the workspace TypeScript in VS Code: Command Palette → "Select TypeScript Version" → "Use Workspace Version" to avoid editor false positives.
- If you see TypeScript or module resolution errors, ensure you opened the repository in WSL (if running dev there) and that node_modules are installed in the same environment.
- Temporary diagnostic notes: a few files were added with `// @ts-nocheck` during local troubleshooting — these should be removed once the workspace TypeScript and dependencies are aligned.

---

## Contributing
1. Fork the repo
2. Create a branch for your feature/fix
3. Run tests & linting (if configured)
4. Open a pull request against the `main` branch with a clear description

Please follow the repository's coding conventions and ensure PRs include screenshots or notes for UI changes.

---

## Support
If you need help, contact the maintainer:

- Maintainer: t.zanafola@alustudent.com

Or open an issue on the repository.

---

## License
This project is licensed under the MIT License.

---

*Replace placeholders (repository URL, Figma link, screenshots) with your actual links before sharing this README.*

# Hulet Fish Tourism Platform

A modern, scalable, and community-driven platform for booking and managing authentic Ethiopian  tourism experiences. This monorepo includes both the frontend (Next.js) and backend (Node.js/Express) applications, and is designed to deliver a seamless experience for tourists, hosts, guides, and administrators.


   **Live Preview**:  
   You can view the deployed frontend at [https://v0-huletfishtourism.vercel.app/](https://v0-huletfishtourism.vercel.app/)

