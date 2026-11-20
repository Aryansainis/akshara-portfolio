/**
 * Section eyebrow — the small mono label above every section title.
 */
export function Eyebrow({ children, light = false, accent = false }) {
  const className = [
    'eyebrow',
    light ? 'eyebrow--light' : '',
    accent ? 'eyebrow--accent' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return <p className={className}>{children}</p>
}

/**
 * A hand-drawn underline that sits behind a word.
 * The SVG path is deliberately irregular — it should read as drawn.
 */
export function Scribble({ children, lime = false, className = '' }) {
  return (
    <span className={`scribble ${lime ? 'scribble--lime' : ''} ${className}`.trim()}>
      {children}
      <svg viewBox="0 0 100 8" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path d="M1 5.2 C 18 1.4, 34 6.8, 52 3.4 S 84 6.4, 99 2.4" />
      </svg>
    </span>
  )
}

/**
 * A collage tape strip. Position with the modifier classes.
 */
export function Tape({ position = 'tl' }) {
  return <span className={`tape tape--${position}`} aria-hidden="true" />
}

/**
 * A stamped sticker label.
 */
export function Sticker({ children, variant = 'lime' }) {
  return <span className={`sticker sticker--${variant}`}>{children}</span>
}

/**
 * Marquee ticker. The content is duplicated so the CSS animation loops
 * seamlessly; the copy is hidden from assistive tech to avoid reading
 * the same list twice.
 */
export function Marquee({ items, reverse = false, fast = false, light = false }) {
  const rendered = items.map((item, index) => (
    <span
      key={`${item}-${index}`}
      className={`marquee__item ${light ? 'marquee__item--lime' : ''}`.trim()}
    >
      {item}
    </span>
  ))

  return (
    <div className={`marquee ${reverse ? 'marquee--reverse' : ''} ${fast ? 'marquee--fast' : ''}`.trim()}>
      <div className="marquee__track" aria-hidden="true">
        {rendered}
        {rendered}
      </div>
      <span className="visually-hidden">{items.join(', ')}</span>
    </div>
  )
}
