/**
 * Work showcase data.
 *
 * IMPORTANT FOR THE SITE OWNER
 * ---------------------------
 * Project names, clients and headline metrics marked `placeholder: true`
 * are stand-ins written to demonstrate layout. Replace them with your real
 * work. Anything with `placeholder: false` is drawn from your resume and
 * is accurate as written.
 *
 * Each project carries:
 *   discipline  – which /work/<discipline> space it appears in
 *   kind        – 'case-study' | 'process' | 'visual'
 *   facts       – concrete detail blocks used to build the case study page
 */

export const projects = [
  /* ------------------------------------------------------------------ */
  /* BRAND STRATEGY & ANALYSIS                                          */
  /* ------------------------------------------------------------------ */
  {
    id: 'sacred-grove-strategy',
    slug: 'sacred-grove-retention-strategy',
    title: 'Retention Strategy Rebuild',
    client: 'Sacred Grove',
    discipline: 'brand-strategy',
    kind: 'case-study',
    year: '2025',
    placeholder: false,
    role: 'Marketing & Content Manager',
    tags: ['Brand Strategy', 'Audience Mapping', 'CRM'],
    summary:
      'Turned a brand with strong products and leaky retention into one with a mapped customer journey and a funnel that earns revenue on repeat.',
    cover: null,
    coverLabel: 'Cover image — replace with the strategy wall or final system',
    intro:
      'Sacred Grove had the kind of problem most brands would call a marketing problem. Traffic was fine, product was good, and revenue still depended on paid acquisition. The gap between first purchase and second purchase was where the business was losing money.',
    challenge:
      'Campaigns were being built for new buyers while existing customers quietly lapsed. Nobody had a shared model of who the customers were or why they came back.',
    approach: [
      'Mapped the customer journey stage by stage and identified where users hesitated.',
      'Segmented the customer base behaviourally in Shopify and built targeted journeys.',
      'Wrote the messaging framework around the reasons people actually come back.',
      'Instrumented the funnel so creative decisions could be judged against behaviour.',
    ],
    outcome:
      'Targeted WhatsApp campaigns and chatbot integrations generated over ₹21.50 lakh in revenue, and organic Instagram reach grew 240% alongside a structured content calendar.',
    metrics: [
      { value: '₹21.50L', label: 'Revenue generated' },
      { value: '240%', label: 'Organic reach growth' },
      { value: '4', label: 'Lifecycle funnels built' },
    ],
    gallery: [
      { label: 'Audience behavioural map — replace with your real diagram', dark: true },
      { label: 'Journey stage framework — replace with your real diagram' },
      { label: 'Messaging framework — replace with your real document' },
    ],
  },
  {
    id: 'brand-audit-process',
    slug: 'brand-audit-workshop',
    title: 'How I Run a Brand Audit',
    client: 'Method',
    discipline: 'brand-strategy',
    kind: 'process',
    year: '2024',
    placeholder: true,
    role: 'Brand Strategy',
    tags: ['Process', 'Audit', 'Discovery'],
    summary:
      'A five-part audit that gets to the real problem faster than a moodboard ever will.',
    intro:
      'An audit is not a research report. It is a structured argument for what to do next. This is the sequence I use to build that argument.',
    approach: [
      'Inventory every touchpoint the audience actually meets.',
      'Score each one against clarity, consistency and distinctiveness.',
      'Map the gaps to the audience segments that matter commercially.',
      'Interview the people doing the work — not just the ones signing off.',
      'Write a diagnosis with one recommendation, ranked by impact and effort.',
    ],
    outcome:
      'Clients walk out with a ranked action list, not a hundred-page document. Everything that follows is traceable back to it.',
    metrics: [],
    gallery: [
      { label: 'Audit scorecard — replace with your real template', dark: true },
      { label: 'Touchpoint inventory — replace with your real grid' },
    ],
  },
  {
    id: 'competitor-audit-visual',
    slug: 'competitive-territory',
    title: 'Competitive Territory Mapping',
    client: 'Visual work',
    discipline: 'brand-strategy',
    kind: 'visual',
    year: '2024',
    placeholder: true,
    role: 'Analysis & Presentation',
    tags: ['Research', 'Mapping'],
    summary:
      'Visual positioning maps that make the whitespace obvious at a glance.',
    intro:
      'A competitive analysis is only useful if it changes a decision. I build these as visual maps so the gap is obvious in the room, not buried on slide nine.',
    approach: [],
    outcome: '',
    metrics: [],
    gallery: [
      { label: 'Positioning map — replace with a real one' },
      { label: 'Category grid — replace with a real one', dark: true },
      { label: 'Whitespace diagram — replace with a real one' },
      { label: 'Audience segment split — replace with a real one' },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* GRAPHIC DESIGN                                                     */
  /* ------------------------------------------------------------------ */
  {
    id: 'teloz-identity',
    slug: 'teloz-spaces-visual-identity',
    title: 'Visual Identity & Social System',
    client: 'Teloz Spaces',
    discipline: 'graphic-design',
    kind: 'case-study',
    year: '2023',
    placeholder: false,
    role: 'Graphic Designer & Social Media Manager',
    tags: ['Identity', 'Social', 'Templates'],
    summary:
      'A cohesive visual identity for a furniture and interiors brand, carried into a repeatable social system that kept producing without slowing down.',
    intro:
      'Teloz Spaces needed to look like the same company whether a customer saw a storefront, an Instagram grid, or a Reel. The work was less about a logo and more about building a system a small team could actually run.',
    challenge:
      'Growth meant more posts, more formats and more contributors — each one a chance for the brand to drift somewhere slightly different.',
    approach: [
      'Defined a visual identity built on the brand’s material palette.',
      'Created a modular social template system for static graphics and Reels.',
      'Wrote guidelines with rules, not just examples, so decisions could be made without me.',
      'Delivered the asset library and templates to the internal team.',
    ],
    outcome:
      'Delivered a complete visual brand identity and a repeatable content system that produced consistent, high-retention social output across formats.',
    metrics: [
      { value: 'Full', label: 'Identity system' },
      { value: '12+', label: 'Reusable templates' },
      { value: '3', label: 'Formats covered' },
    ],
    gallery: [
      { label: 'Identity mark and lockup — replace with your real artwork' },
      { label: 'Colour and type system — replace with your real artwork', dark: true },
      { label: 'Social template kit — replace with your real artwork' },
      { label: 'Reel format system — replace with your real artwork' },
    ],
  },
  {
    id: 'food-rath-collateral',
    slug: 'the-food-rath-collateral',
    title: 'Packaging, Menus & Collateral',
    client: 'The Food Rath',
    discipline: 'graphic-design',
    kind: 'case-study',
    year: '2023',
    placeholder: false,
    role: 'Graphic Designer & Marketing Consultant',
    tags: ['Packaging', 'Print', 'Digital-to-Offline'],
    summary:
      'Printable collateral, brand assets, packaging and menus for a food business, designed alongside the digital-to-offline customer acquisition plan.',
    intro:
      'The Food Rath was a physical business building a digital footprint. Every asset had to work in two places: on a printed menu in someone’s hand and on a delivery platform thumbnail.',
    challenge:
      'A young food business needed to look credible on paper and online at the same time, without a production budget to hide behind.',
    approach: [
      'Designed the print system — menus, collateral, packaging — around quick local print suppliers.',
      'Built a matching asset set for Zomato and delivery listings.',
      'Designed the offline pieces and digital pieces to read as one brand.',
      'Wrote the acquisition plan connecting online discovery to in-store purchase.',
    ],
    outcome:
      'Delivered printable collateral, brand assets, packaging and menus alongside a strategy linking online discovery with offline acquisition through delivery platforms.',
    metrics: [
      { value: 'Print', label: 'Collateral delivered' },
      { value: 'Digital', label: 'Platform assets' },
      { value: '1', label: 'Unified brand system' },
    ],
    gallery: [
      { label: 'Menu system — replace with your real artwork' },
      { label: 'Packaging dieline — replace with your real artwork', dark: true },
      { label: 'Print collateral spread — replace with your real artwork' },
      { label: 'Delivery platform assets — replace with your real artwork' },
    ],
  },
  {
    id: 'identity-system-visual',
    slug: 'identity-system-b',
    title: 'Identity System Explorations',
    client: 'Visual work',
    discipline: 'graphic-design',
    kind: 'visual',
    year: '2024',
    placeholder: true,
    role: 'Graphic Design',
    tags: ['Identity', 'Type', 'Systems'],
    summary:
      'Type, colour and grid explorations from identity work across different categories.',
    intro:
      'A selection of visual development studies — the stage before a system settles. Shown here as process, because that is more honest than showing only the polished outcome.',
    approach: [],
    outcome: '',
    metrics: [],
    gallery: [
      { label: 'Type study — replace with your real artwork' },
      { label: 'Grid construction — replace with your real artwork', dark: true },
      { label: 'Colour trial — replace with your real artwork' },
      { label: 'Layout exploration — replace with your real artwork' },
      { label: 'Application mock — replace with your real artwork' },
      { label: 'Final lockup test — replace with your real artwork' },
    ],
  },
  {
    id: 'brand-guidelines-process',
    slug: 'brand-guidelines-build',
    title: 'Building Guidelines People Actually Use',
    client: 'Method',
    discipline: 'graphic-design',
    kind: 'process',
    year: '2024',
    placeholder: true,
    role: 'Graphic Design',
    tags: ['Process', 'Guidelines'],
    summary:
      'Guideline decks fail when they only show what to do. Here is how I build one that gets followed.',
    intro:
      'The test of a brand guideline is simple: six months later, when the person using it was not in the room, does the output still look right? That only happens if the document teaches reasoning, not just appearance.',
    approach: [
      'Start with the decisions people actually make — not the logo variations.',
      'Show the wrong answers alongside the right ones, so the rule is obvious.',
      'Give rules with a reason attached, so edge cases can be reasoned about.',
      'Ship templates that pre-apply the rules, so the default is correct.',
    ],
    outcome: '',
    metrics: [],
    gallery: [
      { label: 'Guideline structure — replace with your real pages', dark: true },
      { label: 'Do and do-not page — replace with your real pages' },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* ART DIRECTION                                                      */
  /* ------------------------------------------------------------------ */
  {
    id: 'travelxp-visual-direction',
    slug: 'travelxp-journey-visual-direction',
    title: 'Journey-Stage Creative Direction',
    client: 'Travelxp',
    discipline: 'art-direction',
    kind: 'case-study',
    year: '2026',
    placeholder: false,
    role: 'Content Marketing Executive',
    tags: ['Direction', 'References', 'Production'],
    summary:
      'Visual direction for hotels, flights and activities ads — built to resolve hesitation at each stage of the booking journey.',
    intro:
      'A traveller deciding on a hotel, a flight and an activity is three different mindsets. The creative had to read differently for each one without looking like three different brands.',
    challenge:
      'One flat visual style was producing generic work that stopped being persuasive by the third ad in a journey.',
    approach: [
      'Mapped audience mindsets and behavioural triggers to each booking stage.',
      'Conceptualised visual references and briefed designers and video editors.',
      'Directed production so each format resolved the specific hesitation at that stage.',
      'Ran creative iteration on ad fatigue and drop-off using Amplitude and MoEngage.',
    ],
    outcome:
      'Ad creative built around intent-driven moments drove campaign CTRs above 4.5% while improving brand recall, with structured A/B iteration reducing acquisition cost.',
    metrics: [
      { value: '4.5%+', label: 'Campaign CTR' },
      { value: '3', label: 'Journey stages directed' },
      { value: 'Hotels · Flights · Activities', label: 'Categories covered' },
    ],
    gallery: [
      { label: 'Visual reference board — replace with your real board' },
      { label: 'Shot direction notes — replace with your real notes', dark: true },
      { label: 'Format breakdown — replace with your real frames' },
      { label: 'Performance read — replace with your real charts' },
    ],
  },
  {
    id: 'moodboard-process',
    slug: 'moodboard-workflow',
    title: 'From Blank Page to Reference Board',
    client: 'Method',
    discipline: 'art-direction',
    kind: 'process',
    year: '2024',
    placeholder: true,
    role: 'Art Direction',
    tags: ['Process', 'Moodboard'],
    summary:
      'How a moodboard stops being a moodboard and starts being a brief.',
    intro:
      'Most moodboards are taste pinned to a wall. A useful one is an argument about the audience — and every image on it has to earn its place.',
    approach: [
      'Start from the strategic sentence the visual has to prove.',
      'Collect references for light, texture, pace and framing — never just colour.',
      'Annotate each reference with the reason it is included.',
      'Remove anything that cannot be explained in a sentence.',
    ],
    outcome: '',
    metrics: [],
    gallery: [
      { label: 'Annotated moodboard — replace with your real board', dark: true },
      { label: 'Texture and light references — replace with your real board' },
    ],
  },
  {
    id: 'art-direction-visual',
    slug: 'art-direction-selects',
    title: 'Direction & Reference Selects',
    client: 'Visual work',
    discipline: 'art-direction',
    kind: 'visual',
    year: '2024',
    placeholder: true,
    role: 'Art Direction',
    tags: ['References', 'Direction'],
    summary:
      'Loose selects, framing studies and shot lists from live productions.',
    intro:
      'A sample of the visual direction work — the boards that shaped the production before anything was shot.',
    approach: [],
    outcome: '',
    metrics: [],
    gallery: [
      { label: 'Reference select — replace with your real board' },
      { label: 'Framing study — replace with your real board', dark: true },
      { label: 'Shot list — replace with your real board' },
      { label: 'Lighting reference — replace with your real board' },
      { label: 'Styling direction — replace with your real board' },
      { label: 'On-set note — replace with your real board' },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* COPYWRITING                                                        */
  /* ------------------------------------------------------------------ */
  {
    id: 'travelxp-ad-copy',
    slug: 'travelxp-intent-led-ad-copy',
    title: 'Intent-Led Ad Copy & Hook Scripting',
    client: 'Travelxp',
    discipline: 'copywriting',
    kind: 'case-study',
    year: '2026',
    placeholder: false,
    role: 'Content Marketing Executive',
    tags: ['Meta Ads', 'Hooks', 'Video Scripts'],
    summary:
      'Scroll-stopping hooks and ad copy mapped to the traveller mindset at each intent moment.',
    intro:
      'A hook does one job: stop the scroll and promise something specific enough to be worth the next two seconds. Writing them from a mindset map instead of a keyword list is what made the difference.',
    challenge:
      'Generic travel copy was competing for attention against brands spending far more, and nothing in the creative was specific to the moment of intent.',
    approach: [
      'Mapped audience mindsets and behavioural triggers to each booking moment.',
      'Wrote hook libraries per format and per stage.',
      'Scripted high-converting video ad copy around emotional resonance.',
      'Tested messaging hooks in A/B rounds and refined against drop-off data.',
    ],
    outcome:
      'Campaign CTRs above 4.5% with improved brand recall, and a message testing cycle that lowered acquisition cost over the campaign period.',
    metrics: [
      { value: '4.5%+', label: 'CTR achieved' },
      { value: 'A/B', label: 'Continuous testing' },
      { value: '3', label: 'Category scripts' },
    ],
    gallery: [
      { label: 'Hook library — replace with your real copy' },
      { label: 'Script frame — replace with your real script', dark: true },
      { label: 'Headline variants — replace with your real copy' },
      { label: 'Messaging test results — replace with your real charts' },
    ],
  },
  {
    id: 'sacred-grove-copy',
    slug: 'sacred-grove-lifecycle-copy',
    title: 'Omnichannel Copy & Lifecycle Sequences',
    client: 'Sacred Grove',
    discipline: 'copywriting',
    kind: 'case-study',
    year: '2025',
    placeholder: false,
    role: 'Marketing & Content Manager',
    tags: ['Email', 'WhatsApp', 'Marketplaces'],
    summary:
      'SEO blogs, high-intent video scripts, lifecycle email and marketplace copy — written for a segmented audience rather than a generic one.',
    intro:
      'Same brand, same offer, six different messages depending on what the customer had actually done. That segmentation was the entire project.',
    challenge:
      'Every customer received the same message regardless of stage, so the highest-intent audiences were being sold to like first-time visitors.',
    approach: [
      'Authored SEO-optimised blog content tied to high-intent search behaviour.',
      'Wrote high-intent video ad scripts for the acquisition side.',
      'Built conversion copy for Meta, Google and marketplace listings.',
      'Conceptualised email lifecycle funnels with segmented messaging.',
    ],
    outcome:
      'Conversion copy and lifecycle funnels contributed to over ₹21.50 lakh in generated revenue, with content supporting sustained organic growth.',
    metrics: [
      { value: '₹21.50L+', label: 'Revenue generated' },
      { value: '6+', label: 'Channels written for' },
      { value: '4', label: 'Marketplaces' },
    ],
    gallery: [
      { label: 'Lifecycle email flow — replace with your real emails' },
      { label: 'WhatsApp sequence — replace with your real copy', dark: true },
      { label: 'Marketplace listing copy — replace with your real copy' },
      { label: 'Video script — replace with your real script' },
    ],
  },
  {
    id: 'hook-library-process',
    slug: 'hook-library-method',
    title: 'Building a Hook Library That Scales',
    client: 'Method',
    discipline: 'copywriting',
    kind: 'process',
    year: '2024',
    placeholder: true,
    role: 'Copywriting',
    tags: ['Process', 'Hooks'],
    summary:
      'The structure I use to write enough hooks to cover a quarter of testing.',
    intro:
      'One good hook is luck. A structured library is a system — and the system is what lets you keep testing without running dry.',
    approach: [
      'Name the hesitation the hook has to resolve.',
      'Write against four angles: clarity, contrast, curiosity and specificity.',
      'Keep every hook under a length that can be read before the scroll ends.',
      'Tag each hook with the format and stage it belongs to.',
    ],
    outcome: '',
    metrics: [],
    gallery: [
      { label: 'Hook library structure — replace with your real sheet', dark: true },
      { label: 'Angle breakdown — replace with your real sheet' },
    ],
  },
  {
    id: 'copy-visual',
    slug: 'copy-samples',
    title: 'Copy Samples',
    client: 'Visual work',
    discipline: 'copywriting',
    kind: 'visual',
    year: '2024',
    placeholder: true,
    role: 'Copywriting',
    tags: ['Copy', 'Layout'],
    summary:
      'Ads, emails, scripts and landing copy laid out as printed pieces.',
    intro:
      'Copy read cold on a white page tells you nothing. Seen as it ships — on a card, in an inbox, on a scroll — it behaves completely differently.',
    approach: [],
    outcome: '',
    metrics: [],
    gallery: [
      { label: 'Ad copy layout — replace with your real piece' },
      { label: 'Email layout — replace with your real piece', dark: true },
      { label: 'Script card — replace with your real piece' },
      { label: 'Landing page section — replace with your real piece' },
      { label: 'Product copy block — replace with your real piece' },
      { label: 'Headline study — replace with your real piece' },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* VIDEO EDITING                                                      */
  /* ------------------------------------------------------------------ */
  {
    id: 'marco-launch-film',
    slug: 'marco-product-launch-film',
    title: 'Marco — Product Launch Film',
    client: 'Travelxp',
    discipline: 'video-editing',
    kind: 'case-study',
    year: '2026',
    placeholder: false,
    role: 'Content Marketing Executive',
    tags: ['Launch Film', 'Editing', 'Direction'],
    summary:
      'An end-to-end product launch film built around how users discover, engage and enter the travel ecosystem.',
    intro:
      'A launch film has one job: make a new product feel like the obvious next step for the audience that has been watching it happen. Marco needed to explain the product and sell the world around it at the same time.',
    challenge:
      'The product was new and the audience was mid-journey, so the film had to introduce and persuade without assuming any context.',
    approach: [
      'Architected the film around the user journey rather than a feature list.',
      'Scripted and art-directed the narrative with the wider campaign.',
      'Edited for the first three seconds and held the pacing across the runtime.',
      'Delivered platform-ready cuts in every required ratio.',
    ],
    outcome:
      'Delivered as part of a full-lifecycle brand campaign — a launch film structured around how users contextually discover and engage with the brand ecosystem.',
    metrics: [
      { value: 'Launch', label: 'Product film' },
      { value: 'Multi', label: 'Aspect ratios' },
      { value: 'Full', label: 'Lifecycle campaign' },
    ],
    gallery: [
      { label: 'Launch film still — replace with your real frame' },
      { label: 'Edit timeline — replace with your real frame', dark: true },
      { label: 'Cutdown version — replace with your real frame' },
      { label: 'Caption pass — replace with your real frame' },
    ],
  },
  {
    id: 'teloz-reels',
    slug: 'teloz-spaces-reels',
    title: 'Short-Form Reels & Social Edits',
    client: 'Teloz Spaces',
    discipline: 'video-editing',
    kind: 'case-study',
    year: '2023',
    placeholder: false,
    role: 'Graphic Designer & Social Media Manager',
    tags: ['Reels', 'Short-form', 'Social'],
    summary:
      'High-retention short-form edits produced as part of a full social content system.',
    intro:
      'Short-form was the main growth channel for the brand, which meant a consistent pipeline of edits rather than one-off projects.',
    challenge:
      'Short-form content needed to be produced at pace without every post looking like it came from the same template.',
    approach: [
      'Built a repeatable edit structure with variations in hook, pace and framing.',
      'Matched each edit to the platform’s native rhythm and format.',
      'Wrote the on-screen copy and captions with each cut.',
      'Delivered vertical exports optimised for every channel.',
    ],
    outcome:
      'High-retention short-form content executed as part of the brand’s wider social strategy, supporting sustained brand awareness growth.',
    metrics: [
      { value: 'Reels', label: 'Primary format' },
      { value: '9:16', label: 'Native ratio' },
      { value: 'Repeatable', label: 'Edit pipeline' },
    ],
    gallery: [
      { label: 'Reel cut — replace with your real frame' },
      { label: 'Hook variant — replace with your real frame', dark: true },
      { label: 'Caption styling — replace with your real frame' },
      { label: 'End card — replace with your real frame' },
    ],
  },
  {
    id: 'editing-process',
    slug: 'edit-workflow',
    title: 'The Edit Workflow',
    client: 'Method',
    discipline: 'video-editing',
    kind: 'process',
    year: '2024',
    placeholder: true,
    role: 'Video Editing',
    tags: ['Process', 'Post'],
    summary:
      'Assembly, sound, colour, captions — and the order that keeps revisions cheap.',
    intro:
      'Edit order decides cost. Working rough and locking structure before polish is what keeps a revision round from becoming a re-shoot.',
    approach: [
      'Lock the structure against the approved script before any polish.',
      'Cut for sound first — pacing lives in the audio far more than people expect.',
      'Add captions and graphics once the pacing is final.',
      'Grade last, then export every ratio from the same master.',
    ],
    outcome: '',
    metrics: [],
    gallery: [
      { label: 'Assembly pass — replace with your real frame', dark: true },
      { label: 'Sound pass — replace with your real frame' },
    ],
  },
  {
    id: 'video-visual',
    slug: 'video-selects',
    title: 'Motion & Edit Selects',
    client: 'Visual work',
    discipline: 'video-editing',
    kind: 'visual',
    year: '2024',
    placeholder: true,
    role: 'Video Editing',
    tags: ['Motion', 'Edits'],
    summary:
      'A selection of stills and motion frames across the editing work.',
    intro:
      'Frames pulled from live edits, showing pacing, composition and grade across formats.',
    approach: [],
    outcome: '',
    metrics: [],
    gallery: [
      { label: 'Opening frame — replace with your real frame' },
      { label: 'Mid-cut frame — replace with your real frame', dark: true },
      { label: 'Product hold — replace with your real frame' },
      { label: 'Caption frame — replace with your real frame' },
      { label: 'End card — replace with your real frame' },
      { label: 'Colour pass — replace with your real frame' },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* CAMPAIGN CONCEPTING                                                */
  /* ------------------------------------------------------------------ */
  {
    id: 'new-concept-campaign',
    slug: 'new-campaign-concept',
    title: 'New Campaign Concept',
    client: 'Concept',
    discipline: 'campaign-concepting',
    kind: 'case-study',
    year: '2025',
    placeholder: true,
    role: 'Campaign Concepting',
    tags: ['New Concept', 'Platform', 'Channels'],
    summary:
      'A repeatable campaign platform built around one idea, with the channel plan that carries it.',
    intro:
      'A new campaign concept starts with a single thought that can survive being repeated in six formats by six different people.',
    challenge:
      'The brand had activity but no platform — a new brief every month, no thread connecting them.',
    approach: [
      'Found the one tension in the category that the brand could credibly own.',
      'Built the platform, then the message hierarchy beneath it.',
      'Mapped the platform across channels so each format had a job.',
      'Wrote the asset matrix with copy direction per asset.',
    ],
    outcome:
      'A campaign platform the team could extend, plus the channel plan and asset matrix needed to run it.',
    metrics: [],
    gallery: [
      { label: 'Core idea board — replace with your real board' },
      { label: 'Message hierarchy — replace with your real board', dark: true },
      { label: 'Channel matrix — replace with your real board' },
      { label: 'Key visual — replace with your real artwork' },
    ],
  },
  {
    id: 'relaunch-campaign',
    slug: 'relaunch-campaign',
    title: 'Relaunch Campaign',
    client: 'Concept',
    discipline: 'campaign-concepting',
    kind: 'case-study',
    year: '2025',
    placeholder: true,
    role: 'Campaign Concepting',
    tags: ['Relaunch', 'Rollout', 'Announcement'],
    summary:
      'Reintroducing something the audience already knew — without boring them.',
    intro:
      'A relaunch is a second chance, not a repeat. The work is convincing people the thing has genuinely changed, which means the campaign has to show the change rather than claim it.',
    challenge:
      'The audience had seen the brand before and had a fixed, slightly stale impression of it.',
    approach: [
      'Identified exactly which perception needed to shift.',
      'Built the relaunch platform around proof of the change.',
      'Sequenced the rollout — announcement, demonstration, proof, sustain.',
      'Directed the launch assets and wrote the copy for each beat.',
    ],
    outcome: '',
    metrics: [],
    gallery: [
      { label: 'Relaunch platform — replace with your real board' },
      { label: 'Rollout sequence — replace with your real board', dark: true },
      { label: 'Announcement asset — replace with your real artwork' },
      { label: 'Proof asset — replace with your real artwork' },
    ],
  },
  {
    id: 'festive-campaign',
    slug: 'festive-campaign',
    title: 'Festive Campaign',
    client: 'Concept',
    discipline: 'campaign-concepting',
    kind: 'case-study',
    year: '2025',
    placeholder: true,
    role: 'Campaign Concepting',
    tags: ['Festive', 'Seasonal', 'Social'],
    summary:
      'Seasonal work that sounds like the brand instead of like a greeting card.',
    intro:
      'Every brand does festive. The ones that stand out treat the festival as a real cultural moment with its own rhythm and humour, rather than a backdrop to swap the colour palette.',
    challenge:
      'The category was saturated with festive creative, and generic seasonal messaging disappeared.',
    approach: [
      'Found the connection between the festival and what the brand genuinely does.',
      'Built a visual world specific to the season.',
      'Produced a social-first asset set built for sharing.',
      'Wrote copy with a distinct voice rather than festive stock phrases.',
    ],
    outcome: '',
    metrics: [],
    gallery: [
      { label: 'Festive world — replace with your real artwork' },
      { label: 'Social asset set — replace with your real artwork', dark: true },
      { label: 'Key visual — replace with your real artwork' },
      { label: 'Copy lines — replace with your real copy' },
    ],
  },
  {
    id: 'product-launch-campaign',
    slug: 'product-launch-campaign',
    title: 'Product Launch Campaign',
    client: 'Travelxp',
    discipline: 'campaign-concepting',
    kind: 'case-study',
    year: '2026',
    placeholder: false,
    role: 'Content Marketing Executive',
    tags: ['Launch', 'Full Funnel', 'Film'],
    summary:
      'A full-lifecycle launch built around how users discover, engage and enter the brand ecosystem.',
    intro:
      'A launch campaign has to work for the person who has never heard of you and the person who has been watching. Same idea, different entry points.',
    challenge:
      'The new product had to be understood quickly, believed in, and acted on within a short window.',
    approach: [
      'Structured the campaign around the discovery, engagement and entry journey.',
      'Built awareness, consideration and conversion messaging layers.',
      'Produced the launch film and cut it into platform formats.',
      'Set up the measurement framework before the campaign went live.',
    ],
    outcome:
      'Delivered an end-to-end product launch campaign with the launch film as a central asset, structured around contextual discovery and engagement.',
    metrics: [
      { value: 'Full funnel', label: 'Campaign scope' },
      { value: 'Launch film', label: 'Hero asset' },
      { value: 'Multi', label: 'Channels' },
    ],
    gallery: [
      { label: 'Launch platform — replace with your real board' },
      { label: 'Funnel structure — replace with your real board', dark: true },
      { label: 'Key visual — replace with your real artwork' },
      { label: 'Launch film frame — replace with your real frame' },
    ],
  },
  {
    id: 'campaign-process',
    slug: 'campaign-concepting-workflow',
    title: 'How a Concept Gets Approved',
    client: 'Method',
    discipline: 'campaign-concepting',
    kind: 'process',
    year: '2024',
    placeholder: true,
    role: 'Campaign Concepting',
    tags: ['Process', 'Concept'],
    summary:
      'Three territories, one recommendation, and the reasoning that wins the room.',
    intro:
      'Presenting three good ideas helps nobody decide. Presenting three territories with a clear recommendation does.',
    approach: [
      'Define the strategic tension the campaign has to resolve.',
      'Develop three genuinely different territories, not three aesthetics.',
      'Test each against the channel realities and the production budget.',
      'Recommend one, with the reasoning stated plainly.',
    ],
    outcome: '',
    metrics: [],
    gallery: [
      { label: 'Territory board — replace with your real board', dark: true },
      { label: 'Evaluation matrix — replace with your real board' },
    ],
  },
  {
    id: 'campaign-visual',
    slug: 'campaign-visuals',
    title: 'Campaign Visual Selects',
    client: 'Visual work',
    discipline: 'campaign-concepting',
    kind: 'visual',
    year: '2024',
    placeholder: true,
    role: 'Campaign Concepting',
    tags: ['Key Visuals', 'Assets'],
    summary:
      'Key visuals and asset sets from launch, relaunch and festive work.',
    intro:
      'A look across the campaign visual language — the frames that carried each idea.',
    approach: [],
    outcome: '',
    metrics: [],
    gallery: [
      { label: 'Key visual — replace with your real artwork' },
      { label: 'Asset set — replace with your real artwork', dark: true },
      { label: 'Social crop — replace with your real artwork' },
      { label: 'Out-of-home mock — replace with your real artwork' },
      { label: 'Print layout — replace with your real artwork' },
      { label: 'Motion still — replace with your real artwork' },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* PITCH DECKS                                                        */
  /* ------------------------------------------------------------------ */
  {
    id: 'client-pitch-deck',
    slug: 'client-pitch-deck',
    title: 'Client Pitch Deck',
    client: 'Pitch',
    discipline: 'pitch-decks',
    kind: 'case-study',
    year: '2025',
    placeholder: true,
    role: 'Pitch Deck Creation',
    tags: ['Narrative', 'Design', 'Presentation'],
    summary:
      'A client pitch that leads with the answer instead of burying it under an agenda.',
    intro:
      'Most decks are written for the presenter. The best ones are written for the reader who skims in the car park before the meeting. This one was built for the skimmer, then made presentable live.',
    challenge:
      'The pitch had to cover a lot of ground without losing the argument in the middle.',
    approach: [
      'Built the storyline before touching a layout — one line per slide, no exceptions.',
      'Designed for skimming: strong hierarchy, one idea per frame, no text walls.',
      'Turned data into simple visual arguments rather than reference tables.',
      'Wrote speaker notes and a delivery script to go with it.',
    ],
    outcome: '',
    metrics: [],
    gallery: [
      { label: 'Cover — replace with your real slide' },
      { label: 'Storyline structure — replace with your real slide', dark: true },
      { label: 'Data slide — replace with your real slide' },
      { label: 'Closing slide — replace with your real slide' },
    ],
  },
  {
    id: 'investor-deck',
    slug: 'investor-deck',
    title: 'Investor Deck',
    client: 'Pitch',
    discipline: 'pitch-decks',
    kind: 'case-study',
    year: '2025',
    placeholder: true,
    role: 'Pitch Deck Creation',
    tags: ['Investor', 'Data', 'Narrative'],
    summary:
      'An investor deck structured around traction, unit economics and the market, in that order of argument.',
    intro:
      'Investors are testing one thing: is this a business or an idea. The deck has to answer that in the first sixty seconds and then hold up under detail.',
    challenge:
      'Strong material, badly sequenced — the traction was on slide fourteen and the market argument was buried.',
    approach: [
      'Reordered the narrative so traction and market lead.',
      'Built a clear market slide with sized, sourced numbers.',
      'Simplified the unit economics into a chart that survives ten seconds of looking.',
      'Produced a print-ready and screen-ready version.',
    ],
    outcome: '',
    metrics: [],
    gallery: [
      { label: 'Opening spread — replace with your real slide' },
      { label: 'Traction chart — replace with your real slide', dark: true },
      { label: 'Market sizing — replace with your real slide' },
      { label: 'Economics slide — replace with your real slide' },
    ],
  },
  {
    id: 'deck-process',
    slug: 'deck-build-process',
    title: 'How I Build a Deck',
    client: 'Method',
    discipline: 'pitch-decks',
    kind: 'process',
    year: '2024',
    placeholder: true,
    role: 'Pitch Deck Creation',
    tags: ['Process', 'Storytelling'],
    summary:
      'The sequence that turns raw material into a deck people remember.',
    intro:
      'Deck work is editorial work. The design comes after the argument, and the argument comes after the raw material.',
    approach: [
      'Collect every raw asset, number and claim into one document.',
      'Write the one-sentence argument the deck has to make.',
      'Storyboard it — one line per slide, no layouts yet.',
      'Design only after the structure survives the read-through.',
    ],
    outcome: '',
    metrics: [],
    gallery: [
      { label: 'Storyboard grid — replace with your real board', dark: true },
      { label: 'Slide rhythm — replace with your real board' },
    ],
  },
  {
    id: 'deck-visual',
    slug: 'deck-page-designs',
    title: 'Deck Page Designs',
    client: 'Visual work',
    discipline: 'pitch-decks',
    kind: 'visual',
    year: '2024',
    placeholder: true,
    role: 'Pitch Deck Creation',
    tags: ['Slides', 'Layout'],
    summary:
      'Individual slide layouts and the visual system behind them.',
    intro:
      'A sampling of slide layouts across pitch work — cover, narrative, data and closing.',
    approach: [],
    outcome: '',
    metrics: [],
    gallery: [
      { label: 'Cover layout — replace with your real slide' },
      { label: 'Section divider — replace with your real slide', dark: true },
      { label: 'Two-column layout — replace with your real slide' },
      { label: 'Chart layout — replace with your real slide' },
      { label: 'Quote layout — replace with your real slide' },
      { label: 'Closing layout — replace with your real slide' },
    ],
  },
]

/** Group projects by discipline slug for the /work index. */
export function projectsByDiscipline(slug) {
  return projects.filter((p) => p.discipline === slug)
}

export function projectBySlug(slug) {
  return projects.find((p) => p.slug === slug)
}

/** Counts used for the category cards on /work. */
export function disciplineCounts() {
  return projects.reduce((acc, p) => {
    acc[p.discipline] = (acc[p.discipline] || 0) + 1
    return acc
  }, {})
}
