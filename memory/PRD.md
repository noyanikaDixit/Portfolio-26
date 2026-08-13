# PRD — Noyanika Dixit Portfolio

## Original Problem Statement
Minimal, editorial one-page portfolio for a creative strategist ("more design studio than corporate resume"). Sections: Hero (name, subheadline, tagline, intro, headshot, 4-stat bar), Selected Work (5 project cards with media galleries, role lists, and quantified Impact lines), About (bio, NIFT/MFM education, Download Resume), Contact (email/phone/LinkedIn). Accent: deep plum (user-confirmed). Serif headlines (Playfair Display) + sans body (Inter). Fully responsive. Subtle scroll-fade animations, lightweight.

## Architecture
- Pure frontend React app (CRA + craco + Tailwind), no backend/db needed
- framer-motion: masked line-by-line hero reveal, scroll reveals, parallax feature images, floating headshot
- lenis: smooth momentum scrolling with anchor-nav integration (window.__lenis)
- react-fast-marquee: slow editorial marquee strip
- Media: uploaded assets served from Emergent CDN (images) and locally from /public/media (mp4s, H.264 verified)
- Missing assets render as clearly-labeled "awaiting upload" slots matched by filename

## User Personas
- Recruiters/hiring managers scanning impact numbers
- Brand/creative leads evaluating craft and range
- Collaborators & press

## Core Requirements (static)
- One-page scroll, anchor nav (Home/Work/About/Contact)
- 5 project cards, each with Impact line containing real numbers
- YouTube embeds (4, Project 2) + Instagram/GQ link cards (Project 5)
- Fully responsive, plum accent only, generous whitespace

## Implemented (2026-08-13)
- Kinetic hero: masked single-line name reveal, centered layout (name, subheadline, tagline, intro), floating circular headshot below with offset plum ring, 4-stat bar ("3 Awards for Distinguished Work")
- Editorial marquee strip (Brand · Content · Conversion …)
- Selected Work: 5 numbered chapters, text-first layout (tag/title/body + roles/impact), uniform media grids below with consistent per-project aspect ratios (P1: 3-col 3/4; P2: 3-col 4/3 even 6-item grid; P3: 2x2 3/4; P4: 2-col 16/10; P5: 2x2 4/3)
- Project 2: 4 working YouTube embeds; Project 5: Instagram + GQ India link cards; Project 4: Impact section removed (no metrics yet)
- About: pull-quote, bio, two education lines (NIFT MFM + Amity BJMC), working Download Resume button (PDF in /public/media)
- Contact: real details — noyanikadixit@gmail.com, +91-8795790773, linkedin.com/in/noyanika-dixit-258bb815b
- Thin plum scroll-progress bar under nav (framer-motion useScroll + scaleX)
- Mobile: hamburger menu, 2x2 stat grid, stacked layouts — verified
- Videos served locally from /public/media (H.264, portrait, verified)

## Backlog
- P0: Remaining image uploads (1-onsitestores c–e, 3-serve b & d, 4-myntra-b, 5-social-b) — slots labeled and ready
- P1: Myntra (Project 4) impact metrics once shareable
- P2: OpenGraph/social share image, favicon
- P2: Instagram native embed (oEmbed) instead of link card

## Test Credentials
- No auth — see /app/memory/test_credentials.md (empty by design)
