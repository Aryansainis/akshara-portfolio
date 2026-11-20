import { Link, Navigate, useParams } from 'react-router-dom'
import { disciplineBySlug } from '../data/site'
import { projectBySlug, projects } from '../data/projects'
import { Eyebrow, Scribble, Sticker } from '../components/Primitives'
import { Reveal } from '../components/Reveal'
import { Figure } from '../components/Media'

/**
 * Individual case study. Handles all three content kinds:
 * case-study (full narrative), process (step breakdown) and
 * visual (collection index).
 */
export function CaseStudy() {
  const { discipline: disciplineSlug, slug } = useParams()
  const project = projectBySlug(slug)

  if (!project || project.discipline !== disciplineSlug) {
    return <Navigate to="/work" replace />
  }

  const discipline = disciplineBySlug(project.discipline)
  const related = projects
    .filter((p) => p.discipline === project.discipline && p.slug !== project.slug)
    .slice(0, 2)

  const isVisual = project.kind === 'visual'

  return (
    <>
      <section className="page-hero page-hero--compact">
        <div className="container">
          <nav aria-label="Breadcrumb" className="crumbs">
            <Link to="/work">Work</Link>
            <span aria-hidden="true">/</span>
            <Link to={`/work/${project.discipline}`}>{discipline?.name}</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{project.title}</span>
          </nav>

          <Reveal>
            <div className="project-card__meta">
              <span>{project.client}</span>
              <span>{project.year}</span>
              {project.role && <span>{project.role}</span>}
            </div>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="page-hero__title page-hero__title--wide">{project.title}</h1>
          </Reveal>

          <Reveal delay={170}>
            <p className="page-hero__lede">{project.summary}</p>
          </Reveal>

          {project.placeholder && (
            <Reveal delay={230}>
              <div style={{ marginTop: '1.5rem' }}>
                <Sticker variant="vermilion">Placeholder content — ready to swap</Sticker>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {isVisual ? (
        /* ---------------- Visual collection ---------------- */
        <section className="section section--flush-top">
          <div className="container">
            <Reveal>
              <p className="section__lede" style={{ marginBottom: '2.5rem' }}>
                {project.intro}
              </p>
            </Reveal>

            <div className="visual-grid visual-grid--wide">
              {project.gallery.map((item, index) => (
                <Reveal key={item.label} index={index % 3}>
                  <Figure
                    label={item.label}
                    dark={item.dark}
                    ratio={index % 4 === 0 ? '4 / 3' : index % 4 === 1 ? '3 / 4' : '1 / 1'}
                    caption={item.label}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : (
        /* ---------------- Narrative case study ---------------- */
        <>
          <section className="section section--flush-top">
            <div className="container">
              <div className="case-hero">
                <Reveal className="case-hero__media">
                  <Figure
                    label={project.coverLabel || `${project.title} — cover image`}
                    ratio="4 / 3"
                  />
                </Reveal>

                <Reveal delay={120} className="case-hero__intro">
                  <p className="case-hero__lede">{project.intro}</p>

                  {project.metrics?.length > 0 && (
                    <ul className="case-metrics">
                      {project.metrics.map((metric) => (
                        <li key={metric.label}>
                          <span className="case-metrics__value">{metric.value}</span>
                          <span className="case-metrics__label">{metric.label}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </Reveal>
              </div>
            </div>
          </section>

          <section className="section section--tight on-ink torn-edge torn-edge--top" aria-labelledby="challenge-title">
            <div className="container">
              <div className="split">
                <div>
                  <Reveal>
                    <Eyebrow light>The challenge</Eyebrow>
                  </Reveal>
                  <Reveal delay={90}>
                    <h2 className="section__title" id="challenge-title" style={{ fontSize: 'var(--step-2)' }}>
                      What was actually broken
                    </h2>
                  </Reveal>
                </div>
                <Reveal delay={150}>
                  <p className="section__lede">{project.challenge}</p>
                </Reveal>
              </div>
            </div>
          </section>

          {project.approach?.length > 0 && (
            <section className="section" aria-labelledby="approach-title">
              <div className="container">
                <div className="section__head">
                  <Reveal>
                    <Eyebrow accent>The approach</Eyebrow>
                  </Reveal>
                  <Reveal delay={90}>
                    <h2 className="section__title" id="approach-title">
                      What I did, in order
                    </h2>
                  </Reveal>
                </div>

                <ol className="approach">
                  {project.approach.map((step, index) => (
                    <Reveal as="li" key={step} className="approach__item" index={index}>
                      <span className="approach__number">{String(index + 1).padStart(2, '0')}</span>
                      <p className="approach__text">{step}</p>
                    </Reveal>
                  ))}
                </ol>
              </div>
            </section>
          )}

          {project.gallery?.length > 0 && (
            <section className="section section--tight" aria-labelledby="gallery-title">
              <div className="container">
                <div className="section__head">
                  <Reveal>
                    <Eyebrow accent>Inside the work</Eyebrow>
                  </Reveal>
                  <Reveal delay={90}>
                    <h2 className="section__title" id="gallery-title">
                      The output
                    </h2>
                  </Reveal>
                </div>

                <div className="visual-grid">
                  {project.gallery.map((item, index) => (
                    <Reveal key={item.label} index={index % 3}>
                      <Figure
                        label={item.label}
                        dark={item.dark}
                        ratio={index % 3 === 0 ? '4 / 3' : index % 3 === 1 ? '3 / 4' : '1 / 1'}
                        caption={item.label}
                      />
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>
          )}

          {project.outcome && (
            <section className="section section--tight on-ink torn-edge torn-edge--top" aria-labelledby="outcome-title">
              <div className="container container--narrow">
                <Reveal>
                  <Eyebrow light>The outcome</Eyebrow>
                </Reveal>
                <Reveal delay={90}>
                  <h2 className="section__title" id="outcome-title" style={{ fontSize: 'var(--step-2)' }}>
                    What it produced
                  </h2>
                </Reveal>
                <Reveal delay={160}>
                  <p className="section__lede" style={{ marginTop: '1rem' }}>
                    {project.outcome}
                  </p>
                </Reveal>
              </div>
            </section>
          )}
        </>
      )}

      {/* ---------------- Related ---------------- */}
      {related.length > 0 && (
        <section className="section section--tight" aria-labelledby="related-title">
          <div className="container">
            <div className="section__head">
              <Reveal>
                <Eyebrow accent>More in {discipline?.name}</Eyebrow>
              </Reveal>
              <Reveal delay={90}>
                <h2 className="section__title" id="related-title" style={{ fontSize: 'var(--step-2)' }}>
                  Keep browsing
                </h2>
              </Reveal>
            </div>

            <div className="card-grid card-grid--2 stagger">
              {related.map((item, index) => (
                <Reveal key={item.id} index={index}>
                  <Link className="related-card" to={`/work/${item.discipline}/${item.slug}`}>
                    <span className="related-card__meta">
                      {item.client} · {item.year}
                    </span>
                    <span className="related-card__title">{item.title}</span>
                    <span className="related-card__cta">
                      Open <span className="btn__arrow" aria-hidden="true">&rarr;</span>
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section section--tight on-ink torn-edge torn-edge--top">
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <Reveal>
            <Scribble lime>Your project next</Scribble>
          </Reveal>
          <Reveal delay={90}>
            <p className="section__lede" style={{ margin: '1rem auto 0' }}>
              If this is the kind of work you need, the brief is the first step.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <Link className="btn btn--accent" to="/whats-next" style={{ marginTop: '2rem' }}>
              Start a project <span className="btn__arrow" aria-hidden="true">&rarr;</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
