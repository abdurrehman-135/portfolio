# Abdur Rehman Ansari Portfolio

A full-stack personal portfolio for **Abdur Rehman Ansari** built with:

- `React + Vite`
- `Bootstrap`
- `Redux Toolkit + RTK Query`
- `Node.js + Express`
- `MongoDB + Mongoose`
- `JWT admin authentication`

The implementation follows the supplied design direction from:

- `deign/stitch_abdur_rehman_ansari_portfolio_cms/.../portfolio_homepage`
- `deign/stitch_abdur_rehman_ansari_portfolio_cms/.../admin_dashboard`
- `deign/stitch_abdur_rehman_ansari_portfolio_cms/.../devstack_modern/DESIGN.md`

## Features

- Responsive public portfolio with Home, About, Projects, Resume, Services, and Contact pages
- Bootstrap-based UI customized to match the provided editorial dark design system
- Dynamic content fetched from MongoDB-backed REST APIs
- Redux Toolkit state for auth, theme mode, and project filters
- RTK Query data layer for API fetching and mutations
- Protected admin dashboard with CRUD for:
  - Projects
  - Skills
  - Experience / resume items
  - Services
  - Profile content
  - Contact message status
- Contact form with frontend + backend validation and MongoDB persistence
- Seed script with sample content for Abdur Rehman Ansari
- Dark/light mode toggle
- Loading states, error states, and 404 page
- SEO-friendly page titles with `react-helmet-async`

## Project Structure

```text
.
├── client/   # React frontend
├── server/   # Express + MongoDB backend
└── deign/    # Provided design reference assets
```

## Environment Setup

Create environment files from the examples:

### Server

Copy `server/.env.example` to `server/.env`

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/abdur_portfolio
JWT_SECRET=replace-with-a-strong-secret
CLIENT_URL=http://localhost:5173
ADMIN_EMAIL=admin@abdurportfolio.dev
ADMIN_PASSWORD=portfolio123
```

### Client

Copy `client/.env.example` to `client/.env`

```env
VITE_API_URL=http://localhost:5000/api
```

## Installation

Install dependencies at the root and inside both apps:

```bash
npm install
npm run install:all
```

## Seed the Database

Make sure MongoDB is running, then seed sample data:

```bash
npm run seed
```

Default seeded admin login:

- Email: `admin@abdurportfolio.dev`
- Password: `portfolio123`

## Run the App

Start frontend and backend together:

```bash
npm run dev
```

Or run them separately:

```bash
npm run dev:server
npm run dev:client
```

Frontend: `http://localhost:5173`

Backend API: `http://localhost:5000/api`

## Available API Routes

### Public

- `GET /api/health`
- `GET /api/profile`
- `GET /api/projects`
- `GET /api/skills`
- `GET /api/experiences`
- `GET /api/services`
- `POST /api/messages`
- `POST /api/auth/login`

### Protected Admin

- `GET /api/auth/me`
- `PUT /api/profile`
- `POST/PUT/DELETE /api/projects`
- `POST/PUT/DELETE /api/skills`
- `POST/PUT/DELETE /api/experiences`
- `POST/PUT/DELETE /api/services`
- `GET /api/messages`
- `PATCH /api/messages/:id/status`

## Production Notes

- In production, the Express server is ready to serve the built React app from `client/dist`.
- Update seed data, profile content, and admin credentials before deploying.
- Replace placeholder URLs, images, and contact details with Abdur Rehman Ansari's real information.
