// Storytelling intake question bank.
//
// SOURCE: "core_story", "core_people", and "connect" below are built
// directly from Storytale's Chapter 1 (Core Story), Chapter 2 (Core People),
// and Chapter 3 (Connect: Pathway/Presence/Process) course material. All
// three chapters of the course are now represented — "basics", "voice",
// "proof", "offers", and "freewrite" remain general copywriting-intake
// questions that aren't part of Storytale but are useful regardless.

const INTAKE_SECTIONS = [
  {
    id: 'basics',
    title: 'The Basics',
    subtitle: "Let's start easy.",
    questions: [
      {
        id: 'business_name',
        label: "What's the name of your business (or the name you want us to write about)?",
        type: 'text',
      },
      {
        id: 'tagline',
        label: 'Do you already have a tagline or phrase people associate with you?',
        helper: "It's totally okay if not — we can find one together.",
        type: 'text',
      },
      {
        id: 'elevator_pitch',
        label: 'If you had 10 seconds to tell a stranger what you do, what would you say?',
        type: 'textarea',
      },
    ],
  },
  {
    id: 'core_story',
    title: 'Your Core Story',
    subtitle:
      'Storytale calls this the compass of your business — not a tagline, but the real experiences, struggles, and wins that shaped why you do what you do today.',
    questions: [
      {
        id: 'tipping_point',
        label: 'Tipping Point — what sparked you?',
        helper:
          'When did you begin to care deeply about the kind of work you do now? What was the specific moment, problem, frustration, or inspiration that led you to pursue this path? It doesn\'t need to be dramatic — it just needs to be true.',
        type: 'textarea',
      },
      {
        id: 'journey_commitment',
        label: 'Journey (Commitment) — how did you commit to mastering your craft?',
        helper:
          'How did you transform your passion or realization into action? Were there any stories that shaped your journey?',
        type: 'textarea',
      },
      {
        id: 'journey_success',
        label: 'Journey (Success) — what moments represent your success?',
        helper:
          "Is there a particular moment or scene that shows what your business stands for? What outcomes or feedback make you feel proud and affirmed? (If you're just starting out, this can just be a moment that felt like growth.)",
        type: 'textarea',
      },
      {
        id: 'purpose',
        label: 'Purpose — why do you keep going?',
        helper:
          "What impact do you want to make? What do you want to keep building or bringing into the world? It doesn't have to be grand — you just need to say why you care.",
        type: 'textarea',
      },
    ],
  },
  {
    id: 'core_people',
    title: 'Your Core People',
    subtitle:
      "Storytale's Chapter 2: the people your story is meant to reach — not a demographic, but the ones whose struggles, dreams, and values already resonate with your Core Story.",
    questions: [
      {
        id: 'knowing_who',
        label: 'Knowing — who are they?',
        helper:
          'Who were you when you had your Tipping Point? Is there someone who inspired or drove you to pursue this path — or is your ideal person basically your old self, the one you used to be?',
        type: 'textarea',
      },
      {
        id: 'point_a',
        label: 'Point A — what are they struggling with?',
        helper: "Their 3 AM thoughts and feelings about the problem you solve. What does that struggle actually feel like for them?",
        type: 'textarea',
      },
      {
        id: 'point_b',
        label: 'Point B — what do they dream to feel instead?',
        helper: "If there were a genie for your industry, what would they wish for? What's the feeling they're craving?",
        type: 'textarea',
      },
      {
        id: 'your_role',
        label: 'Your role — how does your business move them from Point A to Point B?',
        helper: 'What do you have that can uniquely help them get there, and how?',
        type: 'textarea',
      },
      {
        id: 'place',
        label: 'Where do they usually buy things related to your industry?',
        helper: 'Online or offline — wherever they already are.',
        type: 'text',
      },
      {
        id: 'social_media_habit',
        label: 'Which social media platform do they use, and why?',
        type: 'text',
      },
      {
        id: 'habit',
        label: 'What is their habit, interest, or lifestyle related to your industry?',
        type: 'textarea',
      },
      {
        id: 'collecting_notes',
        label:
          "Collecting — what have you actually heard from real people? Client conversations, DMs, reviews, recurring comments, forum threads — paste any direct quotes or patterns you've noticed.",
        helper: "This is the good stuff — their exact words are more valuable than your guesses about them.",
        type: 'textarea',
      },
    ],
  },
  {
    id: 'voice',
    title: 'Your Voice & Personality',
    subtitle: 'So the writing sounds like you, not a generic brand.',
    questions: [
      {
        id: 'voice_words',
        label: 'Pick 3-5 words that describe your brand personality.',
        helper: 'e.g. warm, no-nonsense, playful, luxe, scrappy',
        type: 'textarea',
      },
      {
        id: 'voice_admire',
        label: 'Name a brand, person, or writer whose voice you admire (any industry). What do you like about it?',
        type: 'textarea',
      },
      {
        id: 'voice_never',
        label: "What's a word, phrase, or tone you NEVER want us to use for you?",
        type: 'textarea',
      },
      {
        id: 'voice_spectrum',
        label: 'On a scale from "buttoned-up professional" to "chaotic best friend," where do you land?',
        type: 'text',
      },
    ],
  },
  {
    id: 'proof',
    title: 'Proof & Results',
    subtitle: 'The receipts that make people trust you.',
    questions: [
      {
        id: 'proof_results',
        label: 'Share any results, numbers, or transformations you can point to — even small ones count.',
        type: 'textarea',
      },
      {
        id: 'proof_testimonial',
        label: "Paste your favorite piece of client or customer feedback you've ever received.",
        type: 'textarea',
      },
      {
        id: 'proof_credentials',
        label: 'Any credentials, press, awards, or experience that build trust?',
        type: 'textarea',
      },
    ],
  },
  {
    id: 'offers',
    title: 'What You Offer',
    subtitle: 'The practical stuff we need to describe clearly.',
    questions: [
      {
        id: 'offers_list',
        label: 'List what you sell or offer right now (products, services, packages).',
        type: 'textarea',
      },
      {
        id: 'offers_different',
        label: 'What makes your offer different from the other options your customer could choose instead?',
        type: 'textarea',
      },
      {
        id: 'offers_favorite',
        label: 'Which offer are you most excited about right now, and why?',
        type: 'textarea',
      },
    ],
  },
  {
    id: 'connect',
    title: 'Connect: Pathway, Presence & Process',
    subtitle:
      "Storytale's Chapter 3 — the bridge between your story and your people. Pathway is where they find you, Presence is how they recognize you, Process is how you keep the relationship going.",
    questions: [
      {
        id: 'pathway_mediums',
        label: 'Pathway — where do your Core People already spend their time?',
        helper:
          "Online or offline. Then: which 1-2 places could you realistically show up starting now, without trying to be everywhere at once?",
        type: 'textarea',
      },
      {
        id: 'one_liner',
        label: 'Presence — your One-Liner',
        helper:
          'Use the formula: "I help [WHO] [DO WHAT], so they can [FEEL / ACHIEVE WHAT]." The formula version is fine — we\'ll help polish it into your voice.',
        type: 'textarea',
      },
      {
        id: 'story_hook',
        label: 'Presence — your story\'s Hook',
        helper:
          "One line that mirrors your Core People's biggest struggle or dream, to open your story with — the line that makes them think \"that's me.\"",
        type: 'textarea',
      },
      {
        id: 'story_invitation',
        label: "Presence — your story's Invitation",
        helper:
          "After someone hears your story, what's the one next step you want them to take? (Follow, book a call, join your list, reply, etc.)",
        type: 'text',
      },
      {
        id: 'offer_next_step',
        label: 'Presence — Offer Visibility: what\'s the simplest, clearest way for someone to actually work with you right now?',
        type: 'textarea',
      },
      {
        id: 'content_topics',
        label: 'Process — Content: what topics do you keep coming back to?',
        helper: "Pull from your Core People's struggles and dreams, or just what's been on your mind lately.",
        type: 'textarea',
      },
      {
        id: 'content_rhythm',
        label: 'Process — Content: what posting rhythm actually feels sustainable to you?',
        helper: 'Not aspirational — realistic. Daily, a few times a week, weekly?',
        type: 'text',
      },
      {
        id: 'conversation_style',
        label: 'Process — Conversation: where do you naturally enjoy talking with your people, and what does that look like?',
        helper: 'Replying to comments, DMs, in-person events, a Facebook group — wherever feels real, not performative.',
        type: 'textarea',
      },
    ],
  },
  {
    id: 'freewrite',
    title: 'Anything Else',
    subtitle: 'The open floor is yours.',
    questions: [
      {
        id: 'freewrite_notes',
        label: "Anything we didn't ask that you think we should know? Dump it here — nothing is too random.",
        type: 'textarea',
      },
    ],
  },
];
