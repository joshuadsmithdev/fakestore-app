# Deploying a React App (Netlify or Vercel)

## Netlify
1) Push repo to GitHub.
2) Netlify → New site from Git → select the repo.
3) Build command: `npm run build`  •  Publish directory: `build`
4) Add this `netlify.toml` to root (already provided).
5) Deploy. Netlify gives you a live URL.

## Vercel
1) Import the repo at vercel.com (Login with GitHub).
2) Build output: detected automatically. For CRA, output is `build/`.
3) Add `vercel.json` (already provided) to enable React Router fallback.
4) Deploy. Vercel gives you a live URL.
