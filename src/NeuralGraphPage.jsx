import { useEffect } from 'react'
import {
  ArrowRight,
  Boxes,
  Braces,
  ChartNoAxesCombined,
  CircleDotDashed,
  CloudCog,
  GitBranch,
  Network,
  RefreshCcw,
  ScanSearch,
} from 'lucide-react'
import { Brand } from './components/Brand.jsx'
import {
  neuralGraphContact,
  initAnalytics,
  surveyUrl,
  trackNeuralGraph,
} from './neuralgraph-config.js'
import {
  currentLanguage,
  languageLabels,
  languagePaths,
  neuralGraphCopy,
  privacyPaths,
} from './neuralgraph-i18n.js'

const capabilityIcons = [ScanSearch, CircleDotDashed, GitBranch, Network, Braces, RefreshCcw, ChartNoAxesCombined, CloudCog, Boxes]

function ResearchLink({ placement, language, className = '', children }) {
  const href = surveyUrl(placement, language)

  return (
    <a
      className={className}
      href={href}
      onClick={() => trackNeuralGraph('survey_start', { placement, language })}
    >
      {children}
    </a>
  )
}

export function NeuralGraphPage() {
  const language = currentLanguage()
  const copy = neuralGraphCopy[language]

  useEffect(() => {
    initAnalytics()
    trackNeuralGraph('visit', { path: window.location.pathname, language })
  }, [language])

  return (
    <div className="ng-page" id="inicio">
      <a className="skip" href="#contenido">{copy.skip}</a>
      <header className="ng-header">
        <div className="ng-container ng-header__row">
          <Brand />
          <span className="ng-header__product">/ NeuralGraph</span>
          <nav className="ng-languages" aria-label={copy.languageNav}>
            {Object.entries(languagePaths).map(([code, path]) => (
              <a key={code} href={path} hrefLang={code} aria-current={code === language ? 'page' : undefined}>
                {languageLabels[code]}
              </a>
            ))}
          </nav>
          <a className="ng-header__contact" href={`mailto:${neuralGraphContact}`}>
            {copy.contact} <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </header>

      <main id="contenido">
        <section className="ng-hero">
          <div className="ng-container ng-hero__grid">
            <div className="ng-hero__copy">
              <span className="ng-status"><i />{copy.status}</span>
              <p className="ng-kicker">NeuralGraph</p>
              <h1>{copy.heroTitle[0]}<br />{copy.heroTitle[1]}</h1>
              <p className="ng-hero__lead">{copy.heroLead}</p>
              <div className="ng-actions">
                <ResearchLink placement="hero" language={language} className="ng-button ng-button--primary">
                  {copy.researchCta} <ArrowRight aria-hidden="true" />
                </ResearchLink>
                <a className="ng-button ng-button--text" href={`mailto:${neuralGraphContact}?subject=NeuralGraph`}>
                  {copy.talkCta}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="ng-section ng-problem">
          <div className="ng-container ng-two-col">
            <p className="ng-section__label">{copy.problemLabel}</p>
            <div>
              <h2>{copy.problemTitle}</h2>
              <p className="ng-copy-large">{copy.problemLead}</p>
              <p>{copy.problemBody}</p>
            </div>
          </div>
        </section>

        <section className="ng-section ng-capabilities">
          <div className="ng-container">
            <div className="ng-section-head">
              <p className="ng-section__label">{copy.capabilitiesLabel}</p>
              <h2>{copy.capabilitiesTitle}</h2>
            </div>
            <div className="ng-capability-grid">
              {copy.capabilities.map((label, index) => {
                const Icon = capabilityIcons[index]
                return (
                <article key={label}>
                  <div><span>{String(index + 1).padStart(2, '0')}</span><Icon aria-hidden="true" /></div>
                  <p>{label}</p>
                </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="ng-section ng-audience">
          <div className="ng-container ng-two-col">
            <p className="ng-section__label">{copy.audienceLabel}</p>
            <div>
              <h2>{copy.audienceTitle}</h2>
              <p className="ng-copy-large">{copy.audienceBody}</p>
              <div className="ng-tags" aria-label={copy.audienceAria}>
                <span>AI Platform</span><span>Data Platform</span><span>Engineering</span>
              </div>
            </div>
          </div>
        </section>

        <section className="ng-section ng-state">
          <div className="ng-container ng-two-col">
            <p className="ng-section__label">{copy.stateLabel}</p>
            <div>
              <h2>{copy.stateTitle}</h2>
              <p className="ng-copy-large">{copy.stateBody}</p>
              <p className="ng-state__note">{copy.stateNote}</p>
            </div>
          </div>
        </section>

        <section className="ng-cta">
          <div className="ng-container ng-cta__inner">
            <p className="ng-section__label">{copy.ctaLabel}</p>
            <h2>{copy.ctaTitle}</h2>
            <p>{copy.ctaBody}</p>
            <ResearchLink placement="final_cta" language={language} className="ng-button ng-button--primary">
              {copy.surveyCta} <ArrowRight aria-hidden="true" />
            </ResearchLink>
          </div>
        </section>
      </main>

      <footer className="ng-footer">
        <div className="ng-container ng-footer__grid">
          <p>{copy.initiative}</p>
          <a href={`mailto:${neuralGraphContact}`}>{neuralGraphContact}</a>
          <a href={privacyPaths[language]}>{copy.privacy}</a>
        </div>
      </footer>
    </div>
  )
}

export function NeuralGraphThanksPage() {
  const language = currentLanguage()
  const copy = neuralGraphCopy[language]

  useEffect(() => {
    initAnalytics()
    trackNeuralGraph('survey_complete', { path: window.location.pathname, language })
  }, [language])

  return (
    <main className="ng-thanks">
      <div className="ng-container">
        <Brand />
        <p className="ng-section__label">{copy.thanksLabel}</p>
        <h1>{copy.thanksTitle}</h1>
        <p>{copy.thanksBody}</p>
        <a className="ng-button ng-button--primary" href={languagePaths[language]}>{copy.thanksBack}</a>
      </div>
    </main>
  )
}
