import { Link } from 'react-router-dom'
import { differentiators } from '../data/content'
import { Eyebrow, Scribble } from '../components/Primitives'
import { Reveal } from '../components/Reveal'

const COMPARISON = [
  {
    dimension: 'Strategy',
    others: 'A deck that describes the brand and stops there.',
    akshara: 'A decision about who the brand is for and what it should do about it.',
  },
  {
    dimension: 'Creative',
    others: 'Work that wins an internal review.',
    akshara: 'Work judged against a benchmark agreed before it was made.',
  },
  {
    dimension: 'Copy',
    others: 'Whatever fits in the layout.',
    akshara: 'Written first, argued from the reader&rsquo;s hesitation, then designed around.',
  },
  {
    dimension: 'Measurement',
    others: 'A report after the campaign has finished.',
    akshara: 'Benchmarks set before launch, read during, and fed back into the next iteration.',
  },
  {
    dimension: 'Handover',
    others: 'Final files in a folder.',
    akshara: 'Templates, guidelines, asset matrices and a team that can run it without me.',
  },
  {
    dimension: 'Access',
    others: 'An account manager relaying your questions.',
    akshara: 'The person doing the thinking, on the thread, in the room.',
  },
]

const PRINCIPLES = [
  {
    title: 'Say the uncomfortable thing early',
    body:
      'If the brief is wrong, the sooner that gets said the less gets wasted. I would rather lose a project in week one than deliver something polished that solves the wrong problem in month three.',
  },
  {
    title: 'Show the reasoning, not just the outcome',
    body:
      'Every decision comes with the reason behind it. That is what lets a team apply it to a situation I never saw, and it is what makes the work survive me leaving.',
  },
  {
    title: 'Details are not decoration',
    body:
      'The caption on the ad, the crop on the cover, the second line of the email subject. These are not finishing touches. They are usually where the difference is.',
  },
  {
    title: 'Craft is the argument',
    body:
      'A good concept executed sloppily reads as a bad concept. I care about the finish for the obvious reason — and because the finish is often the only signal a busy audience will give you.',
  },
]

export function WhatsDifferent() {
  return (
    <>
      <section className="page-hero">
        <div className="container container--narrow">
          <Reveal>
            <Eyebrow accent>03 — What&rsquo;s So Different About Me</Eyebrow>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="page-hero__title">
              Different, but
              <Scribble>specific</Scribble>
              <span className="page-hero__title-sub">
                Not a personality. Six structural differences that change the outcome.
              </span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="section section--flush-top">
        <div className="container">
          <div className="diff-grid stagger">
            {differentiators.map((item, index) => (
              <Reveal key={item.title} as="article" className="diff" index={index}>
                <span className="diff__marker">{item.marker}</span>
                <h2 className="diff__title">{item.title}</h2>
                <p className="diff__body">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight on-ink torn-edge torn-edge--top" aria-labelledby="compare-title">
        <div className="container">
          <div className="section__head">
            <Reveal>
              <Eyebrow light>Straight comparison</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="section__title" id="compare-title">
                The usual way, versus this way
              </h2>
            </Reveal>
          </div>

          <div className="compare" role="table" aria-label="Comparison of typical approach versus this approach">
            <div className="compare__head" role="row">
              <span role="columnheader">Dimension</span>
              <span role="columnheader">The usual way</span>
              <span role="columnheader">How I work</span>
            </div>
            {COMPARISON.map((row, index) => (
              <Reveal key={row.dimension} className="compare__row" role="row" index={index}>
                <span role="cell" className="compare__dimension">
                  {row.dimension}
                </span>
                <span role="cell" className="compare__other">
                  {row.others}
                </span>
                <span role="cell" className="compare__mine">
                  {row.akshara}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="principles-title">
        <div className="container">
          <div className="split">
            <div>
              <Reveal>
                <Eyebrow accent>How I work</Eyebrow>
              </Reveal>
              <Reveal delay={90}>
                <h2 className="section__title" id="principles-title">
                  Four rules I do not bend
                </h2>
              </Reveal>
            </div>
            <ol className="numbered">
              {PRINCIPLES.map((item, index) => (
                <Reveal as="li" key={item.title} className="numbered__item" index={index}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--step-1)' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--ink-soft)', marginTop: '0.35rem' }}>{item.body}</p>
                </Reveal>
              ))}
            </ol>
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
              The difference only shows up once we start.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ marginTop: '1.75rem' }}>
              <Link className="btn btn--lime" to="/whats-next">
                Tell me the problem <span className="btn__arrow" aria-hidden="true">&rarr;</span>
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
