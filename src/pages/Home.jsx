import { Link } from 'react-router-dom'
import { disciplines, site } from '../data/site'
import { projects } from '../data/projects'
import { Eyebrow, Marquee, Scribble, Sticker, Tape } from '../components/Primitives'
import { Reveal } from '../components/Reveal'
import { ProjectCard } from '../components/ProjectCard'
import { ContactForm } from '../components/ContactForm'

const HERO_TICKER = [
  'Brand Strategy',
  'Graphic Design',
  'Art Direction',
  'Copywriting',
  'Video Editing',
  'Campaigns',
  'Pitch Decks',
]

export function Home() {
  const featured = projects.filter((p) => !p.placeholder).slice(0, 3)

  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__halftone" aria-hidden="true" />
        <div className="hero__shape hero__shape--a" aria-hidden="true" data-parallax="0.18" />
        <div className="hero__shape hero__shape--b" aria-hidden="true" data-parallax="0.1" />

        <div className="container container--xl hero__inner">
          <div className="hero__meta">
            <Reveal>
              <Sticker variant="lime">{site.location}</Sticker>
            </Reveal>
            <Reveal delay={120}>
              <p className="hero__availability">
                <span className="hero__dot" aria-hidden="true" />
                Available for freelance &amp; full-time roles
              </p>
            </Reveal>
          </div>

          <h1 className="hero__title" id="hero-title">
            <Reveal variant="wipe" as="span" className="hero__line">
              Creative &amp;
            </Reveal>
            <Reveal variant="wipe" as="span" className="hero__line" delay={110}>
              Brand
            </Reveal>
            <Reveal variant="wipe" as="span" className="hero__line hero__line--accent" delay={220}>
              <Scribble>Strategist</Scribble>
            </Reveal>
          </h1>

          <div className="hero__body">
            <Reveal delay={300}>
              <p className="hero__lede">
                I build brands that pull their weight — from positioning and identity through to
                the campaign, the copy, the film and the deck that sells it. Strategy and craft in
                the same head, so the idea survives the handover.
              </p>
            </Reveal>

            <Reveal delay={400} className="hero__actions">
              <Link className="btn btn--accent" to="/whats-next">
                Start a project <span className="btn__arrow" aria-hidden="true">&rarr;</span>
              </Link>
              <Link className="btn btn--ghost" to="/work">
                See the work
              </Link>
            </Reveal>
          </div>

          <Reveal delay={520} className="hero__stats">
            <ul className="stats stats--inline">
              <li className="stat">
                <span className="stat__value">₹21.5L+</span>
                <span className="stat__label">Revenue generated</span>
              </li>
              <li className="stat">
                <span className="stat__value">240%</span>
                <span className="stat__label">Organic reach growth</span>
              </li>
              <li className="stat">
                <span className="stat__value">4.5%+</span>
                <span className="stat__label">Campaign CTR</span>
              </li>
              <li className="stat">
                <span className="stat__value">8.5</span>
                <span className="stat__label">CGPA, Mithibai</span>
              </li>
            </ul>
          </Reveal>
        </div>

        <div className="hero__ticker" aria-hidden="true">
          <Marquee items={HERO_TICKER} light fast />
        </div>
      </section>

      {/* ======================== WHO AM I (preview) ==================== */}
      <section className="section" aria-labelledby="who-title">
        <div className="container">
          <div className="split split--wide-right split--sticky-right">
            <div>
              <Reveal>
                <Eyebrow accent>01 — Who Am I</Eyebrow>
              </Reveal>
              <Reveal delay={90}>
                <h2 className="section__title" id="who-title">
                  A strategist who designs, and a designer who <Scribble>measures.</Scribble>
                </h2>
              </Reveal>
            </div>

            <div>
              <Reveal delay={150}>
                <p className="section__lede">
                  I&rsquo;m Akshara — a brand strategist and designer in Mumbai. I work at the seam
                  where a brand&rsquo;s thinking meets the thing a customer actually sees.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <p style={{ marginTop: '1.25rem', color: 'var(--ink-soft)' }}>
                  Most of my work starts with the same question: <em>why isn&rsquo;t this working?</em>{' '}
                  Sometimes the answer is the product. Sometimes it is the offer. Sometimes it is that
                  nobody ever wrote down what the brand actually stands for. My job is to find out
                  which one it is, and then build the answer.
                </p>
              </Reveal>
              <Reveal delay={290}>
                <p style={{ marginTop: '1.25rem', color: 'var(--ink-soft)' }}>
                  That means the work spans brand analysis, identity, campaigns, copy, direction and
                  video — not because I collect disciplines, but because a campaign only works when
                  all of them are pulling in the same direction.
                </p>
              </Reveal>

              <Reveal delay={360} className="who__credentials">
                <ul className="checklist">
                  <li>BA Multimedia &amp; Mass Communication, Mithibai College — 8.5 CGPA</li>
                  <li>ISC Arts topper — 92%</li>
                  <li>Photoshop, Illustrator, Premiere Pro, InDesign, Figma</li>
                  <li>MoEngage, Amplitude, Shopify, GA4, Meta Business Suite</li>
                </ul>
              </Reveal>

              <Reveal delay={430}>
                <Link className="btn btn--ghost" to="/who-am-i" style={{ marginTop: '2rem' }}>
                  More about me <span className="btn__arrow" aria-hidden="true">&rarr;</span>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= WHY YOU NEED ME ======================== */}
      <section className="section section--tight on-ink torn-edge torn-edge--top" aria-labelledby="why-title">
        <div className="container">
          <div className="section__head">
            <Reveal>
              <Eyebrow light>02 — Why You Need Me</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="section__title" id="why-title">
                Four reasons this stops being a side project
              </h2>
            </Reveal>
          </div>

          <div className="why-grid stagger">
            {[
              {
                n: '01',
                t: 'The brief is usually wrong',
                b: 'Most calls start with a symptom — the ads are not converting, the launch flopped, the brand feels dated. The first job is finding the real cause, which is usually upstream of what you asked for.',
              },
              {
                n: '02',
                t: 'One person, whole chain',
                b: 'Strategy, design, copy and direction without a relay race. The hook in the ad, the layout that carries it and the deck that pitches it are all the same idea, not three freelancers agreeing by email.',
              },
              {
                n: '03',
                t: 'It has to perform, not just look good',
                b: 'I read the funnel. Every creative decision gets a benchmark and a reason, and the work is judged against behaviour rather than taste.',
              },
              {
                n: '04',
                t: 'You get something you can keep using',
                b: 'Files, templates, guidelines and a handover that means the work still looks right six months later when somebody else is running it.',
              },
            ].map((item, index) => (
              <Reveal key={item.n} as="article" className="why-card" index={index}>
                <span className="why-card__number">{item.n}</span>
                <h3 className="why-card__title">{item.t}</h3>
                <p className="why-card__body">{item.b}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <p style={{ marginTop: '2.5rem' }}>
              <Link className="btn btn--lime" to="/why-you-need-me">
                See the full breakdown <span className="btn__arrow" aria-hidden="true">&rarr;</span>
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ======================== WORK PREVIEW ========================== */}
      <section className="section" aria-labelledby="work-title">
        <div className="container">
          <div className="section__head">
            <Reveal>
              <Eyebrow accent>Selected work</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="section__title" id="work-title">
                Browse by discipline, not by grid
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="section__lede">
                Every discipline gets its own room here — strategy, design, direction, copy, video,
                campaigns and decks. Pick the one closest to what you need.
              </p>
            </Reveal>
          </div>

          <div className="discipline-grid stagger">
            {disciplines.map((discipline, index) => (
              <Reveal key={discipline.slug} as="article" index={index}>
                <Link className={`discipline-card discipline-card--${discipline.accent}`} to={`/work/${discipline.slug}`}>
                  <span className="discipline-card__index">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="discipline-card__title">{discipline.name}</h3>
                  <p className="discipline-card__body">{discipline.blurb}</p>
                  <span className="discipline-card__cta">
                    Enter <span className="btn__arrow" aria-hidden="true">&rarr;</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="section__head" style={{ marginTop: '4rem' }}>
            <Reveal>
              <Eyebrow accent>Featured case studies</Eyebrow>
            </Reveal>
          </div>

          <div className="card-grid card-grid--3 stagger">
            {featured.map((project, index) => (
              <Reveal key={project.id} index={index}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={140} style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link className="btn" to="/work">
              All the work <span className="btn__arrow" aria-hidden="true">&rarr;</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ==================== WHAT CAN I DO FOR YOU ===================== */}
      <section className="section section--tight" aria-labelledby="can-title">
        <div className="container">
          <div className="split">
            <div>
              <Reveal>
                <Eyebrow accent>04 — What Can I Do For You</Eyebrow>
              </Reveal>
              <Reveal delay={90}>
                <h2 className="section__title" id="can-title">
                  Seven ways in, one brain doing the work
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="section__lede" style={{ marginTop: '1rem' }}>
                  Take one, take several, or hand me the messy version and let me scope it. These
                  are the pieces I have delivered for real.
                </p>
              </Reveal>
              <Reveal delay={230}>
                <Link className="btn btn--ghost" to="/what-can-i-do" style={{ marginTop: '1.75rem' }}>
                  Everything I do <span className="btn__arrow" aria-hidden="true">&rarr;</span>
                </Link>
              </Reveal>
            </div>

            <ul className="numbered">
              {[
                'Brand Strategy & Analysis',
                'Graphic Design',
                'Art Direction',
                'Copywriting',
                'Video Editing',
                'Campaign Concepting',
                'Pitch Deck Creation',
              ].map((item, index) => (
                <Reveal as="li" key={item} className="numbered__item" index={index}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--step-1)' }}>
                    {item}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ====================== WHAT'S NEXT (CTA) ======================= */}
      <section className="section on-ink torn-edge torn-edge--top" aria-labelledby="next-title">
        <div className="container">
          <div className="section__head">
            <Reveal>
              <Eyebrow light>06 — What&rsquo;s Next</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="section__title" id="next-title">
                Tell me what you&rsquo;re trying to fix
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="section__lede">
                Start a project, book a call, or just grab the deck. Every route in ends with a
                reply from me — no CRM, no drip sequence.
              </p>
            </Reveal>
          </div>

          <div className="next-grid">
            <Reveal className="next-card">
              <span className="next-card__label">Start a project</span>
              <p>Send the brief. I reply to every enquiry within two working days.</p>
              <Link className="btn btn--accent" to="/whats-next#brief">
                Write the brief <span className="btn__arrow" aria-hidden="true">&rarr;</span>
              </Link>
            </Reveal>

            <Reveal className="next-card" delay={100}>
              <span className="next-card__label">Book a call</span>
              <p>Fifteen minutes, no pitch. Bring the problem, we will work out if I can help.</p>
              <a className="btn btn--ghost" href={`mailto:${site.email}?subject=Call%20request`}>
                Request a call <span className="btn__arrow" aria-hidden="true">&rarr;</span>
              </a>
            </Reveal>

            <Reveal className="next-card" delay={200}>
              <span className="next-card__label">Take the deck</span>
              <p>The condensed version of everything here — cases, services and process in one file.</p>
              <a className="btn btn--ghost" href={site.portfolioPdf.href} download>
                Download PDF <span className="btn__arrow" aria-hidden="true">&darr;</span>
              </a>
            </Reveal>
          </div>

          <div className="next-form" id="brief">
            <Reveal>
              <h3 className="next-form__title">The short version</h3>
            </Reveal>
            <Reveal delay={90}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
