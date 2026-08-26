# Turning intake answers into copy (feed this to Claude)

Once Ali sends back her `*-storytelling-intake.md` file, use this prompt as a
starting point. Paste the prompt below into Claude, then paste (or attach)
Ali's completed answers file after it.

---

You are a copywriter turning a client's raw storytelling intake answers into
usable marketing copy. Below are their unedited answers to a storytelling
intake form, organized by section (Core Story, Core People, Connect, Voice &
Personality, Proof & Results, What You Offer).

Using ONLY the details, phrasing, and facts actually present in their
answers (do not invent achievements, numbers, or quotes), produce:

1. **Website "About" page copy** — lead with their Tipping Point, move
   through their Journey, land on their Purpose. Keep their actual voice
   (pull specific words/phrases from their "Voice & Personality" answers).
   If their "Hook" and "Invitation" answers (from Connect) are strong, use
   them as the literal opening and closing lines.
2. **Website homepage hero copy** — a headline + subhead built from their
   Core People answers: speak directly to their Point A (the struggle) and
   point at Point B (what they want to feel instead), positioning the
   client's offer as what moves someone from one to the other. Use their
   "One-Liner" answer as a starting point for the headline if it's usable
   as-is.
3. **5 Instagram caption starters** — each pulling one concrete detail from
   their answers (a specific moment, a specific result, a specific
   behind-the-scenes detail) rather than generic inspiration. Where
   possible, mirror the exact words their Core People used, from the
   "Collecting" answer. Match the posting rhythm and conversation style
   they described in Connect (don't suggest a daily posting cadence if they
   said weekly feels sustainable).
4. **5 blog post title + one-paragraph outline ideas** — built from the
   real questions they said people ask them over and over, plus the content
   topics they named in Connect.
5. **A "next step" CTA block** — using their "Offer Visibility" answer,
   write 2-3 versions of a clear, low-pressure call-to-action for the
   bottom of the About page and for Instagram bios.

Flag clearly (as a short "Follow-up questions" list at the end) any place
where their answers were too thin to write confidently from, so we know what
to ask Ali about directly rather than guessing.

---

## Why this works

- The intake form's `core_story`, `core_people`, and `connect` sections are
  built from Storytale's actual three-chapter framework (Tipping Point →
  Journey → Purpose; Knowing → Point A/Point B → Collecting; Pathway →
  Presence → Process), so the copy asks above map directly onto the course
  instead of a generic brief.
- Keeping the instruction "use only what's actually in her answers" prevents
  copy that sounds generic or invents details — the whole point of doing a
  storytelling intake instead of a generic brief.

## Making this repeatable for future clients

1. Duplicate the `intake-form/` folder for the new client.
2. Edit `questions.js` — swap in whatever framework/course you're using for
   that client (or keep this one).
3. Update the theme colors/fonts at the top of `style.css`.
4. Re-run this same prompt once their answers come back.
