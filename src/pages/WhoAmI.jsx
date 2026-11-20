import { Link } from 'react-router-dom'
import { site } from '../data/site'
import { Eyebrow, Scribble, Sticker } from '../components/Primitives'
import { Reveal } from '../components/Reveal'

const PILLARS = [
  {
    title: 'The analyst',
    body:
      'Brand audits, audience behavioural mapping, segmentation and competitive analysis. I go looking for the reason behind the number rather than admiring it.',
    tags: ['Brand audit', 'Audience mapping', 'Competitive analysis', 'Segmentation'],
  },
  {
    title: 'The maker',
    body:
      'Identity systems, campaign collateral, packaging, social kits and guidelines — built at volume so a small team can keep them consistent.',
    tags: ['Identity refresh', 'Packaging', 'Collateral', 'Guidelines'],
  },
  {
    title: 'The director',
    body:
      'Shoot concepts, reference boards, moodboards, on-set direction and designer briefs. The visual language gets a spine before anyone picks up a camera.',
    tags: ['Art direction', 'Moodboards', 'Shoot concepts', 'Designer briefs'],
  },
  {
    title: 'The writer',
    body:
      'Hooks, ad copy, video scripts, lifecycle email, WhatsApp flows and marketplace listings. Every word argued from the reader&rsquo;s hesitation.',
    tags: ['Hook scripting', 'Ad copy', 'Lifecycle email', 'Landing copy'],
  },
  {
    title: 'The editor',
    body:
      'Reels, ad cutdowns, launch films and finishing. Pacing, sound, captions and grade — cut around one idea.',
    tags: ['Short-form', 'Launch films', 'Ad cutdowns', 'Finishing'],
  },
  {
    title: 'The campaign brain',
    body:
      'New concepts, relaunches, festive work and product launches, each with the platform, the channel plan and the reason it should work.',
    tags: ['New concepts', 'Relaunches', 'Festive', 'Product launches'],
  },
  {
    title: 'The deck builder',
    body:
      'Client and investor decks with the argument first and the design second. Built to be read in the room and to survive the drive home.',
    tags: ['Client pitches', 'Investor decks', 'Narrative', 'Data stories'],
  },
]

const TIMELINE = [
  {
    role: 'Content Marketing Executive',
    company: 'Travelxp',
    period: 'May 2026 – Oct 2026',
    points: [
      'Psychology-driven ad ideation across hotels, flights and activities, mapping audience mindsets to intent-driven moments.',
      'High-impact copy and creative driving campaign CTRs above 4.5% while boosting brand recall.',
      'Journey-stage creative direction — visual references, designer and editor oversight, production direction.',
      'Full-lifecycle brand campaigns and the Marco product launch film.',
      'Ad fatigue and drop-off monitoring through Amplitude and MoEngage, with rapid A/B iteration.',
    ],
  },
  {
    role: 'Marketing & Content Manager',
    company: 'Sacred Grove',
    period: 'Feb 2025 – Apr 2026',
    points: [
      'Targeted WhatsApp campaigns and chatbot integrations generating over ₹21.50 lakh in revenue.',
      'High-conversion email lifecycle funnels, conceptualised and managed end to end.',
      'Omnichannel copy: SEO blogs, high-intent video ad scripts, Meta, Google and marketplace conversion copy.',
      'Organic Instagram reach and community growth scaled by 240% through calendar and visual strategy.',
      'Shopify-based segmentation, behavioural tracking and automated retention journeys.',
      'Full influencer marketing pipeline — outreach, negotiation, briefing, creative QA and tracking.',
    ],
  },
  {
    role: 'Digital Marketing Manager',
    company: 'VerTech India',
    period: 'Agency',
    points: [
      'End-to-end multi-channel digital campaigns combining strategic positioning, SEO and paid media creative.',
      'Design for digital signage and campaign visuals for businesses and tech startups.',
    ],
  },
]

const FREELANCE = [
  {
    role: 'Graphic Designer & Marketing Consultant',
    company: 'The Food Rath',
    points: [
      'Printable collateral, brand assets, packaging and menus.',
      'Digital-to-offline customer acquisition through Zomato and delivery platforms, and the reverse.',
    ],
  },
  {
    role: 'Graphic Designer & Social Media Manager',
    company: 'Teloz Spaces',
    points: [
      'Cohesive visual brand identity from scratch.',
      'High-retention static graphics and short-form Reels to boost brand awareness.',
    ],
  },
  {
    role: 'Brand Marketing Strategy & Design Consultant',
    company: 'For digital startups & new businesses',
    points: ['Strategy and design engagements for early-stage brands and new ventures.'],
  },
]

export function WhoAmI() {
  return (
    <>
      <section className="page-hero">
        <div className="container container--narrow">
          <Reveal>
            <Eyebrow accent>01 — Who Am I</Eyebrow>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="page-hero__title">
              Akshara Saini
              <span className="page-hero__title-sub">
                Creative &amp; Brand Strategist, Mumbai
              </span>
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="page-hero__lede">
              I work on the problems where the brief, the design and the performance are the same
              conversation. Eight years of making things and proving them, split between brand
              studios and the client side of the table.
            </p>
          </Reveal>
          <Reveal delay={250}>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              <Sticker>Strategy</Sticker>
              <Sticker variant="vermilion">Design</Sticker>
              <Sticker>Copy</Sticker>
              <Sticker variant="vermilion">Direction</Sticker>
              <Sticker>Video</Sticker>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--flush-top">
        <div className="container">
          <div className="split split--wide-right">
            <div>
              <Reveal>
                <h2 className="section__title">The short version</h2>
              </Reveal>
            </div>
            <div>
              <Reveal delay={90}>
                <p className="section__lede">
                  A brand strategist and designer who got into the discipline sideways — through
                  mass communication, then through campaigns, then through the numbers those
                  campaigns produced.
                </p>
              </Reveal>
              <Reveal delay={160}>
                <p style={{ marginTop: '1.5rem', color: 'var(--ink-soft)' }}>
                  I studied Multimedia and Mass Communication at Mithibai College, where I got
                  comfortable making things and slightly suspicious of work that only looked good.
                  That suspicion became the method. Every project since has started with the same
                  two questions: what are we trying to change, and how will we know it worked.
                </p>
              </Reveal>
              <Reveal delay={230}>
                <p style={{ marginTop: '1.5rem', color: 'var(--ink-soft)' }}>
                  My work has covered hotels, flights and activities at Travelxp; retention, CRM
                  and influencer campaigns at Sacred Grove; multi-channel digital work at VerTech
                  India; and the good, unglamorous hands-on stuff — packaging, menus, collateral,
                  social systems — with The Food Rath and Teloz Spaces.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <p style={{ marginTop: '1.5rem', color: 'var(--ink-soft)' }}>
                  What I care about is the seam. The point where a good strategy becomes a good
                  layout, where a good layout becomes a good ad, and where a good ad becomes
                  revenue. Most teams lose the thread in one of those transitions. I have built my
                  practice around not losing it.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight on-ink torn-edge torn-edge--top" aria-labelledby="pillars-title">
        <div className="container">
          <div className="section__head">
            <Reveal>
              <Eyebrow light>Seven ways in</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="section__title" id="pillars-title">
                What the job actually involves
              </h2>
            </Reveal>
          </div>

          <div className="pillar-grid stagger">
            {PILLARS.map((pillar, index) => (
              <Reveal key={pillar.title} as="article" className="pillar" index={index}>
                <h3 className="pillar__title">{pillar.title}</h3>
                <p className="pillar__body">{pillar.body}</p>
                <ul className="pillar__tags">
                  {pillar.tags.map((tag) => (
                    <li key={tag} className="tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="exp-title">
        <div className="container">
          <div className="section__head">
            <Reveal>
              <Eyebrow accent>Experience</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="section__title" id="exp-title">
                Where I have done this
              </h2>
            </Reveal>
          </div>

          <ol className="timeline">
            {TIMELINE.map((item, index) => (
              <Reveal as="li" key={item.company} className="timeline__item" index={index}>
                <div className="timeline__marker" aria-hidden="true" />
                <p className="timeline__period">{item.period}</p>
                <h3 className="timeline__role">{item.role}</h3>
                <p className="timeline__company">{item.company}</p>
                <ul className="timeline__points">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>

          <h3 className="section__title" style={{ marginTop: '4rem', fontSize: 'var(--step-2)' }}>
            Freelance, since 2023
          </h3>
          <ol className="timeline" style={{ marginTop: '1.5rem' }}>
            {FREELANCE.map((item, index) => (
              <Reveal as="li" key={item.company} className="timeline__item" index={index}>
                <div className="timeline__marker" aria-hidden="true" />
                <h3 className="timeline__role">{item.role}</h3>
                <p className="timeline__company">{item.company}</p>
                <ul className="timeline__points">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="edu-title">
        <div className="container">
          <div className="split">
            <div>
              <Reveal>
                <Eyebrow accent>Education</Eyebrow>
              </Reveal>
              <Reveal delay={90}>
                <h2 className="section__title" id="edu-title">
                  Where the instincts came from
                </h2>
              </Reveal>
            </div>
            <div>
              <Reveal delay={150}>
                <div className="edu-card">
                  <h3 className="edu-card__title">Bachelor of Arts, Multimedia &amp; Mass Communication</h3>
                  <p className="edu-card__meta">Mithibai College of Arts, Mumbai · 8.5 CGPA · 2023 – 2026</p>
                  <p className="edu-card__body">
                    Film, design, communication theory and the uncomfortable practice of explaining
                    an idea out loud. Most of the way I think about narrative came from here.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={220}>
                <div className="edu-card">
                  <h3 className="edu-card__title">Humanities, ISC Arts</h3>
                  <p className="edu-card__meta">Gokuldham High School &amp; Junior College · 92% · 2021 – 2023</p>
                  <p className="edu-card__body">
                    A topper&rsquo;s habit of structure, argument and revision, which turned out to be
                    exactly what a brief needs.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight on-ink torn-edge torn-edge--top">
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <Reveal>
            <Eyebrow light accent>Next</Eyebrow>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="section__title" style={{ maxWidth: 'none' }}>
              Sounds like your kind of problem?
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="section__lede" style={{ margin: '1rem auto 0' }}>
              The quickest way to find out is to send the brief. Or email{' '}
              <a className="link-underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </p>
          </Reveal>
          <Reveal delay={230}>
            <Link className="btn btn--accent" to="/whats-next" style={{ marginTop: '2rem' }}>
              Let&rsquo;s talk <span className="btn__arrow" aria-hidden="true">&rarr;</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
