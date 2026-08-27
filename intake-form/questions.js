// Brand storytelling intake question bank.

const INTAKE_SECTIONS = [
  {
    id: 'basics',
    title: 'Start Here',
    subtitle: 'The quick version. We will get to the good stuff in a minute.',
    questions: [
      {
        id: 'business_name',
        label: 'What is the name of your business?',
        helper: 'A working name is completely fine.',
        type: 'text',
      },
      {
        id: 'tagline',
        label: 'Do you already have a tagline, signature phrase, or something people associate with you?',
        helper: 'No pressure if not. We can figure that out later.',
        type: 'text',
      },
      {
        id: 'elevator_pitch',
        label: 'If someone asked what you do, what would you say before your brain overthought it?',
        type: 'textarea',
      },
    ],
  },
  {
    id: 'core_story',
    title: 'The Story Under It',
    subtitle: 'The real experiences, frustrations, and convictions behind the work.',
    questions: [
      {
        id: 'tipping_point',
        label: 'Where did this start for you?',
        helper:
          'What moment, problem, frustration, or obsession made this kind of work matter to you? It does not need to be dramatic. It just needs to be true.',
        type: 'textarea',
      },
      {
        id: 'journey_commitment',
        label: 'What made you take it seriously?',
        helper:
          'How did this go from an interest or realization to something you decided to build, learn, or get very good at?',
        type: 'textarea',
      },
      {
        id: 'journey_success',
        label: 'What makes you think, “yes, this is why I do this”?',
        helper:
          "A client moment, a result, a piece of feedback, or a small win that felt especially real. If you are new, tell us about a moment that made you feel capable.",
        type: 'textarea',
      },
      {
        id: 'purpose',
        label: 'What do you want your work to change?',
        helper:
          'For your clients, your industry, or the world around you. Big or small, what do you care enough to keep showing up for?',
        type: 'textarea',
      },
    ],
  },
  {
    id: 'core_people',
    title: 'Your People',
    subtitle: 'Not a demographic exercise. The actual people you want in the room.',
    questions: [
      {
        id: 'knowing_who',
        label: 'Who is this really for?',
        helper:
          'Describe them like a person, not a target market. They may be a past version of you, someone you know well, or the people you are most excited to help.',
        type: 'textarea',
      },
      {
        id: 'point_a',
        label: 'What is weighing on them before they find you?',
        helper: 'Think 3 AM thoughts, recurring frustrations, and the thing they are tired of pretending is fine.',
        type: 'textarea',
      },
      {
        id: 'point_b',
        label: 'What do they want to feel instead?',
        helper: 'If the right solution appeared tomorrow, what would be different in their day, work, or life?',
        type: 'textarea',
      },
      {
        id: 'your_role',
        label: 'Why are you the person to help them get there?',
        helper: 'What is your particular approach, perspective, skill set, or way of working that makes a difference?',
        type: 'textarea',
      },
      {
        id: 'place',
        label: 'Where are they already spending money in your world?',
        helper: 'Online or off. Think brands, stores, platforms, communities, and places they already trust.',
        type: 'text',
      },
      {
        id: 'social_media_habit',
        label: 'Where do they spend time online, and what are they doing there?',
        type: 'text',
      },
      {
        id: 'habit',
        label: 'What habits, interests, or lifestyle details tell us more about them?',
        type: 'textarea',
      },
      {
        id: 'collecting_notes',
        label:
          'What have real people actually said about this?',
        helper: 'Paste DMs, reviews, client language, recurring comments, forum threads, or notes from conversations. Exact words are gold.',
        type: 'textarea',
      },
    ],
  },
  {
    id: 'voice',
    title: 'How You Sound',
    subtitle: 'So this sounds like you, not a brand generated in a beige conference room.',
    questions: [
      {
        id: 'voice_words',
        label: 'What 3-5 words describe your voice when it is at its best?',
        helper: 'For example: warm, blunt, playful, luxe, scrappy, thoughtful, a little feral.',
        type: 'textarea',
      },
      {
        id: 'voice_admire',
        label: 'Whose voice do you love, and what exactly are they doing right?',
        type: 'textarea',
      },
      {
        id: 'voice_never',
        label: 'What should we never make you sound like?',
        helper: 'Words, phrases, tones, trends, or entire vibes. Be specific. We love a hard no.',
        type: 'textarea',
      },
      {
        id: 'voice_spectrum',
        label: 'Finish this sentence: “My brand is more ___ than ___.”',
        helper: 'For example: “more excellent host than corporate thought leader” or “more trusted guide than chaotic best friend.”',
        type: 'textarea',
      },
    ],
  },
  {
    id: 'proof',
    title: 'The Receipts',
    subtitle: 'The things that make people trust you beyond the vibes.',
    questions: [
      {
        id: 'proof_results',
        label: 'What results, transformations, or wins can you point to?',
        helper: 'Numbers are welcome, but so are meaningful shifts, repeat clients, before-and-afters, and small victories.',
        type: 'textarea',
      },
      {
        id: 'proof_testimonial',
        label: 'Paste a piece of client or customer feedback you are proud of.',
        type: 'textarea',
      },
      {
        id: 'proof_credentials',
        label: 'What experience, credentials, press, or proof gives people confidence in you?',
        type: 'textarea',
      },
    ],
  },
  {
    id: 'offers',
    title: 'What You Actually Do',
    subtitle: 'The practical part, with as little business-speak as possible.',
    questions: [
      {
        id: 'offers_list',
        label: 'What can someone hire or buy from you right now?',
        type: 'textarea',
      },
      {
        id: 'offers_different',
        label: 'Why would someone choose your version over the other options?',
        helper: 'What is different about the experience, process, point of view, outcome, or care you bring?',
        type: 'textarea',
      },
      {
        id: 'offers_favorite',
        label: 'Which offer are you most excited about right now?',
        helper: 'Tell us why. Your actual enthusiasm is useful data.',
        type: 'textarea',
      },
    ],
  },
  {
    id: 'connect',
    title: 'How They Find You',
    subtitle: 'Where your people are, what makes them pay attention, and what happens after that.',
    questions: [
      {
        id: 'pathway_mediums',
        label: 'Where do your people already spend time?',
        helper:
          'Online or off. Then tell us the one or two places you could realistically show up without trying to become a content farm.',
        type: 'textarea',
      },
      {
        id: 'one_liner',
        label: 'What do you help people do?',
        helper:
          'Give us the plain version. “I help [who] [do what] so they can [feel or achieve what]” is plenty to start.',
        type: 'textarea',
      },
      {
        id: 'story_hook',
        label: 'What is the line that would make the right person stop scrolling?',
        helper: 'Something that names their struggle, desire, or very specific frustration well enough that they think, “oh. Rude. That is me.”',
        type: 'textarea',
      },
      {
        id: 'story_invitation',
        label: 'What do you want someone to do next?',
        helper: 'Follow, book a call, join your list, reply, buy, lurk thoughtfully. Pick the clearest next step.',
        type: 'text',
      },
      {
        id: 'offer_next_step',
        label: 'What is the simplest way for someone to work with you right now?',
        type: 'textarea',
      },
      {
        id: 'content_topics',
        label: 'What do you keep wanting to talk about?',
        helper: 'Pull from your people’s questions, your convictions, your work, or the things you cannot stop noticing.',
        type: 'textarea',
      },
      {
        id: 'content_rhythm',
        label: 'What posting rhythm could you actually sustain?',
        helper: 'Realistic, not aspirational. Daily, a few times a week, once a week, whenever the stars align?',
        type: 'text',
      },
      {
        id: 'conversation_style',
        label: 'Where do you genuinely like talking with your people?',
        helper: 'Comments, DMs, email, in-person events, a group chat, a community space. Wherever it feels real rather than performative.',
        type: 'textarea',
      },
    ],
  },
  {
    id: 'freewrite',
    title: 'Loose Ends',
    subtitle: 'Anything we missed, including the weirdly specific thing that may turn out to matter most.',
    questions: [
      {
        id: 'freewrite_notes',
        label: 'What else should we know?',
        helper: 'Context, opinions, half-formed ideas, a rant, a note you have been carrying around. Nothing is too random.',
        type: 'textarea',
      },
    ],
  },
];
