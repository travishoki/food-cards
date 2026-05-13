# Food Cards

Rails serves a **server-rendered** catalog at the root and a **JSON API** for a separate **React + Vite** SPA under `frontend/` (two processes, two URLs).

## Prerequisites

- **Ruby 3.1+** and **Bundler** (see `.ruby-version`). If `bundle` hits broken **asdf** shims, run `brew install ruby` or fix `PATH`; `bin/setup` and `bin/rails` prepend Homebrew Ruby when present.
- **Node.js** (LTS) and **npm** for the React app in `frontend/`.

## One command: Rails + Vite together

From the repo root (installs `frontend/node_modules` if missing, then starts both):

```bash
bin/setup   # once: gems + db
bin/dev
```

- **Rails (API + HTML):** [http://127.0.0.1:3000](http://127.0.0.1:3000) — ERB “Food Cards” at `/`, JSON at [`/api/foods`](http://127.0.0.1:3000/api/foods).
- **React SPA:** [http://127.0.0.1:5173](http://127.0.0.1:5173) — Vite dev server; `/api` is **proxied** to Rails so `fetch("/api/foods")` works without CORS in the browser.

## Two terminals (manual)

Terminal 1 — Rails:

```bash
bin/rails server -p 3000
```

Terminal 2 — Vite:

```bash
cd frontend && npm install && npm run dev
```

Open **5173** for React. Rails must be on **3000** first so the proxy and image URLs resolve.

### Nothing loads on port 5173?

1. **Confirm Vite is running** — you should see `Local: http://127.0.0.1:5173/` (or similar) in the terminal where `npm run dev` or `bin/dev` started. If that process exited, check for “Port 5173 is in use” (`strictPort: true`) or a Node version error.
2. **Start from `frontend/`** — `npm run dev` must be run with the current directory set to `frontend/` (or use `bin/dev` from the repo root).
3. **Try `http://localhost:5173/`** as well as `http://127.0.0.1:5173/` if one behaves differently.
4. **Blank page but the tab loads** — open DevTools → Console. If the API fails, you should still see the **“Food Cards (React)”** heading and either **Loading…** or an error line about Rails on port 3000.

## Direct API + CORS

The React app can also call Rails **directly** (e.g. `fetch("http://127.0.0.1:3000/api/foods")`). **`rack-cors`** allows `http://localhost:5173` and `http://127.0.0.1:5173`. Adjust `config/initializers/cors.rb` if your Vite URL differs.

## Production

- Set **`SECRET_KEY_BASE`** before booting Rails.
- Build the SPA: `cd frontend && npm run build` — serve `frontend/dist` from nginx/CDN or sync into `public/` per your hosting plan.

## Stack

- Rails 7.2, Puma, SQLite, Propshaft  
- `rack-cors`, `foreman` (dev)  
- React 19, Vite 4 (`frontend/`)
