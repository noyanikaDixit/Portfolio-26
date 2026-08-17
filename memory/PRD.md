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
- Videos: click-to-play tiles with extracted first-frame posters (/public/media/posters/), no autoplay
- Project galleries fully populated except 3-serve-landingpage-b (P1 now 2x2 video grid; P2 bts-b uses object-top so faces show; P3 has TV creative + app screenshot; P4 has both Myntra creatives; P5 has both event photos + GQ og-image thumbnail card + Instagram icon card)
- OG/Twitter share card generated (1200x630 plum-cream, /public/og-image.jpg) + meta tags in index.html
- Hero masked-reveal descender clipping fixed (padding moved to mask container)
- Serve grid complete: 3-serve-landingpage-b.gif (animated) added — all placeholders cleared
- Instagram reel card uses uploaded laptop screenshot thumbnail (/media/ig-reel-thumb.png)
- Thin plum scroll-progress bar under nav (framer-motion useScroll + scaleX)
- Mobile: hamburger menu, 2x2 stat grid, stacked layouts — verified
- Videos served locally from /public/media (H.264, portrait, verified)

## Backlog
- P1: Claude AI integration — user asked for it (2026-08-17); awaiting their pick of use case (chat assistant vs pitch generator) and model (Sonnet 4.6 vs Haiku 4.5); will need integration_expert + FastAPI route
- P2: favicon
- P2: custom domain once deployed externally

## Notes
- Fonts locked to exactly two: Playfair Display (headlines) + Inter (everything else); last stray mono removed
- Impact sections are bulleted stat lists (per user-supplied breakdown, 2026-08-17)
- Resume PDF replaced with latest version (same URL /media/Noyanika-Dixit-Resume.pdf)
- LinkedIn contact displays as "My Profile" label
- OG share card: /public/og-image.jpg + meta tags in index.html; viewable standalone at /og-image.jpg
- Desktop layout rework (2026-08-17): unified 1320px content container (nav, hero, work, explore, about, contact); Role/Impact sidebar is now a plum-tinted card stretched to match text column height; gallery gap reduced (mt-8); grids widened (P1/P3/P4/P5 lg:4-col, P2 lg:3-col) with gap-5 gutters, rounded corners + subtle shadows on every tile
- Name pronunciation: /media/name-pronunciation.m4a, speaker button beside hero name, click-to-play once
- Site-wide image lightbox: openLightbox custom event (Lightbox.js); all gallery/Explore images + headshot clickable
- Background music feature was added then removed at user request (2026-08-17)
- Explore More fully populated: magazine (video + GIF), wildcraft (video + IG post card with cover)

## Test Credentials
- No auth — see /app/memory/test_credentials.md (empty by design)
