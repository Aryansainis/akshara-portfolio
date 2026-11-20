import { Link } from 'react-router-dom'
import { nav, site } from '../data/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container container--xl">
        <div className="footer__grid">
          <div>
            <p className="footer__title">Akshara Saini</p>
            <p className="footer__lede">
              Creative &amp; brand strategist working across strategy, design, copy and campaigns —
              based in {site.location}, available for freelance and full-time.
            </p>
            <p style={{ marginTop: '1.25rem' }}>
              <a className="btn btn--lime" href={`mailto:${site.email}`}>
                Start a project <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>

          <div>
            <p className="footer__title">Sections</p>
            <ul className="footer__list">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer__title">Elsewhere</p>
            <ul className="footer__list">
              {site.socials.map((social) => (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noreferrer noopener">
                    {social.label} <span aria-hidden="true">&nearr;</span>
                  </a>
                </li>
              ))}
              <li>
                <a href={site.portfolioPdf.href} download>
                  {site.portfolioPdf.label} <span aria-hidden="true">&darr;</span>
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>&copy; {year} {site.name}. All rights reserved.</span>
          <span>Built for the work, not the template.</span>
        </div>
      </div>
    </footer>
  )
}
