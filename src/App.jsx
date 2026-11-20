import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { WhoAmI } from './pages/WhoAmI'
import { WhyYouNeedMe } from './pages/WhyYouNeedMe'
import { WhatsDifferent } from './pages/WhatsDifferent'
import { WhatCanIDo } from './pages/WhatCanIDo'
import { Work } from './pages/Work'
import { Discipline } from './pages/Discipline'
import { CaseStudy } from './pages/CaseStudy'
import { WhatsNext } from './pages/WhatsNext'
import { NotFound } from './pages/NotFound'
import { useParallax, useTilt } from './hooks/useParallax'

export default function App() {
  // Decorative motion: parallax depth and pointer tilt.
  useParallax()
  useTilt()

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header />

      <main className="app-main" id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/who-am-i" element={<WhoAmI />} />
          <Route path="/why-you-need-me" element={<WhyYouNeedMe />} />
          <Route path="/whats-different" element={<WhatsDifferent />} />
          <Route path="/what-can-i-do" element={<WhatCanIDo />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:discipline" element={<Discipline />} />
          <Route path="/work/:discipline/:slug" element={<CaseStudy />} />
          <Route path="/whats-next" element={<WhatsNext />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />

      {/* Global texture layer. Purely decorative, sits above everything. */}
      <div className="grain" aria-hidden="true" />
    </div>
  )
}
