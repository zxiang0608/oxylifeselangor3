# SEO / GEO / AEO Rules

This project must be optimized for:
- Google Search
- Google AI Overviews / answer surfaces
- ChatGPT search
- SEO
- GEO
- AEO

The goal is not just ranking.
The goal is to make pages easy to crawl, understand, quote, and cite.

---

## Core principle

Every important page must be:

1. Crawlable
2. Indexable
3. Readable in clean HTML
4. Structured clearly
5. Written to answer real user questions
6. Easy for search engines and AI systems to extract useful answers from

Do not make pages that are only visually impressive.
Make them understandable to both humans and machines.

---

## Priority order

Always work in this order:

### Step 1 — Crawlability
Check first:
- important pages are not blocked in `robots.txt`
- important pages are not accidentally set to `noindex`
- canonical tags are correct
- sitemap exists
- important pages are publicly accessible

If crawlability is broken, do not move on.

### Step 2 — Content visibility
Check whether the important content is actually visible in HTML.

Important content must not only exist inside:
- carousels
- tabs
- accordions
- sliders
- popups
- client-side interactions

Key answers must exist directly in the page content.

If the main answer is hidden behind interaction, do not move on.

### Step 3 — Answer structure
Every important page must answer one clear user question.

Page structure should follow this pattern:
- H1 = clear main question or outcome
- first paragraph = direct answer in plain language
- supporting explanation below
- comparison section if relevant
- FAQ section if relevant
- CTA after the answer is clear

Do not write pages that only sound promotional.
Write pages that can answer a question fast.

### Step 4 — Semantic structure
Use proper:
- title tag
- meta description
- H1 / H2 / H3 structure
- internal links
- descriptive anchor text
- semantic HTML

Avoid vague or decorative-only section titles if they hide the real meaning.

### Step 5 — Structured data
Add relevant structured data where appropriate:
- Organization
- WebSite
- BreadcrumbList
- Article
- FAQPage
- Product

Structured data must match the visible content.
Do not add markup for content that is not actually on the page.

### Step 6 — Snippet friendliness
Do not block important content from being quoted or summarized.

Check for:
- `nosnippet`
- `data-nosnippet`
- restrictive robot rules
- hidden key content

Do not accidentally prevent the best answer blocks from being surfaced.

### Step 7 — Accessibility / machine readability
Use:
- proper heading order
- labeled buttons
- labeled forms
- meaningful link text
- accessible structure
- clear section labels

The site should be easy for both users and machine agents to interpret.

### Step 8 — Final review
Check whether the page can be understood quickly by:
- a search engine
- an AI answer engine
- a tired mobile user

If the page is only attractive but not answerable, it is not complete.

---

## Content rules

### Every key page should include:
- one clear main question
- one direct answer near the top
- one short explanation of how it works
- one comparison block if relevant
- one FAQ block if relevant
- one CTA that comes after understanding

### Prefer:
- plain language
- short paragraphs
- scannable sections
- comparison-friendly structure
- concrete wording

### Avoid:
- overly vague hero copy with no answer
- key facts hidden in images
- key facts hidden in sliders or tabs
- long decorative intros before answering the question
- pages that depend only on design to communicate meaning

---

## GEO / AEO rules

Pages should be written so they can be cited or summarized by AI systems.

That means:
- put the answer near the top
- make comparison points explicit
- define who the solution is for
- define who it is not for
- answer real user phrasing
- make the important statements visible in HTML
- support claims with clear explanation where possible

Do not rely on clever layout alone.
The information must be easy to extract.

---

## ChatGPT search / AI crawler rules

If the site allows AI search discovery:
- important pages should be accessible to relevant search crawlers
- do not block the important educational and comparison pages
- keep the useful answer content easy to fetch and interpret

If training crawl should be blocked separately, handle that at the crawler rule level.
Do not accidentally block search discovery when the goal is visibility.

---

## Page types to prioritize

Prioritize these pages first:
1. Homepage
2. Main offer page
3. Comparison page
4. FAQ page
5. Educational pages targeting real search questions
6. Pricing / trial page
7. “Who is this for” page
8. “How it compares” page

---

## Definition of done

A page is not complete unless:

- it is crawlable
- it is indexable
- the main answer is visible in HTML
- the H1 and first paragraph clearly answer the page topic
- the page is structured for search and AI extraction
- structured data is added where relevant
- internal links support discovery
- the page is understandable without relying on design effects

---

## Failure conditions

The work is not complete if:
- the page is blocked from crawling
- key content is hidden inside interactions
- headings are vague and not question-based
- the page reads like a design showcase but not an answer source
- structured data is missing or inconsistent
- important content cannot be easily quoted or summarized
- the page is too visually clever but too semantically weak

---

## Working style

When applying these rules:
- fix crawlability first
- then content visibility
- then answer structure
- then metadata / schema
- then polish

Do not start with decorative polish.
Do not treat this as just a copywriting task.
Do not treat this as just a technical metadata task.

This is a crawlability + answerability + structure task.
