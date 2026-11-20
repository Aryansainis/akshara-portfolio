import { Link } from 'react-router-dom'
import { process, services } from '../data/content'
import { Eyebrow, Scribble } from '../components/Primitives'
import { Reveal } from '../components/Reveal'

export function WhatCanIDo() {
  return (
    <>
      <section className="page-hero">
        <div className="container container--narrow">
          <Reveal>
            <Eyebrow accent>04 — What Can I Do For You</Eyebrow>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="page-hero__title">
              Seven services,
              <Scribble>one</Scribble>
              <span className="page-hero__title-sub">
                Each one available on its own, or combined into one engagement.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="page-hero__lede">
              Pick the room you need. Most projects end up using two or three — and the ones that
              get the best results combine a service from the top of the list with one from the
              bottom.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--flush-top">
        <div className="container">
          <div className="service-list">
            {services.map((service, index) => (
              <Reveal
                key={service.slug}
                className={`service ${index % 2 === 1 ? 'service--flip' : ''}`}
                index={index % 2}
              >
                <div className="service__head">
                  <span className="service__number">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h2 className="service__title">{service.title}</h2>
                    <p className="service__tagline">{service.tagline}</p>
                  </div>
                </div>

                <p className="service__summary">{service.summary}</p>

                <div className="service__cols">
                  <div>
                    <h3 className="service__sub">What you get</h3>
                    <ul className="checklist">
                      {service.deliverables.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="service__sub">Best fit</h3>
                    <p className="service__fit">{service.forWho}</p>
                    <Link className="btn btn--ghost" to={`/work/${service.slug}`}>
                      See related work <span className="btn__arrow" aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight on-ink torn-edge torn-edge--top" aria-labelledby="process-title">
        <div className="container">
          <div className="section__head">
            <Reveal>
              <Eyebrow light>How I approach a brief</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="section__title" id="process-title">
                Six phases, in this order, every time
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="section__lede">
                The order is the method. Skipping the front of it is how projects go wrong
                expensively.
              </p>
            </Reveal>
          </div>

          <ol className="process">
            {process.map((phase, index) => (
              <Reveal as="li" key={phase.number} className="process__step" index={index}>
                <span className="process__number">{phase.number}</span>
                <div className="process__body">
                  <p className="process__duration">{phase.duration}</p>
                  <h3 className="process__title">{phase.title}</h3>
                  <p className="process__text">{phase.body}</p>
                  <ul className="process__points">
                    {phase.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <Reveal>
            <Eyebrow accent>Next</Eyebrow>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="section__title" style={{ maxWidth: 'none' }}>
              Not sure which one you need? That is a normal place to start.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="section__lede" style={{ margin: '1rem auto 0' }}>
              Describe the problem and I will tell you what it actually needs — including when the
              answer is that you do not need me for that part.
            </p>
          </Reveal>
          <Reveal delay={230}>
            <Link className="btn btn--accent" to="/whats-next" style={{ marginTop: '2rem' }}>
              Describe the problem <span className="btn__arrow" aria-hidden="true">&rarr;</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
