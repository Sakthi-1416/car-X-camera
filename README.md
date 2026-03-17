# 📸 Car X Camera — Photographer Portfolio

A brutalist-cinematic photographer portfolio built with React + Vite.

## 🚀 Run Immediately

```bash
# 1. Install dependencies (only needed once)
npm install

# 2. Start the dev server
npm run dev
```

Then open **http://localhost:5173** in your browser.

## 🏗️ Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
car-x-camera/
├── index.html                  # Entry HTML
├── vite.config.js              # Vite config
├── package.json                # Dependencies
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx                # React root mount
    ├── App.jsx                 # Root component + scroll logic
    ├── index.css               # Global styles + fonts
    ├── data/
    │   └── portfolio.js        # ✏️  EDIT THIS — photos, videos, Instagram handle
    └── components/
        ├── Cursor.jsx          # Custom cursor
        ├── FilmEdge.jsx        # Film strip decoration
        ├── Ticker.jsx          # Bottom scrolling ticker
        ├── Navbar.jsx          # Fixed nav + scroll progress
        ├── Hero.jsx            # Full-screen hero
        ├── Gallery.jsx         # Bento grid + lightbox
        ├── Films.jsx           # Video section
        ├── InstagramSection.jsx# Instagram strip + CTA
        ├── About.jsx           # Photographer bio
        ├── Contact.jsx         # Contact form
        └── Footer.jsx          # Footer
```

## ✏️ Customise

Open `src/data/portfolio.js` and update:

- `CONFIG.photographer` — Photographer's name
- `CONFIG.instagram` — Instagram username (without @)
- `CONFIG.tagline` — Hero tagline
- `CONFIG.bio` — About section bio
- `PHOTOS[]` — Replace `src` URLs with your own images
- `VIDEOS[]` — Replace `src` / `poster` URLs with your videos

## 🛠️ Requirements

- Node.js 18+ 
- npm 9+
# CarX-Camera
# CarX-Camera
