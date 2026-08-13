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
- Kinetic hero: masked line reveal, plum italic "Dixit", floating circular headshot with offset plum ring, 4-stat bar
- Editorial marquee strip (Brand · Content · Conversion …)
- Selected Work: 5 numbered chapters, feature media with parallax (images), autoplay muted videos, role lists, plum Impact boxes
- Project 2: 4 working YouTube embeds; Project 5: Instagram + GQ India link cards
- About: pull-quote, bio, education, styled disabled Download Resume button (PDF pending)
- Contact: massive "Let's Build Something", placeholder email/phone/LinkedIn (clearly marked)
- Mobile: hamburger menu, 2x2 stat grid, stacked layouts — verified
- Videos moved to /public/media for reliable local playback (H.264, portrait)

## Backlog
- P0: Upload remaining images (1-onsitestores b–e, 2-onset-bts-b, 3-serve b–d, 4-myntra a–b, 5-social-b) — slots are labeled and ready
- P0: Real contact details (email, phone, LinkedIn URL)
- P0: Resume PDF for Download button
- P1: Myntra (Project 4) impact metrics once shareable
- P2: OpenGraph/social share image, favicon
- P2: Instagram native embed (oEmbed) instead of link card

## Test Credentials
- No auth — see /app/memory/test_credentials.md (empty by design)
