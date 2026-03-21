This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Traffic Tracking Setup (Google + Facebook)

This project now includes:

- `GA4` page-view tracking
- `Meta Pixel` page-view tracking
- `POST /api/visit` endpoint to classify visits into `facebook`, `google`, or `other`

### 1. Configure env vars

Copy `tracking.env.example` to `.env.local` and set:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-18031279990
NEXT_PUBLIC_META_PIXEL_ID=123456789012345
NEXT_PUBLIC_META_PIXEL_ID_ALBERT=1179069353627076
NEXT_PUBLIC_META_PIXEL_ID_MICHELLE=
VISIT_WEBHOOK_URL=
```

`VISIT_WEBHOOK_URL` is optional. If set, every visit payload from `/api/visit` is forwarded to your own backend/webhook for persistent storage.

For consultant-specific pixels:

- `/albert` uses `NEXT_PUBLIC_META_PIXEL_ID_ALBERT` first
- `/michelle` uses `NEXT_PUBLIC_META_PIXEL_ID_MICHELLE` first
- fallback uses `NEXT_PUBLIC_META_PIXEL_ID`

### 2. Add UTM tags in ad links

For Facebook:

```text
https://your-domain.com/michelle?utm_source=facebook&utm_medium=paid&utm_campaign=michelle_main
https://your-domain.com/albert?utm_source=facebook&utm_medium=paid&utm_campaign=albert_main
```

For Google:

```text
https://your-domain.com/michelle?utm_source=google&utm_medium=cpc&utm_campaign=michelle_search
https://your-domain.com/albert?utm_source=google&utm_medium=cpc&utm_campaign=albert_search
```

Also keep Google Ads auto-tagging enabled (`gclid`) and Meta click ID enabled (`fbclid`).

### 3. Check implementation quickly

Run:

```bash
npm run dev
```

Then open:

- `/michelle`
- `/albert`

You should see:

- GA4 real-time page views
- Meta Pixel helper events
- `/api/visit` logs in server output

### 4. CTA conversion events (Meta)

WhatsApp CTA buttons now fire these Meta events on click (external links only):

- `WhatsAppClick` (custom)
- `Contact` (standard)
- `Lead` (standard)

Tracked buttons:

- Navbar CTA
- Financial comparison CTA
- Enrollment CTA
- Floating WhatsApp button

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
