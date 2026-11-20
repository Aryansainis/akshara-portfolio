import { Link } from 'react-router-dom'
import { Eyebrow, Scribble } from '../components/Primitives'
import { Reveal } from '../components/Reveal'
import { disciplines } from '../data/site'

export function NotFound() {
  return (
    <section className="section not-found">
      <div className="container container--narrow" style={{ textAlign: 'center' }}>
        <Reveal>
          <Eyebrow accent>404</Eyebrow>
        </Reveal>
        <Reveal delay={90}>
          <h1 className="page-hero__title" style={{ maxWidth: 'none' }}>
            This page went
            <Scribble>missing</Scribble>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="section__lede" style={{ margin: '1.25rem auto 0' }}>
            Either the link is wrong or the page moved. Either way, there is plenty of work to
            look at instead.
          </p>
        </Reveal>
        <Reveal delay={230}>
          <p style={{ marginTop: '2rem' }}>
            <Link className="btn btn--accent" to="/">
              Back to the start <span className="btn__arrow" aria-hidden="true">&rarr;</span>
            </Link>
          </p>
        </Reveal>

        <Reveal delay={300}>
          <ul className="other-rooms other-rooms--inline">
            {disciplines.map((item) => (
              <li key={item.slug}>
                <Link className="other-room" to={`/work/${item.slug}`}>
                  {item.name}
                  <span className="btn__arrow" aria-hidden="true">
                    &rarr;
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
