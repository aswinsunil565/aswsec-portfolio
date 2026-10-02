# Aswin CS – Cybersecurity Portfolio (React + Vite, hosted on Vercel)

## Run locally
```
npm install
cp .env.example .env     # then set WEB3FORMS_ACCESS_KEY in .env (never commit it)
npm run dev
npm run build
```

## How the contact form stays secure
- The browser posts to `/api/contact` (`api/contact.js`, a Vercel serverless function).
- The function reads `WEB3FORMS_ACCESS_KEY` from server-side environment variables and forwards the message to Web3Forms. The key is never in the bundle, repo or browser.
- `.env` is git-ignored; only `.env.example` (no value) is committed.
- Do NOT rename the variable with a `VITE_` prefix: Vite would bundle it into public JavaScript.

## Deploy (GitHub → Vercel)
1. Push this project to your GitHub repo (see commands below).
2. Vercel → Project → Settings → Environment Variables → add `WEB3FORMS_ACCESS_KEY` for Production, Preview and Development.
3. Framework preset: Vite · Build command `npm run build` · Output `dist`. Redeploy after adding the variable.
4. Put your resume at `public/assets/resume.pdf` (it is public once deployed).

## Hardening checklist
- GitHub → Settings → Code security: enable Secret scanning, Push protection, Dependabot alerts.
- Run `npm audit` before releases and commit `package-lock.json`.
- Security headers + CSP are set in `vercel.json`.
- Consider Vercel Firewall rate limiting on `/api/contact`.
