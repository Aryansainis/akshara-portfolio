import { useId, useState } from 'react'
import { site } from '../data/site'

/**
 * Contact form.
 *
 * Works with zero backend: it opens a pre-filled mail draft via the
 * user's mail client, which always succeeds and never loses a message.
 * If a form endpoint is configured (see README → Form endpoint), it
 * POSTs there instead and reports the server response.
 *
 * Validation is client-side, accessible (aria-invalid + aria-describedby),
 * and every input has a real, associated <label>.
 */

const PROJECT_TYPES = [
  'Brand strategy & analysis',
  'Graphic design',
  'Art direction',
  'Copywriting',
  'Video editing',
  'Campaign concepting',
  'Pitch deck creation',
  'Something else / not sure yet',
]

const BUDGETS = ['Under ₹50k', '₹50k – ₹1L', '₹1L – ₹3L', '₹3L+', 'Not defined yet']

const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || ''

export function ContactForm() {
  const uid = useId()
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  const field = (name) => `${uid}-${name}`

  function validate(values) {
    const next = {}

    if (!values.name.trim()) next.name = 'Please add your name.'
    if (!values.email.trim()) {
      next.email = 'Please add an email so I can reply.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next.email = 'That email address does not look right.'
    }
    if (!values.brief.trim()) next.brief = 'A sentence or two is plenty — what are you working on?'
    else if (values.brief.trim().length < 12) next.brief = 'A little more detail helps me reply properly.'

    return next
  }

  function buildMailto(values) {
    const subject = `Project enquiry — ${values.name} (${values.projectType})`
    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Company: ${values.company || '—'}`,
      `Project type: ${values.projectType}`,
      `Budget: ${values.budget}`,
      `Timeline: ${values.timeline || '—'}`,
      '',
      'The brief:',
      values.brief,
    ].join('\n')

    return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const values = Object.fromEntries(new FormData(form).entries())

    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      setStatus({
        type: 'error',
        message: 'Almost — a couple of fields still need attention.',
      })
      // Move focus to the first field with a problem.
      const firstKey = Object.keys(nextErrors)[0]
      form.querySelector(`[name="${firstKey}"]`)?.focus()
      return
    }

    setSubmitting(true)

    if (FORM_ENDPOINT) {
      try {
        const response = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(values),
        })

        if (!response.ok) throw new Error(`Endpoint responded ${response.status}`)

        setStatus({
          type: 'success',
          message: 'Received — thanks. I reply to every enquiry within two working days.',
        })
        form.reset()
      } catch (error) {
        // Fall back to the mail client so the enquiry is never lost.
        window.location.href = buildMailto(values)
        setStatus({
          type: 'success',
          message: 'Your mail app should be open with the brief ready to send.',
        })
      } finally {
        setSubmitting(false)
      }
      return
    }

    // No endpoint configured: hand the brief to the mail client.
    window.location.href = buildMailto(values)
    setStatus({
      type: 'success',
      message: 'Your mail app should be open with the brief ready to send.',
    })
    setSubmitting(false)
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="form__row form__row--split">
        <div className={`field ${errors.name ? 'field--invalid' : ''}`}>
          <label className="field__label" htmlFor={field('name')}>
            Your name <span aria-hidden="true">*</span>
          </label>
          <input
            className="field__control"
            id={field('name')}
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={errors.name ? 'true' : undefined}
            aria-describedby={errors.name ? field('name-error') : undefined}
            placeholder="Akshara would like a word"
          />
          {errors.name && (
            <p className="field__error" id={field('name-error')}>
              {errors.name}
            </p>
          )}
        </div>

        <div className={`field ${errors.email ? 'field--invalid' : ''}`}>
          <label className="field__label" htmlFor={field('email')}>
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            className="field__control"
            id={field('email')}
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={errors.email ? 'true' : undefined}
            aria-describedby={errors.email ? field('email-error') : undefined}
            placeholder="you@company.com"
          />
          {errors.email && (
            <p className="field__error" id={field('email-error')}>
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="form__row form__row--split">
        <div className="field">
          <label className="field__label" htmlFor={field('company')}>
            Company or brand
          </label>
          <input
            className="field__control"
            id={field('company')}
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Optional"
          />
        </div>

        <div className="field">
          <label className="field__label" htmlFor={field('projectType')}>
            What do you need
          </label>
          <select className="field__control" id={field('projectType')} name="projectType" defaultValue={PROJECT_TYPES[0]}>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form__row form__row--split">
        <div className="field">
          <label className="field__label" htmlFor={field('budget')}>
            Budget range
          </label>
          <select className="field__control" id={field('budget')} name="budget" defaultValue={BUDGETS[4]}>
            {BUDGETS.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label className="field__label" htmlFor={field('timeline')}>
            Timeline
          </label>
          <input
            className="field__control"
            id={field('timeline')}
            name="timeline"
            type="text"
            placeholder="e.g. Launching in six weeks"
          />
        </div>
      </div>

      <div className={`field ${errors.brief ? 'field--invalid' : ''}`}>
        <label className="field__label" htmlFor={field('brief')}>
          The brief <span aria-hidden="true">*</span>
        </label>
        <textarea
          className="field__control"
          id={field('brief')}
          name="brief"
          required
          aria-invalid={errors.brief ? 'true' : undefined}
          aria-describedby={errors.brief ? field('brief-error') : field('brief-hint')}
          placeholder="What are you building, who is it for, and what is going wrong right now?"
        />
        {errors.brief ? (
          <p className="field__error" id={field('brief-error')}>
            {errors.brief}
          </p>
        ) : (
          <p className="field__hint" id={field('brief-hint')}>
            The more specific the problem, the faster I can tell you whether I am the right person.
          </p>
        )}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
        <button className="btn btn--accent" type="submit" disabled={submitting}>
          {submitting ? 'Sending…' : 'Send the brief'}
          <span className="btn__arrow" aria-hidden="true">
            &rarr;
          </span>
        </button>
        <p className="field__hint" style={{ margin: 0 }}>
          Or email directly at{' '}
          <a className="link-underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </p>
      </div>

      <div role="status" aria-live="polite">
        {status.type !== 'idle' && (
          <p className={`form__status ${status.type === 'error' ? 'form__status--error' : ''}`.trim()}>
            {status.message}
          </p>
        )}
      </div>
    </form>
  )
}
