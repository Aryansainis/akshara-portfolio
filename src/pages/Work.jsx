import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { disciplines } from '../data/site'
import { disciplineCounts, projects } from '../data/projects'
import { Eyebrow, Scribble } from '../components/Primitives'
import { Reveal } from '../components/Reveal'
import { ProjectCard } from '../components/ProjectCard'

const KINDS = [
  { slug: 'all', label: 'Everything' },
  { slug: 'case-study', label: 'Case studies' },
  { slug: 'process', label: 'Process' },
  { slug: 'visual', label: 'Visual work' },
]

export function Work() {
  const [kind, setKind] = useState('all')
  const [discipline, setDiscipline] = useState('all')

  const counts = useMemo(() => disciplineCounts(), [])

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const kindMatch = kind === 'all' || project.kind === kind
      const disciplineMatch = discipline === 'all' || project.discipline === discipline
      return kindMatch && disciplineMatch
    })
  }, [kind, discipline])

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <Eyebrow accent>05 — The Work</Eyebrow>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="page-hero__title page-hero__title--wide">
              Every discipline has
              <Scribble>its own room</Scribble>
              <span className="page-hero__title-sub">
                Case studies, process breakdowns and visual work — browse by what you actually need.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={180} className="work-rooms">
            <ul className="work-rooms__list stagger">
              {disciplines.map((item, index) => (
                <Reveal as="li" key={item.slug} index={index}>
                  <Link className={`work-room work-room--${item.accent}`} to={`/work/${item.slug}`}>
                    <span className="work-room__count">{counts[item.slug] || 0}</span>
                    <span className="work-room__name">{item.name}</span>
                    <span className="work-room__blurb">{item.blurb}</span>
                    <span className="work-room__cta">
                      Enter <span className="btn__arrow" aria-hidden="true">&rarr;</span>
                    </span>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section section--flush-top" aria-labelledby="all-work-title">
        <div className="container">
          <div className="section__head">
            <Reveal>
              <Eyebrow accent>Browse</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="section__title" id="all-work-title">
                The full index
              </h2>
            </Reveal>

            <Reveal delay={150} className="filters">
              <div className="filters__group">
                <span className="filters__label" id="kind-filter-label">
                  Type
                </span>
                <div className="rail" role="group" aria-labelledby="kind-filter-label">
                  {KINDS.map((item) => (
                    <button
                      key={item.slug}
                      type="button"
                      className="rail__item"
                      aria-pressed={kind === item.slug}
                      onClick={() => setKind(item.slug)}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="filters__group">
                <span className="filters__label" id="discipline-filter-label">
                  Discipline
                </span>
                <div className="rail" role="group" aria-labelledby="discipline-filter-label">
                  <button
                    type="button"
                    className="rail__item"
                    aria-pressed={discipline === 'all'}
                    onClick={() => setDiscipline('all')}
                  >
                    All
                  </button>
                  {disciplines.map((item) => (
                    <button
                      key={item.slug}
                      type="button"
                    className="rail__item"
                      aria-pressed={discipline === item.slug}
                      onClick={() => setDiscipline(item.slug)}
                    >
                      {item.short}
                    </button>
                  ))}
                </div>
              </div>

              <p className="filters__count" role="status" aria-live="polite">
                Showing {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
              </p>
            </Reveal>
          </div>

          {filtered.length > 0 ? (
            <div className="card-grid card-grid--3 stagger">
              {filtered.map((project, index) => (
                <Reveal key={project.id} index={index % 3}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p>No projects match that combination yet.</p>
              <button
                type="button"
                className="btn btn--ghost"
                onClick={() => {
                  setKind('all')
                  setDiscipline('all')
                }}
              >
                Reset the filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
