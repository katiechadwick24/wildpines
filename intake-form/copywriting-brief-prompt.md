# Turning intake answers into copy (feed this to Claude)

Once Ali sends back her `*-storytelling-intake.md` file, use this prompt as a
starting point. Paste the prompt below into Claude, then paste (or attach)
Ali's completed answers file after it.

---

You are a copywriter turning a client's raw storytelling intake answers into
usable marketing copy. Below are their unedited answers to a storytelling
intake form, organized by section (Core Story, Who You Serve, Voice &
Personality, Proof & Results, What You Offer, Website/Instagram/Blog).

Using ONLY the details, phrasing, and facts actually present in their
answers (do not invent achievements, numbers, or quotes), produce:

1. **Website "About" page copy** — lead with their Tipping Point, move
   through their Journey, land on their Purpose. Keep their actual voice
   (pull specific words/phrases from their "Voice & Personality" answers).
2. **Website homepage hero copy** — a headline + subhead that speaks to
   their ideal customer's pain (from "Who You Serve") and points at the
   transformation they offer.
3. **5 Instagram caption starters** — each pulling one concrete detail from
   their answers (a specific moment, a specific result, a specific
   behind-the-scenes detail) rather than generic inspiration.
4. **5 blog post title + one-paragraph outline ideas** — built from the
   real questions they said people ask them over and over.

Flag clearly (as a short "Follow-up questions" list at the end) any place
where their answers were too thin to write confidently from, so we know what
to ask Ali about directly rather than guessing.

---

## Why this works

- The intake form's `core_story` section is built from Storytale's actual
  Chapter 1 framework (Tipping Point → Journey → Purpose), so the About-page
  copy structure above maps directly onto it.
- Keeping the instruction "use only what's actually in her answers" prevents
  copy that sounds generic or invents details — the whole point of doing a
  storytelling intake instead of a generic brief.
- As Chapter 2 (Core People) and Chapter 3 (Connect) material gets added to
  `questions.js`, extend this prompt with matching copy asks (e.g. once
  Connect/Pathway data exists, ask for a lead-magnet or nurture-sequence
  outline too).

## Making this repeatable for future clients

1. Duplicate the `intake-form/` folder for the new client.
2. Edit `questions.js` — swap in whatever framework/course you're using for
   that client (or keep this one).
3. Update the theme colors/fonts at the top of `style.css`.
4. Re-run this same prompt once their answers come back.
