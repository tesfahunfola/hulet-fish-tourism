# Hulet Fish Tourism Platform

This project now includes both the frontend (Next.js) and backend (Node.js/Express) for the Hulet Fish community-based tourism platform.

## Monorepo Structure

```
app/         # Next.js frontend application
backend/     # Node.js/Express backend API
components/  # Shared React components
hooks/       # Shared React hooks
lib/         # Shared libraries and utilities
public/      # Static assets
styles/      # Global styles
```

## Getting Started

### Frontend (Next.js)

1. Navigate to the root directory.
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Run the development server:
   ```bash
   pnpm dev
   ```

### Backend (Node.js/Express)

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables (see `backend/.env.example`).
4. Start the backend server:
   ```bash
   npm start
   ```

## Features
- Full-stack monorepo: Next.js frontend + Express backend
- User authentication, booking, payments, reviews, and more
- See `backend/README.md` for backend API details

---

For more information, see the documentation in each subfolder.
