// Storytelling intake question bank.
//
// SOURCE: "core_story" section below is built directly from Storytale's
// Chapter 1 (Core Story) course material — Tipping Point / Journey / Purpose.
// Every other section is a general copywriting-intake placeholder, since only
// Chapter 1 of Storytale has been shared so far. Once Chapter 2 (Core People)
// and Chapter 3 (Connect) materials are provided, replace the "who_you_serve"
// and "connect" sections below with Storytale's actual Knowing/Understanding/
// Collecting and Pathway/Presence/Process prompts — everything else (app.js,
// index.html) stays the same, this file is the only thing that needs editing.

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
    id: 'who_you_serve',
    title: 'Who You Serve',
    subtitle:
      "Draft section — will be replaced with Storytale's Chapter 2 (Core People) prompts once that module is shared. For now, general questions so we're not stuck.",
    questions: [
      {
        id: 'customer_who',
        label: "Describe your ideal customer or client like you're describing a real person you know.",
        type: 'textarea',
      },
      {
        id: 'customer_pain',
        label: 'What are they struggling with right before they find you? What does that feel like for them?',
        type: 'textarea',
      },
      {
        id: 'customer_after',
        label: 'What does life or business look like for them after working with you?',
        type: 'textarea',
      },
      {
        id: 'customer_words',
        label: 'What words or phrases do your best customers use to describe you?',
        helper: 'Pull straight from reviews or DMs if you can — their exact words are gold.',
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
    title: 'Website, Instagram & Blog',
    subtitle:
      "Draft section — will be replaced with Storytale's Chapter 3 (Connect: Pathway/Presence/Process) prompts once that module is shared.",
    questions: [
      {
        id: 'website_action',
        label: "When someone lands on your website, what's the ONE thing you want them to do?",
        type: 'text',
      },
      {
        id: 'ig_behind_scenes',
        label: 'What behind-the-scenes moments from your work or life would you be comfortable sharing on Instagram?',
        type: 'textarea',
      },
      {
        id: 'blog_questions',
        label: 'What questions do people ask you over and over (in DMs, calls, consults)? These make great blog topics.',
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
