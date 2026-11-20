/**
 * Service definitions — powers /what-can-i-do.
 * `deliverables` are the tangible things a client receives.
 */

export const services = [
  {
    slug: 'brand-strategy',
    title: 'Brand Strategy & Analysis',
    tagline: 'Find out what the brand is really saying before you spend money making it say more.',
    summary:
      'A structured read on positioning, audience behaviour and competitive territory. You get a strategy you can brief designers from, not a moodboard with adjectives.',
    deliverables: [
      'Brand audit and competitive landscape',
      'Audience behavioural mapping and segments',
      'Positioning and messaging framework',
      'Creative direction document',
    ],
    forWho: 'Brands that have outgrown the look they started with and need to decide what comes next.',
  },
  {
    slug: 'graphic-design',
    title: 'Graphic Design',
    tagline: 'Identity, collateral, packaging and social assets that hold together as a system.',
    summary:
      'Design work built to be used — by your team, your vendors and your next designer. Files, guidelines and templates included, so the identity survives handover.',
    deliverables: [
      'Brand identity refresh and full visual system',
      'Campaign collateral, printables and packaging',
      'Social templates and content kits',
      'Brand guidelines and asset library',
    ],
    forWho: 'Teams who need to look consistent at volume, on a deadline, across several people.',
  },
  {
    slug: 'art-direction',
    title: 'Art Direction',
    tagline: 'A point of view on the camera, the set, the light and the frame.',
    summary:
      'I build the visual brief, write the references, and hold the line through execution — so the output is a single idea rather than a collection of nice shots.',
    deliverables: [
      'Shoot concepts and visual references',
      'Moodboards and styling direction',
      'On-set or remote art direction',
      'Designer briefings and quality review',
    ],
    forWho: 'Productions where the brief is vague and the photography needs a spine.',
  },
  {
    slug: 'copywriting',
    title: 'Copywriting',
    tagline: 'Words that carry the strategy instead of decorating it.',
    summary:
      'Hooks, ad copy, video scripts, lifecycle email and landing pages written for the moment the reader is deciding — not for the brand to describe itself.',
    deliverables: [
      'Hook and script libraries',
      'Meta, Google and marketplace ad copy',
      'Email and WhatsApp lifecycle copy',
      'Landing page and product copy',
    ],
    forWho: 'Anyone whose creative looks good and quietly does not convert.',
  },
  {
    slug: 'video-editing',
    title: 'Video Editing',
    tagline: 'Pacing, framing and sound, tuned for short-form attention.',
    summary:
      'Reels, ad edits and launch films cut around one idea, with captions, sound design and pacing that respect the first three seconds.',
    deliverables: [
      'Short-form Reels and ad cutdowns',
      'Launch film editing and finishing',
      'Captioning, sound design and colour pass',
      'Platform-ready exports in every ratio',
    ],
    forWho: 'Brands producing video faster than they can finish it.',
  },
  {
    slug: 'campaign-concepting',
    title: 'Campaign Concepting',
    tagline: 'The idea first. Everything else is execution.',
    summary:
      'Concept development for launches, relaunches, festive periods and new propositions — grounded in audience behaviour and written to be produced.',
    deliverables: [
      'Campaign platforms and big ideas',
      'Channel plans and asset matrices',
      'Launch, relaunch and festive concepts',
      'Copy and creative direction per asset',
    ],
    forWho: 'Marketing teams who need a campaign people actually repeat back to you.',
  },
  {
    slug: 'pitch-decks',
    title: 'Pitch Deck Creation',
    tagline: 'The deck that gets read in the room, not skimmed after it.',
    summary:
      'Narrative-first decks for client pitches and investor conversations. Built from your raw material, structured to hold attention, and designed to survive a live presentation.',
    deliverables: [
      'Narrative structure and storyline',
      'Full designed deck, print and screen ready',
      'Charts, data visualisation and proof points',
      'Speaker notes and delivery script',
    ],
    forWho: 'Founders and teams pitching clients, investors or partners.',
  },
]

/**
 * The process — /process. Each phase has a number, a title, a body and
 * a list of what actually happens during it.
 */
export const process = [
  {
    number: '01',
    title: 'Listen',
    duration: 'The first conversation',
    body:
      'Before I open a single file, I want to know what is actually going wrong. Not the brief you were handed — the business problem underneath it.',
    points: [
      'A full read on the objective, the audience and the constraint',
      'Swearing in: what has already been tried and why it fell short',
      'A blunt conversation about what success is measured in',
    ],
  },
  {
    number: '02',
    title: 'Diagnose',
    duration: 'The unglamorous middle',
    body:
      'I audit what exists — brand, performance, competitors, audience behaviour — and find the one thing that is holding the work back.',
    points: [
      'Audit of current brand and creative output',
      'Audience and competitive landscape',
      'A written diagnosis with a recommended direction',
    ],
  },
  {
    number: '03',
    title: 'Frame',
    duration: 'Strategy on one page',
    body:
      'Everything gets reduced to a single argument: what we are saying, to whom, and why that matters to them. If it does not fit on one page, it is not decided yet.',
    points: [
      'Positioning and messaging framework',
      'Key messages and content pillars',
      'Creative direction with reference examples',
    ],
  },
  {
    number: '04',
    title: 'Make',
    duration: 'The craft',
    body:
      'Identity, campaigns, copy, edits and decks get designed as one system, not five separate deliverables. The work is checked against the strategy, not against taste.',
    points: [
      'Design, copy and direction developed together',
      'Real critique rounds against the brief',
      'Production-ready assets, not just concept frames',
    ],
  },
  {
    number: '05',
    title: 'Ship',
    duration: 'Getting it out',
    body:
      'Final files, templates, rollout guidance and asset matrices — plus a handover that means the work still looks right six months later, made by someone else.',
    points: [
      'Production-ready files and channel exports',
      'Templates and guidelines for the internal team',
      'Rollout plan and asset matrix',
    ],
  },
  {
    number: '06',
    title: 'Measure',
    duration: 'Closing the loop',
    body:
      'Creative that never gets read against performance is just decoration. I set the benchmarks up front and check what landed.',
    points: [
      'Measurement framework agreed before launch',
      'Creative performance read against benchmarks',
      'Iteration notes for the next cycle',
    ],
  },
]

/**
 * Differentiators — /whats-different.
 */
export const differentiators = [
  {
    title: 'Strategy and craft sit in the same head',
    body:
      'Most brands hire a strategist and a designer and spend the rest of the project translating between them. Here, the positioning and the design come from the same reasoning — so the idea survives all the way to the file.',
    marker: 'No translation loss',
  },
  {
    title: 'I read the numbers, not just the mood',
    body:
      'Analytics, funnel data and CTR are part of the brief, not a report that arrives after the work is done. Creative decisions get defended with behaviour, not preference.',
    marker: 'Behaviour-led',
  },
  {
    title: 'Copy is written, not filled in',
    body:
      'Asking me for a design and getting copy in the same delivery is the point. Words and layout are designed together — the hook, the headline and the visual are one idea.',
    marker: 'One voice end to end',
  },
  {
    title: 'Built to be used, not to be admired',
    body:
      'Every engagement ends with usable files, templates and guidelines. The goal is a system your team can run without me — and a reason to call me back when it needs the next level.',
    marker: 'Handover-ready',
  },
  {
    title: 'I have sat on the client side of the table',
    body:
      'Running campaigns, funnels and creator partnerships taught me what actually gets approved, what gets ignored, and which brief was wrong in the first place. That is why my first question is always about the business.',
    marker: 'Operator POV',
  },
  {
    title: 'Small team energy, agency range',
    body:
      'You work directly with the person doing the thinking and the making. No account layer, no hand-offs, no waiting three weeks to find out where the project is.',
    marker: 'Direct contact',
  },
]
