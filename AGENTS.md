# AGENTS.md

## Project Scope
- This file applies to the entire repository.
- Project path: `/Users/tayzixiang/Antigravity/Oxylife Selangor 3`
- Stack: Next.js App Router + React + Tailwind CSS.

## Product Context
- This is a premium landing page for a child vision / eye-care offering.
- The visual direction is dark, restrained, premium, and medical-tech.
- The page is persuasion-focused, but the tone must remain credible, calm, and fair.

## Design Rules
- Preserve the existing section order and page structure unless the user explicitly asks to change it.
- Default to editing the specific component that owns the section instead of making global styling changes.
- Prefer section-local structural fixes over token-only tweaks when layout or hierarchy is wrong.
- No orphan or widow text lines in headlines, subheadings, or key support copy.
- Adjust width, font size, line-height, or manual line breaks to create balanced wrapping.
- Text should look intentionally typeset, not automatically wrapped.
- Do not solve structural problems with tiny polish only.
- If a layout problem is reported, make a clearly visible change to composition, hierarchy, spacing, or structure.
- If the result still looks mostly the same, the task is not complete.
- Avoid unnecessary nested boxes or “card inside card inside card” layouts.
- Prefer one strong outer container and use spacing, typography, alignment, and subtle dividers for hierarchy.
- Avoid generic SaaS/dashboard card styling.
- Prefer editorial premium over dashboard UI.
- Avoid table-row feeling inside cards, app-style success badges, enterprise spec-sheet layouts, and overly mechanical content rows.
- Avoid over-decoration, over-glow, badge walls, fake “enterprise” UI, or loud visual gimmicks.
- Every icon, portrait, label, and decorative number must be clearly anchored to a layout block.
- If an element is moved, redesign the structure around it so it feels intentionally placed.
- Reduce floaty empty space between headings, cards, internal modules, and neighboring sections.
- Keep small text readable on dark backgrounds with enough size, contrast, and spacing to carry real visual weight.
- Optimize for scanability first: strong headline, one clear supporting line, obvious card titles, one strong takeaway per card.
- Keep supporting sections lighter, shorter, and faster to scan than core persuasion sections such as hero, comparison, authority/trust, and pricing/offer.
- Human proof must feel human: portraits, names, quotes, and results should form one coherent hierarchy.
- Avoid tiny footer avatars, overboxed quote modules, and SaaS-style verification badges.
- When in doubt, simplify first.
- Use hierarchy, spacing, typography, and restraint to guide attention.
- Keep premium depth subtle: inner glow, edge lighting, dark layering are acceptable when restrained.
- When a user asks for a stronger layout change, make a clearly visible structural adjustment rather than a micro-polish pass.

## Desired Feel
- Every section should aim to feel premium, calm, confident, human, credible, high-conversion, and easy to scan.
- Avoid clutter, over-decoration, badge-wall energy, aggressive app-like UI, and generic template layouts.

## Copy Rules
- Default language direction is Simplified Chinese for Malaysian Chinese parents.
- Tone must be professional, natural, balanced, and easy to understand.
- Do not sound aggressive, manipulative, or competitor-bashing.
- Avoid clever, overly idiomatic, or casual phrases.
- Prefer short, scannable lines with clear hierarchy.
- For comparison sections, keep alternatives fair and credible.
- For proof / testimonial sections, prioritize human trust over salesy language.

## Section Editing Rules
- Only change the section the user asks for.
- Do not redesign from scratch unless the user explicitly requests that.
- Keep existing layout patterns when asked to refine rather than redesign.
- If a user asks to “revert” recent changes, revert only the requested recent edits, not unrelated work.

## Component Ownership
- `src/components/Hero.tsx`: hero + major comparison section.
- `src/components/Mechanism.tsx`: “1个按钮，开启视力 U-Turn” training/mechanism section.
- `src/components/DoctorEndorsement.tsx`: professional endorsement section.
- `src/components/ExpectedResults.tsx`: short emotional payoff section.
- `src/components/Proof.tsx`: real-user testimonial / proof section.
- `src/components/HrdfCertification.tsx`: safety / compliance section.

## Image / Asset Rules
- Real testimonial portraits live in `public/images/`.
- When using local portrait files, prefer `next/image`.
- Keep portrait crops consistent across cards and adjust `objectPosition` when needed.
- Do not invent missing image files; verify they exist first.

## Implementation Rules
- Prefer `rg` for search.
- Prefer focused `apply_patch` edits for single-file changes.
- Keep code changes local and readable.
- Do not introduce unnecessary abstractions for one-off landing-page sections.
- Preserve responsive behavior on desktop and mobile.

## Verification Rules
- After editing a component, run eslint on that file when practical.
- Report whether verification passed or failed.
- If there are pre-existing issues in unrelated files, do not claim they were fixed.

## Communication Rules
- Be direct and concise.
- State what changed and where.
- If blocked by missing assets or unclear requirements, say exactly what is missing.
- If the user points out a repeated problem such as left-heavy layout, awkward icon placement, stray wrapping, too many boxes, or floaty spacing, do not respond with another tiny polish pass; make a visibly meaningful structural adjustment.
