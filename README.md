# Arcadia — Premium Gaming Portal (Demo)

This repository contains a **frontend** (React + Vite + Tailwind) and a **backend** (FastAPI).
It's a starter template showcasing a premium gaming-style UI and a lightweight Python backend with a WebSocket endpoint.

## Quick start (dev)

### Frontend
1. `cd frontend`
2. `npm install`
3. `npm run dev`
- The frontend will run on Vite (default http://localhost:5173).

### Backend
1. `cd backend`
2. `python -m pip install -r requirements.txt`
3. `uvicorn app_main:app --reload --port 8000`
- Backend runs on http://localhost:8000

### Notes
- The frontend calls `/api/games` (relative). For local dev, either:
  - Run both on the same host and use a reverse proxy, or
  - Start Vite with a proxy in `vite.config.js` (not configured in this demo), or
  - Use absolute URLs to `http://localhost:8000/api/...` in the frontend.

Enjoy — this is a demo starter. Customize layouts, animations, and backend features to match your production needs.
