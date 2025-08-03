# 🧠 Copilot Project Bootstrap: RugTrace MVP

## Overview

Build a basic MVP for **RugTrace** — a token scanner that detects rugpull risk from smart contracts.

Use:

- **Frontend**: Next.js (TypeScript) + Tailwind CSS
- **Backend**: Express.js API with `/scan-token` endpoint returning mock data
- Local dev should work out-of-the-box

---

## 📁 Folder Structure

Create:

- `/frontend` → Next.js + Tailwind (TypeScript)
- `/backend` → Node.js + Express API

---

## 🎨 Frontend Requirements (in `/frontend`)

1. Scaffold with:  
   `npx create-next-app@latest . --typescript`

2. Setup Tailwind CSS:
   - Install: `npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p`
   - Configure `tailwind.config.js` and `globals.css`

3. Build a simple page at `pages/index.tsx`:
   - Input field for token address
   - Button: “Scan”
   - Placeholder for Rug Score + Flags (you can mock with static data for now)

4. Add script to run dev server:  
   `npm run dev`

---

## ⚙️ Backend Requirements (in `/backend`)

1. Initialize with `npm init -y`  
2. Install: `npm install express cors`
3. Create `index.js` with:
   - Express server on port `3001`
   - POST `/scan-token` endpoint
   - Accepts JSON body: `{ tokenAddress: string }`
   - Returns mock result like:
     ```json
     {
       "rugScore": 83,
       "flags": {
         "mintable": true,
         "lpLocked": false,
         "highTax": true
       }
     }
     ```

4. Add CORS support and logging  
5. Add script: `"dev": "node index.js"`

---

## 🔁 .gitignore

Ignore:
