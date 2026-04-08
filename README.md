# Concordia Biomedical Engineering Club Website

## Tech Stack
- Next.js 12 + TypeScript
- Tailwind CSS (JIT)
- Google Fonts: Playfair Display, Lora, IBM Plex Mono

## Pages
- `/` — Home: mission statement, goals, quick links
- `/projects` — AI Dermatology Tool, True North Competition, Research Opportunities
- `/team` — Executive board with photo upload support
- `/contact` — Contact form + social links

## Brand Colors
- Maroon: `#7B1C1C`
- Tan/Gold: `#C49A6C`  
- Cream: `#FAF7F2`
- Parchment: `#EDE4D3`
- Ink: `#1C1410`

## Setup & Run

```bash
npm install
npm run dev       # Development server → http://localhost:3000
npm run build     # Production build
npm run export    # Static export for Netlify
```

## Deploy to Netlify
1. Push to GitHub
2. Connect repo in Netlify
3. Build command: `npm run build && npm run export`
4. Publish directory: `out`

## Team Photo Upload
On the Team page, click any profile picture circle to upload a photo from your device.
Photos are stored in browser memory (session only). To make them permanent, add an image upload backend or store URLs in the config.

## Adding LinkedIn URLs
Edit `src/pages/team.tsx`, find the `INITIAL_TEAM` array, and add the `linkedin` field for each member.

## Contact Form
The form opens the user's mail client pre-filled to BEC@csu.qc.ca.
For a proper backend form, integrate [Formspree](https://formspree.io) or Netlify Forms.
