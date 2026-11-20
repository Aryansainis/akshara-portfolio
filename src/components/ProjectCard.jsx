import { Link } from 'react-router-dom'
import { disciplineBySlug } from '../data/site'

/**
 * Project card used across the /work index and each discipline page.
 * The whole card is one link target (see the ::after in CSS) so the
 * tap area is large and there are no nested interactive elements.
 */
export function ProjectCard({ project, index = 0, compact = false }) {
  const discipline = disciplineBySlug(project.discipline)
  const coverLabel = project.coverLabel || `${project.title} — cover image`

  return (
    <article className="project-card">
      <div className="project-card__media">
        <ProjectCover project={project} label={coverLabel} accent={discipline?.accent} />
      </div>

      <div className="project-card__body">
        <div className="project-card__meta">
          <span>{project.client}</span>
          <span>{project.year}</span>
          {project.placeholder && (
            <span style={{ color: 'var(--vermilion-deep)', fontWeight: 700 }}>Placeholder</span>
          )}
        </div>

        <h3 className="card__title">{project.title}</h3>
        <p className="card__body">{project.summary}</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.25rem' }}>
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <span className="project-card__cta">
          {compact ? 'View project' : 'Read the case study'}
          <span className="btn__arrow" aria-hidden="true">
            &rarr;
          </span>
        </span>
      </div>

      <Link className="project-card__link" to={`/work/${project.discipline}/${project.slug}`}>
        <span className="visually-hidden">
          {project.title} — {project.client}
        </span>
      </Link>
    </article>
  )
}

/**
 * Cover art for a project. When `project.cover` points at a real file it
 * renders an image; otherwise it renders a grungy generated placeholder
 * that matches the discipline's accent colour.
 */
function ProjectCover({ project, label, accent }) {
  if (project.cover) {
    return (
      <img
        src={project.cover}
        alt={label}
        loading="lazy"
        decoding="async"
        width="1200"
        height="900"
      />
    )
  }

  const isLime = accent === 'lime'
  return (
    <div
      role="img"
      aria-label={`Placeholder image: ${label}`}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'grid',
        placeItems: 'center',
        background: isLime
          ? 'repeating-linear-gradient(135deg, rgba(21,18,13,0.07) 0 14px, transparent 14px 28px), var(--paper-3)'
          : 'repeating-linear-gradient(45deg, rgba(21,18,13,0.06) 0 14px, transparent 14px 28px), var(--paper-3)',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.5rem, 9vw, 5rem)',
          lineHeight: 0.85,
          textAlign: 'center',
          padding: '1rem',
          color: isLime ? 'var(--lime-deep)' : 'var(--vermilion-deep)',
          opacity: 0.85,
          letterSpacing: '-0.01em',
        }}
      >
        {project.client}
      </span>
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '0.75rem',
          right: '0.9rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--ink-soft)',
          border: '1px dashed var(--line-strong)',
          padding: '0.25rem 0.5rem',
          background: 'rgba(242,235,223,0.75)',
        }}
      >
        Placeholder art
      </span>
    </div>
  )
}
