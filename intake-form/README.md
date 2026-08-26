# Storytelling Intake Form

A self-contained, no-backend intake form for collecting storytelling content
from a client (currently Ali) to use as raw material for website, Instagram,
and blog copywriting.

Built as a standalone static site — three files, no build step, no server,
no account required.

## How it works

- Open `index.html` (locally, or hosted anywhere — GitHub Pages, Netlify,
  or just double-click it).
- The form walks through short sections, one at a time, with a progress bar.
- Every answer autosaves to the browser's `localStorage` as it's typed.
  Closing the tab and coming back later (on the **same browser, same
  device**) resumes exactly where it left off — that's what makes it
  "something to come back to." It does **not** sync across devices, since
  there's no backend.
- At the end, there's a review screen where every answer can be edited
  inline, followed by a **Download** button (saves a `.md` file) and a
  **Copy everything** button, so the client can send their answers back to
  you however's easiest (email, Slack, etc).

## Hosting it

Any static host works. Two easy options:

- **GitHub Pages**: enable Pages on this repo, pointed at this folder (or
  push this folder to its own repo).
- **Netlify/Vercel drag-and-drop**: drag the `intake-form/` folder onto
  their dashboard.

No environment variables, no backend, nothing to configure.

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
- `who_you_serve` and `connect` — placeholder/general questions, marked as
  such in their `subtitle`. Replace these with Storytale's actual Chapter 2
  (Core People: Knowing/Understanding/Collecting) and Chapter 3 (Connect:
  Pathway/Presence/Process) prompts once those modules are shared.
- `basics`, `voice`, `proof`, `offers`, `freewrite` — general copywriting
  intake questions that aren't part of the Storytale course but are useful
  for writing actual copy regardless of framework.

## Branding

Colors and fonts are CSS custom properties at the top of `style.css`
(`:root { --color-primary: ...; --font-heading: ...; }`). Swap those once
real brand colors/fonts are available — nothing else in the file should
need to change. It currently uses a neutral warm palette and Google Fonts
(Fraunces + Inter), not the Wild Pines font.

## Turning answers into copy

See `copywriting-brief-prompt.md` for a ready-to-use Claude prompt that
takes Ali's exported answers and produces About-page copy, homepage hero
copy, Instagram caption starters, and blog post outlines — while flagging
anywhere her answers were too thin to write from confidently.

## Reusing this for future clients

This is meant to be a repeatable template, not a one-off for Ali:

1. Duplicate the `intake-form/` folder.
2. Swap the content of `questions.js` for whatever framework applies.
3. Swap the theme variables in `style.css`.
4. Reuse `copywriting-brief-prompt.md` as the starting point for turning
   their answers into copy.
