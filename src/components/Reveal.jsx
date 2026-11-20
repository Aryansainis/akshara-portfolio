import { useInView } from '../hooks/useScroll'

/**
 * Wraps children in an element that animates in when scrolled into view.
 *
 * variant: 'rise' (default) | 'wipe' | 'scale'
 * delay:   optional extra delay in ms, on top of the stagger index
 * index:   used by .stagger parents to cascade siblings
 */
export function Reveal({
  children,
  variant = 'rise',
  delay = 0,
  index,
  as: Tag = 'div',
  className = '',
  ...rest
}) {
  const [ref, inView] = useInView()

  const style = {}
  if (delay) style.transitionDelay = `${delay}ms`
  // CSS custom properties must be passed as object keys, not via
  // setProperty() — React's style prop is a plain object, not a DOM node.
  if (typeof index === 'number') style['--stagger'] = `${index * 90}ms`

  return (
    <Tag
      ref={ref}
      className={`${className} ${inView ? 'is-visible' : ''}`.trim()}
      data-reveal={variant}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  )
}
