import { Link } from 'react-router-dom'
import { site } from '../data/site'
import { Eyebrow, Scribble, Sticker } from '../components/Primitives'
import { Reveal } from '../components/Reveal'
import { ContactForm } from '../components/ContactForm'

const OPTIONS = [
  {
    id: 'start',
    label: 'Start a project',
    title: 'Send the brief',
    body:
      'The fastest route. Tell me what you are working on, what is going wrong and when it needs to be live. I reply to every enquiry within two working days — including the ones I am not right for.',
    action: 'form',
  },
  {
    id: 'call',
    label: 'Book a call',
    title: 'Fifteen minutes, no pitch',
    body:
      'Bring the problem. We will work out together whether I am the right person for it, and what the first move would be. If I am not, I will say so and point you somewhere better.',
    action: 'email',
  },
  {
    id: 'deck',
    label: 'Download the deck',
    title: 'The condensed version',
    body:
      'Everything on this site — case studies, services, process and contact — in one file. The thing to send to someone who needs the facts rather than the story.',
    action: 'download',
  },
]

export function WhatsNext() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <Eyebrow accent>06 — What&rsquo;s Next</Eyebrow>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="page-hero__title page-hero__title--wide">
              Three ways to
              <Scribble>start</Scribble>
              <span className="page-hero__title-sub">
                Pick whichever is easiest. They all end up in the same inbox — mine.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <div style={{ marginTop: '1.5rem' }}>
              <Sticker variant="lime">Replies within 2 working days</Sticker>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--flush-top">
        <div className="container">
          <div className="next-options stagger">
            {OPTIONS.map((option, index) => (
              <Reveal key={option.id} as="article" className="next-option" index={index}>
                <span className="next-option__label">{option.label}</span>
                <h2 className="next-option__title">{option.title}</h2>
                <p className="next-option__body">{option.body}</p>

                {option.action === 'email' && (
                  <a className="btn btn--accent" href={`mailto:${site.email}?subject=Call%20request`}>
                    Request a call <span className="btn__arrow" aria-hidden="true">&rarr;</span>
                  </a>
                )}
                {option.action === 'download' && (
                  <a className="btn btn--accent" href={site.portfolioPdf.href} download>
                    Download the PDF <span className="btn__arrow" aria-hidden="true">&darr;</span>
                  </a>
                )}
                {option.action === 'form' && (
                  <a className="btn btn--accent" href="#brief">
                    Write the brief <span className="btn__arrow" aria-hidden="true">&darr;</span>
                  </a>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight" id="brief" aria-labelledby="brief-title">
        <div className="container">
          <div className="split split--wide-left">
            <div>
              <Reveal>
                <Eyebrow accent>The brief</Eyebrow>
              </Reveal>
              <Reveal delay={90}>
                <h2 className="section__title" id="brief-title">
                  Tell me what you&rsquo;re trying to fix
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="section__lede" style={{ marginTop: '1rem' }}>
                  The more specific the problem, the faster I can tell you whether I am the right
                  help. Vague briefs get vague replies.
                </p>
              </Reveal>
              <Reveal delay={230}>
                <ul className="checklist" style={{ marginTop: '1.5rem' }}>
                  <li>What the business is trying to achieve</li>
                  <li>What is currently not working</li>
                  <li>Who it is for and what they already believe</li>
                  <li>When it has to be live</li>
                  <li>What has already been tried</li>
                </ul>
              </Reveal>
            </div>

            <Reveal delay={120} className="brief-form">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--tight on-ink torn-edge torn-edge--top" aria-labelledby="contact-title">
        <div className="container">
          <div className="section__head">
            <Reveal>
              <Eyebrow light>Direct lines</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="section__title" id="contact-title">
                Skip the form
              </h2>
            </Reveal>
          </div>

          <div className="contact-grid stagger">
            <Reveal as="div" className="contact-block" index={0}>
              <span className="contact-block__label">Email</span>
              <a className="contact-block__value" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <p>The primary channel. Form, brief, question, anything.</p>
            </Reveal>

            <Reveal as="div" className="contact-block" index={1}>
              <span className="contact-block__label">Phone</span>
              <a className="contact-block__value" href={`tel:${site.phone.replace(/\s/g, '')}`}>
                {site.phone}
              </a>
              <p>Mumbai hours, Monday to Friday.</p>
            </Reveal>

            <Reveal as="div" className="contact-block" index={2}>
              <span className="contact-block__label">Based in</span>
              <span className="contact-block__value">{site.location}</span>
              <p>Working remotely across India and beyond.</p>
            </Reveal>

            <Reveal as="div" className="contact-block" index={3}>
              <span className="contact-block__label">Elsewhere</span>
              <div className="contact-block__links">
                {site.socials.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noreferrer noopener">
                    {social.label} <span aria-hidden="true">&nearr;</span>
                  </a>
                ))}
                <a href={site.portfolioPdf.href} download>
                  Portfolio PDF <span aria-hidden="true">&darr;</span>
                </a>
              </div>
              <p>Work samples, case notes and the deck.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <Reveal>
            <Eyebrow accent>Still reading?</Eyebrow>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="section__title" style={{ maxWidth: 'none' }}>
              Have another look at the work first.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ marginTop: '1.5rem' }}>
              <Link className="btn" to="/work">
                Browse all the work <span className="btn__arrow" aria-hidden="true">&rarr;</span>
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
