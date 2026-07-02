# Oxylife Selangor — Full SEO Audit Report
**Date:** 2026-06-30  
**Site:** oxylife.my (dev: http://localhost:3000)  
**Audited Pages:** `/` (ZH) · `/en` · `/michelle` · `/albert`  
**Business Type:** Local Health Service — Children's Vision Therapy (Petaling Jaya, MY)

---

## Overall SEO Health Score: **58 / 100**

| Category | Score | Weight | Weighted |
|---|---|---|---|
| Technical SEO | 70/100 | 22% | 15.4 |
| Content Quality | 65/100 | 23% | 14.9 |
| On-Page SEO | 60/100 | 20% | 12.0 |
| Schema / Structured Data | 55/100 | 10% | 5.5 |
| Performance (CWV) | 50/100 | 10% | 5.0 |
| AI Search Readiness | 30/100 | 10% | 3.0 |
| Images | 75/100 | 5% | 3.8 |
| **TOTAL** | | | **59.6 → 58** |

---

## Executive Summary

Oxylife Selangor's site is a well-structured Next.js 15 app with solid fundamentals: clean robots.txt, a working sitemap, proper canonicals, correct `lang` attributes, and 8 schema blocks on the homepage. The core technical foundation is sound.

**Top 5 Critical Issues:**
1. No `og:image` / `twitter:image` — social shares show blank previews
2. No `hreflang` cross-linking between `/` (ZH) and `/en` — Google may not understand the language relationship
3. Canonical URL uses `localhost:3000` in sitemap — must use production domain before launch
4. No `llms.txt` — AI crawlers (ChatGPT, Perplexity, Claude) get no structured content index
5. Consultant pages (`/michelle`, `/albert`) are indexed but near-duplicate of root — no `noindex` or canonical disambiguation

**Top 5 Quick Wins:**
1. Add `og:image` (1 file + 2 lines of code)
2. Add hreflang tags to both `/` and `/en` (already partially coded in `/en` alternates)
3. Set `NEXT_PUBLIC_SITE_URL` in production env — fixes sitemap + canonical URLs in one shot
4. Add `sameAs` array to Organization schema (Facebook, Google Maps link)
5. Add `aggregateRating` to Product schema using real client testimonials

---

## Technical SEO — Score: 70/100

### ✅ What Works
- robots.txt correctly allows all pages, blocks `/consultant`
- All major AI bots explicitly allowed (GPTBot, ClaudeBot, OAI-SearchBot, Google-Extended)
- Sitemap at `/sitemap.xml` with 4 URLs, correct `priority` and `changefreq`
- All 4 pages return HTTP 200
- Canonical tags present on all pages
- Viewport meta present
- GTM + GA4 + Google Ads properly loaded via Next.js `Script` with `afterInteractive`
- `<html lang="zh-Hans">` correctly set for ZH pages

### ⚠️ Findings

| Severity | Issue | Detail |
|---|---|---|
| **Critical** | Sitemap uses `localhost:3000` | `NEXT_PUBLIC_SITE_URL` env var not set — in production this will show `localhost` in the sitemap submitted to GSC |
| **Critical** | Canonical uses `localhost:3000` | Same root cause — `metadataBase` resolves to localhost fallback |
| **High** | No hreflang between ZH and EN | `/en` has `alternates.languages` defined in code but the HTML only outputs it on `/en`, not on `/` (root). Google needs the cross-reference on BOTH pages. |
| **High** | No security headers | Missing `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`. Next.js headers config not set. |
| **Medium** | `host:` in robots.txt | `Host: http://localhost:3000` is a localhost artefact — in production this should be the real domain |
| **Medium** | HTML payload is 566 KB | Large initial HTML. Next.js SSR means Google can still index it, but affects TTFB. |
| **Low** | No `<link rel="preconnect">` for GTM | GTM and gtag load from `googletagmanager.com` — preconnect hints would improve LCP slightly |

---

## Content Quality — Score: 65/100

### ✅ What Works
- Clear value proposition: "让视力真正U-Turn" is specific and differentiated
- FAQPage schema with 6 Q&As supports featured snippet eligibility
- Dual-language strategy (ZH homepage + `/en`) is smart for the Selangor market
- Doctor endorsement section exists (E-E-A-T signal)
- MDA license number cited (`GA1448221-77276`)

### ⚠️ Findings

| Severity | Issue | Detail |
|---|---|---|
| **High** | Thin content on `/michelle` and `/albert` | Both pages share near-identical copy with only consultant name/photo swapped. No unique content — Google may treat these as duplicates. |
| **High** | No blog / resource content | Site is a single long-scroll landing page. No topical authority content targeting informational queries like "myopia control Malaysia", "atropine vs vision therapy" |
| **Medium** | EN page H1 rendering bug | H1 renders as "Worried About YourChild&#x27;s Eye PowerIncreasing EveryYear?Worried About Your Child's Eye Power Increasing Every Year?" — text is duplicated in the DOM, likely a responsive visibility issue (two copies shown, one per breakpoint) |
| **Medium** | No author attribution | Doctor endorsements mention names but there's no structured author/expert page for E-E-A-T |
| **Low** | Meta description identical on `/` and `/michelle`, `/albert` nearly duplicate | Slight title variation but descriptions overlap significantly |

---

## On-Page SEO — Score: 60/100

### ✅ What Works
- Unique title tags on all 4 pages
- Single H1 on homepage (correct)
- Meta description present on all pages and within recommended length

### ⚠️ Findings

| Severity | Issue | Detail |
|---|---|---|
| **High** | Heading hierarchy broken | Jumps H1 → H3 → H4 → H2 → H4. Missing H2 after H1, and H3 precedes first H2 — confuses both crawlers and screen readers |
| **High** | No `og:image` / `twitter:image` | Social shares will show a blank card on WhatsApp, Facebook, LINE — critical for this market where WhatsApp sharing is the primary referral channel |
| **Medium** | OG locale mismatch | Root page sets `og:locale: "zh_CN"` but the audience is Malaysian Chinese (consider `zh_MY` or `zh_Hans_MY`) |
| **Medium** | No `og:image` on any page | All 4 pages missing OG image |
| **Medium** | Internal linking is minimal | Only 4 internal links total. No cross-links between ZH and EN versions; no breadcrumbs |
| **Low** | 1 image with empty `alt=""` | Decorative images should have `alt=""` intentionally, but verify this is correct for the image in question |

---

## Schema / Structured Data — Score: 55/100

### ✅ What Works
- Organization schema present with name, phone, address
- WebSite schema present
- Product schema present
- FAQPage with 6 questions

### ⚠️ Findings

| Severity | Issue | Detail |
|---|---|---|
| **High** | Organization missing `sameAs` | No links to Google Maps, Facebook, or other authority profiles — weakens knowledge panel eligibility |
| **High** | Product schema missing `aggregateRating` | Cannot earn star ratings in SERPs without reviews. Real testimonials exist on the page — these should be structured |
| **High** | Product schema missing `offers` | No price or pricing range structured — limits rich result eligibility |
| **Medium** | No `LocalBusiness` schema | Organization covers the basics but `LocalBusiness` (or `MedicalBusiness`) with `openingHours`, `geo` coordinates, and `priceRange` would strengthen local pack eligibility |
| **Medium** | No `BreadcrumbList` | Helpful for sub-pages like `/en`, `/michelle`, `/albert` |
| **Medium** | WebSite schema has no `SearchAction` | Sitelinks search box won't appear in Google SERP even if brand searches occur |
| **Low** | Schema URLs use `localhost` | Same root cause as canonical — will self-resolve once `NEXT_PUBLIC_SITE_URL` is set |

---

## Performance (CWV) — Score: 50/100

*Note: Lab estimates only — no CrUX field data available without Google API credentials.*

### ✅ What Works
- All images use `loading="lazy"` (Next.js Image defaults)
- No render-blocking external scripts (GTM loaded async)
- No external CSS files

### ⚠️ Findings

| Severity | Issue | Detail |
|---|---|---|
| **High** | Hero image is 428 KB PNG | `device-render.png` at 428 KB — should be converted to WebP and served via Next.js `<Image>` with `priority` for LCP |
| **High** | 566 KB HTML payload | Very large initial HTML for a single-page landing — likely due to inlined font CSS and large component trees |
| **Medium** | GIF in public assets | `eye-dilating.gif` — GIFs are unoptimized; convert to WebM/MP4 for video-like loops |
| **Medium** | Two web font families on EN page | Inter + Sora loaded for `/en` on top of Plus Jakarta Sans for root — adds font load weight |
| **Low** | No `<link rel="preload">` on hero image | LCP image should be preloaded with `fetchpriority="high"` |

---

## AI Search Readiness (GEO) — Score: 30/100

### ✅ What Works
- GPTBot, ClaudeBot, OAI-SearchBot explicitly allowed in robots.txt
- FAQPage schema is citable content for AI answers
- MDA license cited (verifiable authority signal)

### ⚠️ Findings

| Severity | Issue | Detail |
|---|---|---|
| **Critical** | No `llms.txt` | AI crawlers have no structured content index to reference. ChatGPT, Perplexity, and Claude cannot discover what this site covers or cite it efficiently |
| **High** | No passage-level citable content | All content is in a single long-scroll layout without anchored sections or standalone FAQ pages — AI systems can't extract clean passages |
| **High** | No brand mentions on authoritative external sites | No citations on local news, health directories, or review platforms detected |
| **Medium** | `speakable` schema missing | Not implemented — reduces voice assistant and AI assistant citability |
| **Medium** | No structured FAQ standalone page | FAQ exists as schema but not as a crawlable `/faq` URL with unique title/description |
| **Low** | `sameAs` missing from Organization | AI systems use `sameAs` to cross-reference and validate brand identity |

---

## Images — Score: 75/100

### ✅ What Works
- 23 images, 0 missing alt text (good)
- All standard images use lazy loading
- Logo uses proper `oxylife-logo-new.png`

### ⚠️ Findings

| Severity | Issue | Detail |
|---|---|---|
| **High** | No OG image | No social share preview image for any page |
| **Medium** | Hero PNG is 428 KB | Needs WebP conversion |
| **Medium** | GIF not converted to video format | `eye-dilating.gif` |
| **Low** | 1 empty alt attribute | Confirm it's intentionally decorative |

---

## Action Plan

### Phase 1: Critical Fixes (Week 1)

| # | Task | File | Impact |
|---|---|---|---|
| 1 | Set `NEXT_PUBLIC_SITE_URL=https://oxylife.my` in production env | `.env.production` | Fixes sitemap, canonical, schema URLs |
| 2 | Add `og:image` (1200×630px) to root layout metadata | `src/app/layout.tsx` | Social shares on WhatsApp/FB |
| 3 | Add hreflang `<link>` tags to root `/` page | `src/app/page.tsx` | Bilingual SEO |
| 4 | Add `LocalBusiness` schema to replace / extend Organization | `src/app/layout.tsx` | Local pack eligibility |
| 5 | Add `aggregateRating` to Product schema | Landing page component | Star ratings in SERPs |

### Phase 2: High-Impact Improvements (Weeks 2–3)

| # | Task | File | Impact |
|---|---|---|---|
| 6 | Create `/llms.txt` with site summary, key topics, key pages | `public/llms.txt` | AI search citability |
| 7 | Fix heading hierarchy (H1 → H2 → H3) | LandingPage components | Crawl + accessibility |
| 8 | Add security headers in `next.config.ts` | `next.config.ts` | Security score |
| 9 | Optimize hero image to WebP + add `priority` prop | `public/` + Hero component | LCP improvement |
| 10 | Add `noindex` or unique content to `/michelle` and `/albert` | Consultant pages | Duplicate content |
| 11 | Fix EN H1 duplicate text (responsive visibility bug) | `src/components/en/EnHero.tsx` | Content quality |

### Phase 3: Content & Authority (Month 2)

| # | Task | Impact |
|---|---|---|
| 12 | Create 3–5 blog posts targeting "myopia control Malaysia", "atropine side effects", "視力訓練兒童" | Topical authority |
| 13 | Add `sameAs` links (Google Maps, Facebook, Carousell) to Organization schema | Knowledge panel |
| 14 | Create standalone `/faq` page with structured markup | Featured snippets |
| 15 | Add `speakable` schema to key FAQ answers | Voice + AI citability |
| 16 | Submit to local health directories (KKM, health.gov.my) | E-E-A-T + backlinks |

### Phase 4: Monitoring & Iteration (Ongoing)

- Connect Google Search Console and submit sitemap
- Set up CrUX monitoring for Core Web Vitals field data
- Monitor `/consultant` disallow in robots.txt — confirm it's intentional (WhatsApp redirect route)
- Review AI brand mentions monthly via Perplexity / ChatGPT queries for "vision therapy Petaling Jaya"
