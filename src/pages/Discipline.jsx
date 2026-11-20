import { Link, Navigate, useParams } from 'react-router-dom'
import { disciplineBySlug, disciplines } from '../data/site'
import { projectsByDiscipline } from '../data/projects'
import { Eyebrow, Scribble } from '../components/Primitives'
import { Reveal } from '../components/Reveal'
import { ProjectCard } from '../components/ProjectCard'
import { Figure } from '../components/Media'

/**
 * A discipline landing page — one "room" per discipline, each with its
 * case studies, process breakdowns and visual work laid out distinctly
 * rather than flattened into a single uniform grid.
 */
export function Discipline() {
  const { discipline: slug } = useParams()
  const discipline = disciplineBySlug(slug)

  if (!discipline) return <Navigate to="/work" replace />

  const items = projectsByDiscipline(slug)
  const caseStudies = items.filter((p) => p.kind === 'case-study')
  const processItems = items.filter((p) => p.kind === 'process')
  const visuals = items.filter((p) => p.kind === 'visual')

  const siblings = disciplines.filter((d) => d.slug !== slug)

  return (
    <>
      <section className="page-hero page-hero--accent">
        <div className="container">
          <nav aria-label="Breadcrumb" className="crumbs">
            <Link to="/work">Work</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{discipline.name}</span>
          </nav>

          <Reveal>
            <Eyebrow accent>Discipline</Eyebrow>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="page-hero__title page-hero__title--wide">
              {discipline.name}
              <Scribble lime={discipline.accent === 'lime'}>{discipline.short}</Scribble>
              <span className="page-hero__title-sub">{discipline.blurb}</span>
            </h1>
          </Reveal>

          <Reveal delay={180} className="discipline-hero__stats">
            <ul className="stats stats--inline">
              <li className="stat">
                <span className="stat__value">{caseStudies.length}</span>
                <span className="stat__label">Case studies</span>
              </li>
              <li className="stat">
                <span className="stat__value">{processItems.length}</span>
                <span className="stat__label">Process breakdowns</span>
              </li>
              <li className="stat">
                <span className="stat__value">{visuals.length}</span>
                <span className="stat__label">Visual collections</span>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* --- Case studies: the full narrative format --------------------- */}
      {caseStudies.length > 0 && (
        <section className="section section--flush-top" aria-labelledby="cases-title">
          <div className="container">
            <div className="section__head">
              <Reveal>
                <Eyebrow accent>Case studies</Eyebrow>
              </Reveal>
              <Reveal delay={90}>
                <h2 className="section__title" id="cases-title">
                  The work, with the reasoning
                </h2>
              </Reveal>
            </div>

            <div className="case-list">
              {caseStudies.map((project, index) => (
                <Reveal
                  key={project.id}
                  as="article"
                  className={`case-preview ${index % 2 === 1 ? 'case-preview--flip' : ''}`}
                  index={index % 2}
                >
                  <div className="case-preview__media">
                    <Figure
                      label={project.coverLabel || `${project.title} — cover image`}
                      dark={index % 2 === 1}
                      ratio="4 / 3"
                    />
                  </div>

                  <div className="case-preview__body">
                    <div className="project-card__meta">
                      <span>{project.client}</span>
                      <span>{project.year}</span>
                      {project.placeholder && (
                        <span style={{ color: 'var(--vermilion-deep)', fontWeight: 700 }}>Placeholder</span>
                      )}
                    </div>

                    <h3 className="case-preview__title">{project.title}</h3>
                    <p className="case-preview__summary">{project.summary}</p>

                    <p className="case-preview__intro">{project.intro}</p>

                    {project.metrics?.length > 0 && (
                      <ul className="case-preview__metrics">
                        {project.metrics.map((metric) => (
                          <li key={metric.label}>
                            <span className="case-preview__metric-value">{metric.value}</span>
                            <span className="case-preview__metric-label">{metric.label}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <Link className="btn btn--accent" to={`/work/${project.discipline}/${project.slug}`}>
                      Read the case study <span className="btn__arrow" aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* --- Process breakdowns: how the work gets made ------------------- */}
      {processItems.length > 0 && (
        <section className="section section--tight on-ink torn-edge torn-edge--top" aria-labelledby="proc-title">
          <div className="container">
            <div className="section__head">
              <Reveal>
                <Eyebrow light>Process breakdowns</Eyebrow>
              </Reveal>
              <Reveal delay={90}>
                <h2 className="section__title" id="proc-title">
                  How the work actually gets made
                </h2>
              </Reveal>
            </div>

            <div className="process-cards">
              {processItems.map((item, index) => (
                <Reveal key={item.id} as="article" className="process-card" index={index}>
                  <h3 className="process-card__title">{item.title}</h3>
                  <p className="process-card__intro">{item.intro}</p>

                  <ol className="process-card__steps">
                    {item.approach.map((step, stepIndex) => (
                      <li key={step}>
                        <span aria-hidden="true">{String(stepIndex + 1).padStart(2, '0')}</span>
                        {step}
                      </li>
                    ))}
                  </ol>

                  {item.outcome && <p className="process-card__outcome">{item.outcome}</p>}

                  <Link className="process-card__link" to={`/work/${item.discipline}/${item.slug}`}>
                    Open the breakdown <span className="btn__arrow" aria-hidden="true">&rarr;</span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* --- Visual work: the raw material ------------------------------- */}
      {visuals.length > 0 && (
        <section className="section" aria-labelledby="visual-title">
          <div className="container">
            <div className="section__head">
              <Reveal>
                <Eyebrow accent>Visual work</Eyebrow>
              </Reveal>
              <Reveal delay={90}>
                <h2 className="section__title" id="visual-title">
                  The work on its own terms
                </h2>
              </Reveal>
              <Reveal delay={150}>
                <p className="section__lede">
                  Sometimes the process is not the interesting part. Here is the material itself.
                </p>
              </Reveal>
            </div>

            {visuals.map((collection) => (
              <Reveal key={collection.id} className="visual-collection">
                <div className="visual-collection__head">
                  <h3 className="visual-collection__title">{collection.title}</h3>
                  <p className="visual-collection__summary">{collection.summary}</p>
                </div>

                <div className="visual-grid">
                  {collection.gallery.map((item, index) => (
                    <Figure
                      key={item.label}
                      label={item.label}
                      dark={item.dark}
                      ratio={index % 3 === 0 ? '4 / 3' : index % 3 === 1 ? '3 / 4' : '1 / 1'}
                    />
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* --- Other rooms -------------------------------------------------- */}
      <section className="section section--tight" aria-labelledby="others-title">
        <div className="container">
          <div className="section__head">
            <Reveal>
              <Eyebrow accent>Other rooms</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="section__title" id="others-title">
                Go somewhere else
              </h2>
            </Reveal>
          </div>

          <div className="other-rooms stagger">
            {siblings.map((item, index) => (
              <Reveal key={item.slug} as="li" index={index}>
                <Link className="other-room" to={`/work/${item.slug}`}>
                  {item.name}
                  <span className="btn__arrow" aria-hidden="true">
                    &rarr;
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
