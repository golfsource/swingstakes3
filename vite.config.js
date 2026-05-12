# ⛳ Swing Stakes

> Golf betting tracker — Skins, Wolf, Nassau, Vegas, Banker & more

## Tech Stack
- **React 18** + Vite
- **Netlify** — hosting & CD
- **GitHub** — source control
- **Supabase** *(coming soon)* — real-time multiplayer & auth

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build
```

---

## Deploy to Netlify (one-time setup)

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/swing-stakes.git
git push -u origin main
```

### 2. Connect Netlify
1. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**
2. Select your `swing-stakes` repo
3. Build settings are auto-detected from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **Deploy site**

Every `git push` to `main` auto-deploys. ✅

---

## Game Types
- Play Golf, Wolf, Skins, Round Robin
- Nassau, 2 Man Low Ball, Banker, Match Play
- 2 Man Scramble, 9/16/25 Point
- **Vegas** (Assigned / 6-6-6 / Dynamic)

## Junk Bets
Greenies, Sandies, Fairway, Pullies, Birdies, Eagles, Long Drive, Snake/3-Putt, Points, GIR/Hogan, Custom

---

## Supabase Setup (multiplayer)
Coming in next phase — real-time score sync, user auth, game history.
