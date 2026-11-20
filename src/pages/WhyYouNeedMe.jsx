import { Link } from 'react-router-dom'
import { Eyebrow, Scribble, Sticker } from '../components/Primitives'
import { Reveal } from '../components/Reveal'

const REASONS = [
  {
    n: '01',
    headline: 'Your problem is not a design problem',
    body:
      'Most briefs arrive with the symptom attached: the ads stopped converting, the launch underperformed, the brand looks dated. Design is often the last thing that needs fixing, and changing it first burns the budget without moving the number.',
    detail:
      'I start by separating what is actually wrong from what is being asked for. Sometimes it is the audience. Sometimes it is the offer. Sometimes it is that nobody wrote down what the brand stands for. Getting this wrong is expensive, which is why it happens first.',
    proof: 'Audience mapping · Audit · Competitive analysis',
  },
  {
    n: '02',
    headline: 'The idea keeps getting lost between people',
    body:
      'Strategy lands in a deck. The deck gets summarised. The summary reaches a designer. The design comes back and something essential has been edited out — usually the one sentence that made the whole thing work.',
    detail:
      'Working across all of it myself removes the translation loss. The positioning, the layout, the hook and the film cut are all argued from the same reasoning, so the thing you approve in the strategy is the thing that ships.',
    proof: 'Strategy · Design · Copy · Direction · Edit',
  },
  {
    n: '03',
    headline: 'Creative that cannot be judged is a matter of taste',
    body:
      'A campaign that looks excellent and moves nothing leaves you with no way to decide what to do next. Every round of feedback becomes a matter of personal taste, and everybody loses.',
    detail:
      'I set the benchmark before the work starts, then judge what came back against it. CTR, conversion, retention, recall — whichever matters for the brief. That gives the review a spine, and it makes the next round obvious instead of speculative.',
    proof: 'Measurement · A/B iteration · Funnel read',
  },
  {
    n: '04',
    headline: 'You need a system, not a one-off',
    body:
      'A single beautiful asset solves one week. The real problem is that the fourth Thursday of the month still needs a post, and the intern is handling it, and the brand should not look like that.',
    detail:
      'Everything I deliver is built to be repeated: templates, guidelines, asset matrices and a handover that survives someone else taking over. The measure of good work is how it looks six months later when I am not in the room.',
    proof: 'Templates · Guidelines · Handover',
  },
  {
    n: '05',
    headline: 'You need speed without the scramble',
    body:
      'Agencies give you range and a three-week silence. Freelancers give you speed and a narrow lane. Small studios give you both and then take on someone else at the same time.',
    detail:
      'You work directly with the person doing the thinking and the making. No account manager, no handoff, no waiting to find out where the project is. That matters most when the deadline is the reason you called.',
    proof: 'Direct contact · Full range',
  },
  {
    n: '06',
    headline: 'The brand has to survive the relaunch',
    body:
      'Campaigns get relaunched, strategies get refreshed, and the identity often gets rebuilt from scratch each time. The cost is not the money — it is losing the recognition you spent years building.',
    detail:
      'Because I work on strategy, identity and campaign at the same time, the refresh is designed as a continuation. The brand can change substantially and still read as the same brand to someone who has known it for three years.',
    proof: 'Identity refresh · Campaign continuity',
  },
]

const AUDIENCES = [
  {
    title: 'Founders & new ventures',
    body:
      'You need a brand, a pitch deck and a launch campaign that are all telling the same story to investors and customers. That consistency is the whole game right now.',
  },
  {
    title: 'Growing consumer brands',
    body:
      'Acquisition is working but retention is not. You need the strategy, the lifecycle journeys and the creative that makes a second purchase the obvious thing to do.',
  },
  {
    title: 'Agencies & studios',
    body:
      'You need a specialist in a specific part of the pipeline — art direction on a shoot, editing on a batch, a deck that has to land on Thursday. I slot in without needing a full crew.',
  },
  {
    title: 'Teams hiring in-house',
    body:
      'You want someone who can hold strategy and craft, push back with a reason, and understand that the deliverable has to survive the handover. That is the profile I am built for.',
  },
]

export function WhyYouNeedMe() {
  return (
    <>
      <section className="page-hero">
        <div className="container container--narrow">
          <Reveal>
            <Eyebrow accent>02 — Why You Need Me</Eyebrow>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="page-hero__title">
              Six reasons this
              <Scribble>stops</Scribble>
              <span className="page-hero__title-sub">being a side project</span>
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="page-hero__lede">
              Not a pitch. The honest version of where a strategist-designer earns their fee
              against an agency, a freelancer, or doing it all yourself.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--flush-top">
        <div className="container">
          <ol className="reasons">
            {REASONS.map((reason, index) => (
              <Reveal as="li" key={reason.n} className="reason" index={index}>
                <div className="reason__number" aria-hidden="true">
                  {reason.n}
                </div>
                <div className="reason__body">
                  <h2 className="reason__headline">{reason.headline}</h2>
                  <p className="reason__lead">{reason.body}</p>
                  <p className="reason__detail">{reason.detail}</p>
                  <ul className="reason__proof">
                    {reason.proof.split(' · ').map((item) => (
                      <li key={item} className="tag">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--tight on-ink torn-edge torn-edge--top" aria-labelledby="who-its-for">
        <div className="container">
          <div className="section__head">
            <Reveal>
              <Eyebrow light>Who this is for</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="section__title" id="who-its-for">
                Where I am most useful
              </h2>
            </Reveal>
          </div>

          <div className="card-grid card-grid--2 stagger">
            {AUDIENCES.map((item, index) => (
              <Reveal key={item.title} as="article" className="card card--dark" index={index}>
                <h3 className="card__title">{item.title}</h3>
                <p className="card__body">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <Reveal>
            <Sticker variant="vermilion">The short answer</Sticker>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="section__title" style={{ maxWidth: 'none' }}>
              You need someone who can hold the whole chain and still be accountable for the
              number at the end.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ marginTop: '1.75rem' }}>
              <Link className="btn btn--accent" to="/whats-next">
                Start a project <span className="btn__arrow" aria-hidden="true">&rarr;</span>
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
