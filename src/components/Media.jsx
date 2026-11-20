/**
 * Placeholder media.
 *
 * Every image that has not been replaced with real work yet renders
 * through this component. It is visually obvious what still needs
 * artwork, is fully accessible, and carries the correct dimensions so
 * the layout never shifts when real files are dropped in.
 */

export function Placeholder({ label, dark = false, ratio = '4 / 3', className = '' }) {
  return (
    <div
      className={`placeholder ${dark ? 'placeholder--dark' : ''} ${className}`.trim()}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={`Placeholder image: ${label}`}
    >
      <span className="placeholder__label">{label}</span>
    </div>
  )
}

/**
 * A figure with either a real image or a placeholder.
 * Pass `src` once the real asset exists — the placeholder disappears.
 */
export function Figure({ src, alt, label, dark = false, ratio = '4 / 3', caption, className = '' }) {
  return (
    <figure className={`figure ${className}`.trim()}>
      <div className="figure__frame" style={{ aspectRatio: ratio }}>
        {src ? (
          <img
            src={src}
            alt={alt || label}
            loading="lazy"
            decoding="async"
            width="1200"
            height="900"
          />
        ) : (
          <Placeholder label={label} dark={dark} ratio={ratio} />
        )}
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
