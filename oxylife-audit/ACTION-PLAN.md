# Oxylife SEO Action Plan — Prioritized
**Generated:** 2026-06-30

## CRITICAL (Do before going live)

- [ ] Set `NEXT_PUBLIC_SITE_URL=https://oxylife.my` in Vercel/production env → fixes sitemap, canonical, schema URLs in one shot
- [ ] Add `og:image` 1200×630px to `src/app/layout.tsx` → WhatsApp/Facebook share previews
- [ ] Add hreflang on root `/` page (already done on `/en`, missing on `/`) → bilingual SEO
- [ ] No `llms.txt` → create `public/llms.txt` so ChatGPT/Perplexity/Claude can index the site

## HIGH (Week 1–2)

- [ ] Fix heading hierarchy: H1 → H3 → H4 → H2 is broken. Should be H1 → H2 → H3
- [ ] Add `LocalBusiness` or `MedicalBusiness` schema with `openingHours`, `geo`, `priceRange`
- [ ] Add `aggregateRating` to Product schema (use real testimonials)
- [ ] Add security headers in `next.config.ts`: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`
- [ ] Fix EN H1 duplicate rendering bug in `EnHero.tsx` — same text renders twice (responsive visibility issue)
- [ ] Differentiate `/michelle` and `/albert` pages or add `noindex` — currently near-duplicate content

## MEDIUM (Weeks 3–4)

- [ ] Add `sameAs` to Organization schema (Google Maps, Facebook page URLs)
- [ ] Add `offers` block to Product schema
- [ ] Optimize `device-render.png` (428 KB) → convert to WebP, serve via Next.js `<Image priority>`
- [ ] Convert `eye-dilating.gif` → WebM/MP4 for better performance
- [ ] Add `<link rel="preconnect" href="https://www.googletagmanager.com">` in layout
- [ ] Change `og:locale` from `zh_CN` to `zh_Hans_MY` on root page

## LOW (Month 2+)

- [ ] Start a blog: "myopia control Malaysia", "IZON vs atropine", "視力訓練兒童效果"
- [ ] Create standalone `/faq` page
- [ ] Add `speakable` schema to FAQ answers
- [ ] Submit to local health directories
- [ ] Connect Google Search Console, submit sitemap
