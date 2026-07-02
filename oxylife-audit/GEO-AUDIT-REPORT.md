# GEO Audit Report: Oxylife Selangor

**Audit Date:** 2026-06-30
**URL:** https://www.oxylifeselangor.com
**Business Type:** Local Health Services — IZON Eye Physiotherapy Device Distributor & Vision Therapy Consultant
**Pages Analyzed:** 4 (/, /en, /michelle, /albert)
**Primary Market:** Malaysia (Petaling Jaya, Selangor)
**Languages:** Chinese (primary), English (/en)

---

## Executive Summary

**Overall GEO Score: 31/100 (Critical)**

Oxylife Selangor has a strong product story and genuine authority signals (MDA license, three credentialed doctors, measurable testimonials), but these assets are almost entirely invisible to AI systems. Zero structured data across all four pages, a missing llms.txt, no meta descriptions, and the absence of any third-party brand mentions on Wikipedia or Reddit mean AI engines like ChatGPT, Perplexity, and Google AI Overviews cannot discover, cite, or recommend the site. The bilingual content is a major untapped asset — the English page alone could drive significant AI citability with schema and E-E-A-T fixes. Without action, competitors with better GEO signals will fill the AI-generated answers about myopia treatment in Malaysia.

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 35/100 | 25% | 8.75 |
| Brand Authority | 25/100 | 20% | 5.00 |
| Content E-E-A-T | 45/100 | 20% | 9.00 |
| Technical GEO | 40/100 | 15% | 6.00 |
| Schema & Structured Data | 5/100 | 10% | 0.50 |
| Platform Optimization | 20/100 | 10% | 2.00 |
| **Overall GEO Score** | | | **31/100** |

---

## Critical Issues (Fix Immediately)

### 1. Zero Schema.org Structured Data Across All Pages
- **Affected pages:** /, /en, /michelle, /albert
- **Impact:** AI systems cannot extract structured entity data — the business is invisible as an entity to Google, ChatGPT, and Perplexity knowledge graphs.
- **Fix:** Add JSON-LD for `MedicalBusiness` + `FAQPage` + `Person` (for doctors) to all pages. See schema templates in the Schema section below.

### 2. No Meta Descriptions on Any Page
- **Affected pages:** /, /en, /michelle, /albert
- **Impact:** Google AI Overviews and Bing Copilot use meta descriptions as citation snippets. Without them, the site is deprioritized in AI-generated summaries.
- **Fix:** Write keyword-rich, 150–160 character meta descriptions per page. See recommendations below.

### 3. No llms.txt File
- **URL:** https://oxylifeselangor.com/llms.txt (404)
- **Impact:** AI crawlers (especially Claude, ChatGPT) use llms.txt to understand site scope and prioritize content. Its absence means AI training and RAG pipelines skip this site's contextual signal.
- **Fix:** Create `/public/llms.txt` in the Next.js project. Template provided below.

### 4. Missing hreflang Tags (Bilingual Site with No Language Signals)
- **Affected pages:** /, /en
- **Impact:** Google cannot correctly route Chinese vs. English AI queries to the appropriate page. The English page gets no organic AI traffic despite being fully optimized for English audiences.
- **Fix:** Add `<link rel="alternate" hreflang="zh" href="https://www.oxylifeselangor.com/" />` and `<link rel="alternate" hreflang="en" href="https://www.oxylifeselangor.com/en" />` to `layout.tsx`.

---

## High Priority Issues (Fix Within 1 Week)

### 5. No Open Graph or Twitter Card Meta Tags
- **Impact:** When the site is shared on social platforms or cited by AI tools that preview URLs, no image or description appears. Brand perception and click-through suffer.
- **Fix:** Add OG tags to each page's metadata in Next.js using the `opengraph-image.tsx` files already present in the project.

### 6. Images Missing Alt Text on /en Page
- **Affected page:** /en
- **Impact:** All images (doctors, device, testimonials, MDA logo) have no alt text — invisible to AI vision models and screen readers. Misses entity-recognition signals for the three doctors.
- **Fix:** Add descriptive alt text: `"Dr Tai Weng Yew, MD — IZON Eye Therapy Advisor"`, `"IZON Personal Scope-EX eye physiotherapy device"`, etc.

### 7. No Google Business Profile Found in Search
- **Impact:** GBP is a primary signal for local business entity recognition by Google AI Overviews. Without a verified GBP, "myopia therapy Petaling Jaya" queries will not surface Oxylife.
- **Fix:** Claim and fully complete Google Business Profile for the Pinnacle PJ address with category "Medical Equipment Supplier" + "Vision Care Center".

### 8. No External Brand Mentions on High-DA Platforms
- **Impact:** AI systems weight citations from Wikipedia, Reddit, trusted directories, and news sites heavily. Oxylife has no presence on any of these — making it unknown to AI entity graphs.
- **Fix:** Priority platforms: (1) Health directory listings on Malaysian health portals, (2) Reddit r/malaysia + r/optometry threads answering myopia questions, (3) Attempt a Wikipedia stub for IZON device.

### 9. FAQ Content Not Wrapped in FAQPage Schema
- **Impact:** All four pages have excellent FAQ sections (6 Q&As each) that AI systems could pull as direct answers. Without `FAQPage` JSON-LD, this content is invisible as structured knowledge.
- **Fix:** See FAQPage schema template in the Schema section below.

---

## Medium Priority Issues (Fix Within 1 Month)

### 10. No Standalone About / Credentials Page
- **Impact:** E-E-A-T requires a dedicated page establishing organizational trust. AI models weight "About" pages for entity authority scoring.
- **Fix:** Create `/about` page covering: company history, MDA license, distributor authorization from Korea IZON, doctor credentials with links to verifiable profiles.

### 11. No External Research Citations in Content
- **Impact:** AI citation models weight content that references peer-reviewed studies. Claiming "-125 degrees improvement" without citing a study triggers AI scepticism filters.
- **Fix:** Add citations to myopia research from sources like The Lancet, ARVO, or Malaysian Journal of Ophthalmology to strengthen E-E-A-T.

### 12. /michelle and /albert Pages Are Duplicate Content
- **Impact:** Both pages have nearly identical content to the homepage. This dilutes page authority and confuses AI crawlers about which page is canonical for core queries.
- **Fix:** Either add `canonical` tags pointing to `/` from both, or differentiate each page with consultant-specific content (bio, specialization, booking calendar).

### 13. PerplexityBot Not Explicitly Allowed in robots.txt
- **Impact:** robots.txt only mentions OAI-SearchBot, GPTBot, ClaudeBot, Google-Extended. PerplexityBot, CCBot, Applebot-Extended, Amazonbot, and cohere-ai are not listed — ambiguous permission.
- **Fix:** Add explicit `Allow: /` for PerplexityBot, CCBot, and other AI crawlers to ensure full permission clarity.

### 14. No YouTube Content Linked or Embedded
- **Impact:** YouTube videos about IZON exist (2018, 2023) but are not embedded or linked on the site. YouTube is a top AI-cited platform — this content is disconnected from the site's entity graph.
- **Fix:** Embed relevant IZON how-to and testimonial YouTube videos on the site. Add VideoObject schema.

---

## Low Priority Issues (Optimize When Possible)

### 15. Page Titles Inconsistent Across Chinese/English Pages
- `/` title: "儿童视力咨询与体验评估 | Oxylife" — correct
- `/en` title: Not confirmed — likely missing or generic
- **Fix:** Ensure each page has a unique, keyword-rich title under 60 characters.

### 16. No BreadcrumbList Schema
- **Impact:** Perplexity and Google use breadcrumbs to understand site hierarchy for AI summaries.
- **Fix:** Add `BreadcrumbList` JSON-LD to /michelle and /albert pages.

### 17. Sitemap Only Has 4 URLs
- **Impact:** As new pages are added (About, FAQ, Blog), they need to be in the sitemap immediately for AI crawler discovery.
- **Fix:** Ensure sitemap auto-generates via Next.js `sitemap.ts` as the site grows.

---

## Category Deep Dives

### AI Citability (35/100)

**What's working:**
- FAQ sections on all pages are well-structured with clear Q→A format — exactly the pattern AI systems extract for featured snippets
- Specific measurable claims ("-125 degrees myopia improvement in 3 months") are quotable
- Price transparency (RM49 experience session) is a high-citability signal for commercial queries
- The "Passive Path vs IZON Active Path" comparison table is citable for "myopia treatment comparison Malaysia" queries

**What's failing:**
- No FAQPage JSON-LD — AI systems cannot reliably extract these as structured answers
- Primary language is Chinese — reduces citability for English-language AI queries (ChatGPT, Perplexity serve predominantly English answers globally)
- No statistics from third-party sources (e.g., "Malaysia has 65% myopia rate in school children" from HOYA Malaysia study)
- Zero answer-format content for "what is IZON" or "how does eye physiotherapy work" — AI cannot cite an authoritative definition

**Quick citability rewrite example:**

Current FAQ answer: *"一次付费，不需要每个人重复购买"*

AI-optimized version (add to /en FAQ): *"One IZON device can be shared across all household members. There is no per-user fee — a single purchase covers unlimited users within the same household, making it significantly more cost-effective than individual treatments like OK lenses or atropine drops that require separate prescriptions per child."*

---

### Brand Authority (25/100)

**Platform presence map:**

| Platform | Status | Priority |
|---|---|---|
| Facebook | Active (3 pages: oxylifeselangor, OxylifeMY, oxylifemagicaltelescope) | Consolidate to 1 |
| YouTube | Exists (2 videos, 2018–2023) | Needs fresh content |
| Google Business Profile | Not verified/found | Critical — create now |
| Wikipedia | No mention | Long-term target |
| Reddit r/malaysia | No mention | Medium priority |
| Reddit r/optometry | No mention | Medium priority |
| Health directories (findhealthclinics.com, klinik.my) | Partial (Klang listing) | Update to PJ address |
| Trustpilot / Google Reviews | No data found | Create/claim |
| News mentions (The Star, NST, Malay Mail) | None found | Long-term PR target |

**Key issue:** Three Facebook pages dilutes brand authority. AI entity graphs struggle to reconcile multiple brand entities. Consolidate to one primary page: `@oxylifeselangor`.

---

### Content E-E-A-T (45/100)

**Strengths:**
- Three credentialed experts cited: Dr Tai Weng Yew (MD), Dr Kelvin Lew (PhD Molecular Medicine), Dr Kavitha Nowroji (PhD Molecular Medicine)
- MDA license number GA1448221-77276 is verifiable and displayed
- US FDA, Korean KFDA, ISO 13485 certifications cited
- Specific patient outcomes with time frames (2–3 months) and measurements

**Weaknesses:**
- No author attribution page for the three doctors — AI cannot verify their credentials against external sources
- No "About" page establishing company history, founding date, or distributor authorization
- No peer-reviewed studies cited for the core mechanism claims (Balloon Effect, Active Template)
- Testimonials lack dates — AI systems flag undated testimonials as potentially stale
- No "last updated" dates on any page content

**E-E-A-T improvements, ranked by impact:**
1. Create individual bio pages for each doctor with LinkedIn links and verifiable credential references
2. Add publication dates and "last updated" timestamps to all pages
3. Link MDA license number to the official MDA Malaysia verification portal
4. Cite at least 2–3 peer-reviewed myopia studies from PubMed or WHO as supporting evidence
5. Add a company "About" page with founding story, Korea IZON distributor authorization letter reference, and team photos

---

### Technical GEO (40/100)

**Strengths:**
- Next.js SSR: Content is fully server-rendered — AI crawlers can access all content without JavaScript execution
- robots.txt is present and structured correctly
- Sitemap.xml is present and valid
- Site loads fast (Next.js image optimization active)
- HTTPS enforced

**Weaknesses:**

| Issue | Severity | Fix |
|---|---|---|
| No llms.txt | High | Create /public/llms.txt |
| No meta descriptions | Critical | Add to all pages |
| No hreflang tags | High | Add to layout.tsx |
| No Open Graph tags | High | Add to each page's metadata |
| No canonical tags confirmed | Medium | Add to /michelle and /albert |
| PerplexityBot not in robots.txt | Medium | Add explicit Allow |

**Recommended robots.txt addition:**
```
User-agent: PerplexityBot
Disallow: /consultant

User-agent: CCBot
Disallow: /consultant

User-agent: cohere-ai
Disallow: /consultant

User-agent: Amazonbot
Disallow: /consultant

User-agent: Applebot-Extended
Disallow: /consultant
```

---

### Schema & Structured Data (5/100)

**Current state:** Zero JSON-LD on any page. This is the single highest-ROI fix in this entire audit.

**Schema implementation priority:**

#### 1. MedicalBusiness Schema (Add to all pages)
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Oxylife Selangor",
  "description": "IZON eye physiotherapy device distributor and vision therapy consultation for myopia and astigmatism in children. Serving Petaling Jaya, Selangor, Malaysia.",
  "url": "https://www.oxylifeselangor.com",
  "telephone": "+60115559 4933",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "A-13-10, Pinnacle Petaling Jaya, Lrg. Utara, Pjs 52",
    "addressLocality": "Petaling Jaya",
    "addressRegion": "Selangor",
    "postalCode": "46200",
    "addressCountry": "MY"
  },
  "medicalSpecialty": "Optometry",
  "openingHours": "Mo-Su 09:00-18:00",
  "priceRange": "RM49 - RM3000+",
  "image": "https://www.oxylifeselangor.com/images/oxylife-logo-new.png",
  "sameAs": [
    "https://www.facebook.com/oxylifeselangor/"
  ]
}
```

#### 2. FAQPage Schema (Add to all pages — English version for /en)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is the IZON device suitable for my child?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The IZON eye physiotherapy device is generally suitable for children aged 5 and above who can follow simple instructions such as tracking a light. It is non-invasive and drug-free. Children who have recently undergone eye procedures should consult a specialist first."
      }
    },
    {
      "@type": "Question",
      "name": "What is included in the RM49 vision experience session?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The RM49 experience session includes a baseline vision assessment, approximately 40 minutes of guided IZON device experience, and a Q&A session with a vision consultant. You will receive early observations on suitability before making any further decision."
      }
    },
    {
      "@type": "Question",
      "name": "How long is the daily IZON training routine?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "During the active training phase, sessions typically last 10–15 minutes, up to 3 times daily. During the maintenance phase, 5 minutes per day or every 2–3 days is sufficient. No strict time slot is required."
      }
    },
    {
      "@type": "Question",
      "name": "Is IZON eye therapy painful or safe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IZON therapy is non-invasive, does not touch the eyeball, and involves no medication. The device is registered with Malaysia's Medical Device Authority (MDA License GA1448221-77276) and holds US FDA and ISO 13485 certification. It is not recommended for users who have recently undergone eye surgery."
      }
    },
    {
      "@type": "Question",
      "name": "How is IZON different from OK lenses or atropine?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "OK lenses and atropine drops slow myopia progression passively. IZON uses active visual training — targeting extraocular muscle balance, near-far accommodation, retinal light stimulation, and pupil response training — to address underlying causes of myopia progression, not just symptoms."
      }
    },
    {
      "@type": "Question",
      "name": "Can one IZON device be used by the whole family?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. One IZON device can be shared across all household members with no per-user fee. A single one-time purchase covers unlimited users in the same household."
      }
    }
  ]
}
```

#### 3. Person Schema (Add for each doctor)
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dr Tai Weng Yew",
  "jobTitle": "Medical Doctor",
  "worksFor": {
    "@type": "MedicalBusiness",
    "name": "Oxylife Selangor"
  }
}
```

#### 4. Product Schema (For the IZON device)
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "IZON Personal Scope-EX Eye Physiotherapy Device",
  "description": "Korean-developed eye physiotherapy device for myopia, astigmatism, and presbyopia management. MDA-registered in Malaysia.",
  "brand": {
    "@type": "Brand",
    "name": "IZON"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "MYR",
    "price": "49",
    "description": "RM49 experience session",
    "availability": "https://schema.org/InStock"
  }
}
```

---

### Platform Optimization (20/100)

**Google AI Overviews:** Not appearing. Competitor sites (malayaoptical.com, optikaoptometrist.com.my, optimax2u.com) dominate AI-generated answers about myopia control in Malaysia. Oxylife is absent from these answers.

**ChatGPT / Perplexity:** No Wikipedia entry, no Reddit mentions, no health publication mentions — AI models trained on web data have no authoritative third-party signal to cite.

**YouTube:** Two IZON-related videos exist (2018, 2023) but are not from the oxylifeselangor.com channel specifically. These are attributed to the Oxylife brand generally. Fresh YouTube content from a dedicated oxylifeselangor channel would strengthen entity association.

**Facebook:** Three separate pages create entity confusion. Consolidate and make `@oxylifeselangor` the primary entity with complete profile (category: Medical Device Company, address, website, phone, opening hours).

---

## Quick Wins (Implement This Week)

1. **Add JSON-LD schema to all pages** — MedicalBusiness + FAQPage JSON-LD takes ~2 hours to implement in Next.js layout.tsx and will immediately improve AI citability and Google entity recognition. Highest ROI action in this audit.

2. **Write meta descriptions for all 4 pages** — 30-minute task, immediate impact on AI snippet extraction:
   - `/`: "IZON 视力训练仪官方咨询中心，位于白沙罗。针对儿童近视与散光提供主动调节训练，MDA认证，RM49 体验评估。"
   - `/en`: "IZON eye physiotherapy device consultation in Petaling Jaya, Selangor. Non-invasive myopia management for children. MDA-certified. Book a RM49 trial session."
   - `/michelle` & `/albert`: Consultant-specific descriptions.

3. **Create llms.txt** — 20-minute task. Place in `/public/llms.txt`. Template:
   ```
   # Oxylife Selangor - IZON Vision Therapy
   > Non-invasive eye physiotherapy for myopia and astigmatism in children. Serving Petaling Jaya, Selangor, Malaysia.

   ## Key Pages
   - Homepage (Chinese): https://www.oxylifeselangor.com/
   - Homepage (English): https://www.oxylifeselangor.com/en
   - Book RM49 Trial: https://www.oxylifeselangor.com/michelle
   - Expert Consultation: https://www.oxylifeselangor.com/albert

   ## About
   Oxylife Selangor is the authorized IZON distributor in Selangor, Malaysia. The IZON Personal Scope-EX is a Korean-developed eye physiotherapy device certified by Malaysia's Medical Device Authority (MDA License GA1448221-77276), US FDA, and ISO 13485.

   ## Services
   - Children myopia management (active visual training)
   - Astigmatism support
   - Presbyopia management
   - RM49 introductory experience session

   ## Contact
   Address: A-13-10, Pinnacle Petaling Jaya, 46200 Petaling Jaya, Selangor
   Phone: +60115559 4933
   WhatsApp: https://wa.link/khv3s5
   ```

4. **Add hreflang tags to layout.tsx** — 15-minute fix. Add `<link rel="alternate" hreflang="zh" href="https://www.oxylifeselangor.com/" />` and `<link rel="alternate" hreflang="en" href="https://www.oxylifeselangor.com/en" />` in the `<head>`.

5. **Fix alt text on /en page images** — All images on /en have no alt text. Add descriptive alt text for the three doctor images, IZON device, and MDA logo. 30-minute fix that directly improves entity recognition by AI vision models.

---

## 30-Day Action Plan

### Week 1: Technical GEO Foundation
- [ ] Add MedicalBusiness + FAQPage JSON-LD schema to all 4 pages
- [ ] Write and add meta descriptions to all 4 pages
- [ ] Create `/public/llms.txt`
- [ ] Add hreflang tags to layout.tsx
- [ ] Fix all missing alt text on /en page
- [ ] Add explicit PerplexityBot + CCBot Allow directives to robots.txt

### Week 2: Brand Authority & Entity Building
- [ ] Claim and complete Google Business Profile (Pinnacle PJ address)
- [ ] Consolidate 3 Facebook pages to 1 primary (@oxylifeselangor)
- [ ] Submit Oxylife Selangor to Malaysian health directories: klinik.my, findadoctor.my, Malaysia Healthcare Travel Council directory
- [ ] Update findhealthclinics.com listing to Pinnacle PJ address (currently shows Klang)
- [ ] Create Oxylife Selangor Google Maps listing with photos and Q&A

### Week 3: Content E-E-A-T Upgrade
- [ ] Create `/about` page with: company history, MDA license, Korea IZON distributor authorization, doctor bios with photo and credentials
- [ ] Add LinkedIn profiles for Dr Tai Weng Yew, Dr Kelvin Lew, Dr Kavitha Nowroji and link from site
- [ ] Add MDA license verification link on homepage and /en
- [ ] Add 2–3 citations to peer-reviewed myopia research (PubMed links)
- [ ] Add "last updated" date to FAQ sections

### Week 4: AI Citation Optimization
- [ ] Rewrite /en FAQ answers in AI-extractable long-form format (see citability example above)
- [ ] Add "What is IZON?" definitional content block to /en page optimized for AI featured snippets
- [ ] Create a 500-word "Myopia FAQ for Malaysian Parents" blog post with FAQPage schema
- [ ] Post Reddit answers on r/malaysia and r/optometry to myopia-related questions (with transparent disclosure)
- [ ] Embed IZON YouTube videos on relevant page sections + add VideoObject schema

---

## Appendix: Pages Analyzed

| URL | Title | Language | Schema | Meta Desc | GEO Issues |
|---|---|---|---|---|---|
| https://www.oxylifeselangor.com/ | 儿童视力咨询与体验评估 \| Oxylife | Chinese | None | Missing | 8 issues |
| https://www.oxylifeselangor.com/en | Vision Improvement Therapy Equipment | English | None | Missing | 9 issues |
| https://www.oxylifeselangor.com/michelle | 儿童视力咨询服务与体验评估 \| Oxylife | Chinese | None | Missing | 8 issues |
| https://www.oxylifeselangor.com/albert | 儿童视力评估与咨询服务 \| Oxylife | Chinese | None | Missing | 8 issues |

**Failed fetches:** llms.txt (404 — does not exist)

---

*GEO Audit generated by Claude Code on 2026-06-30. Methodology based on GEO scoring framework (Georgia Tech / Princeton / IIT Delhi 2024) with weighted category scoring across AI Citability, Brand Authority, Content E-E-A-T, Technical GEO, Schema & Structured Data, and Platform Optimization.*
