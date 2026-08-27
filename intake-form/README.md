# Storytelling Intake Form

A self-contained intake form for collecting storytelling content from a
client (currently Ali) to use as raw material for website, Instagram, and
blog copywriting. No custom backend — it deploys as a static site, but uses
Netlify's built-in Forms feature to land submissions somewhere you'll
actually see them.

## How it works

- Open `index.html` (locally, or hosted anywhere).
- The form walks through short sections, one at a time, with a progress bar.
- Every answer autosaves to the browser's `localStorage` as it's typed.
  Closing the tab and coming back later resumes exactly where it left off —
  **but only on the same browser and device.** It does not survive an
  incognito/private window, a different browser, a different device, or
  clearing browser data. Nothing to fix here, just don't oversell it as
  bulletproof when telling Ali how it works.
- At the end, there's a review screen where every answer can be edited
  inline. Hitting **Send my answers** submits everything straight to your
  Netlify Forms dashboard — no action needed from Ali beyond that click, and
  no possibility of her forgetting to send you the file. **Download** and
  **Copy everything** stay available as a backup in case the automatic send
  ever fails (bad wifi, etc) — the button gracefully falls back to those
  with a message telling her what happened, rather than pretending it worked.

## Hosting it — Netlify only (for the automatic-submission part to work)

This must be deployed on **Netlify** specifically — the "Send my answers"
button depends on Netlify Forms, which other static hosts (GitHub Pages,
Vercel) don't have. Deploying elsewhere still works for the form itself,
you'd just lose the automatic-send feature and have to rely on the
Download/Copy buttons.

1. Deploy the `intake-form/` folder to Netlify as usual (drag-and-drop, or
   connected via GitHub — **Publish directory must be set to `intake-form`**
   if it's nested inside a repo, or root if you're only deploying this
   folder on its own).
2. Netlify detects the hidden form in `index.html` automatically on deploy
   — nothing to configure.
3. **Turn on notifications** so you actually know when someone submits: in
   the Netlify dashboard, go to your site → **Forms** → **Settings and
   usage** → **Form notifications** → **Add notification** → email
   notification, pointed at your inbox. Do this once per site.
4. Submissions land under your site's **Forms** tab in Netlify — each one
   shows the respondent's name, business name, timestamp, and the full
   question-by-question transcript in one field, so it's always clear which
   answer belongs to which question.

No environment variables, no server code, nothing else to configure.

## Editing the content

All questions live in `questions.js` as plain data — nothing else needs to
change to update the form's content:

```js
{
  id: 'core_story',
  title: 'Your Core Story',
  subtitle: '...',
  questions: [
    { id: 'tipping_point', label: '...', helper: '...', type: 'textarea' },
    ...
  ],
}
```

**Current status of the sections:**

- `core_story` — built directly from Storytale's Chapter 1 material
  (Tipping Point → Journey → Purpose).
- `core_people` — built directly from Storytale's Chapter 2 material
  (Knowing → Understanding [Point A / Point B] → Collecting).
- `connect` — built directly from Storytale's Chapter 3 material (Pathway →
  Presence [One-Liner, Hook, Invitation, Offer Visibility] → Process
  [Content topics/rhythm, Conversation]).
- `basics`, `voice`, `proof`, `offers`, `freewrite` — general copywriting
  intake questions that aren't part of the Storytale course but are useful
  for writing actual copy regardless of framework.

All three Storytale chapters are now represented in the form.

## Branding

Colors and fonts are CSS custom properties at the top of `style.css`
(`:root { --color-primary: ...; --font-heading: ...; }`) — change those and
nothing else in the file needs to change.

Currently set to the real brand: Dark Slate Gray, Rosy Brown, Dark Khaki,
and White Smoke, with **Awesome Serif Italic** for headings and **Familjen
Grotesk** for body text. Both fonts are self-hosted from `fonts/` (no
external font requests) — declared via `@font-face` at the top of
`style.css`. Awesome Serif's italic cut is the only style provided, so it's
registered under its own font-family name rather than as `font-style:
italic`, which keeps browsers from ever swapping in a synthesized (fake)
italic or bold in its place.

The page background is `images/background.jpg` (Obsidian & Gold's own
texture), covering the full page behind the card with a light dark
overlay for depth. Swap that file for a different image and nothing else
needs to change — it's referenced by filename in `style.css`'s `body`
rule.

## Turning answers into copy

See `copywriting-brief-prompt.md` for a ready-to-use Claude prompt that
takes Ali's exported answers and produces About-page copy, homepage hero
copy, Instagram caption starters, and blog post outlines — while flagging
anywhere her answers were too thin to write from confidently.

`resources/storytelling-content-templates.csv` is Storytale's bonus pack of
100+ fill-in-the-blank content hooks (tagged Educational / Inspirational /
Entertaining), pulled straight from the course's own resource module. The
copywriting prompt uses it as a starting point for Instagram captions —
the blanks still get filled with Ali's real details, not generic filler.

## Reusing this for future clients

This is meant to be a repeatable template, not a one-off for Ali:

1. Duplicate the `intake-form/` folder.
2. Swap the content of `questions.js` for whatever framework applies.
3. Swap the theme variables in `style.css`.
4. Reuse `copywriting-brief-prompt.md` as the starting point for turning
   their answers into copy.
