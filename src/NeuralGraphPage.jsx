import { useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
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

function ResearchLink({ placement, language, className = '', children }) {
  return (
    <a
      className={className}
      href={surveyUrl(placement, language)}
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
      <main className="ng-single" id="contenido">
        <aside className="ng-product-rail">
          <div className="ng-product-rail__top">
            <Brand href="/" />
            <a className="ng-home-link" href="/">← {copy.homeLink}</a>
          </div>

          <div className="ng-product-intro">
            <span className="ng-status"><i />{copy.status}</span>
            <p className="ng-kicker">NeuralGraph</p>
            <h1>NeuralGraph</h1>
            <h2>{copy.productTitle}</h2>
            <p>{copy.productLead}</p>
            <ResearchLink placement="hero" language={language} className="ng-button ng-button--primary">
              {copy.researchCta} <ArrowRight aria-hidden="true" />
            </ResearchLink>
          </div>

          <div className="ng-product-rail__utilities">
            <nav className="ng-languages" aria-label={copy.languageNav}>
              {Object.entries(languagePaths).map(([code, path]) => (
                <a key={code} href={path} hrefLang={code} aria-current={code === language ? 'page' : undefined}>
                  {languageLabels[code]}
                </a>
              ))}
            </nav>
            <a href={`mailto:${neuralGraphContact}?subject=NeuralGraph`}>{copy.talkCta} →</a>
          </div>
        </aside>

        <section className="ng-product-summary" aria-labelledby="ng-problem-title">
          <div className="ng-product-summary__top">
            <span>{copy.problemLabel}</span>
            <span>NeuralGraph · Research preview</span>
          </div>

          <div className="ng-problem-copy">
            <p className="ng-section__label">{copy.problemLabel}</p>
            <h2 id="ng-problem-title">{copy.problemTitle}</h2>
            <p className="ng-problem-copy__lead">{copy.problemLead}</p>
            <div className="ng-solution">
              <span>{copy.solutionLabel}</span>
              <p>{copy.problemBody}</p>
            </div>
          </div>

          <div className="ng-evidence">
            <div className="ng-evidence__intro">
              <span>{copy.evidenceLabel}</span>
              <p>{copy.evidenceIntro}</p>
            </div>
            <div className="ng-evidence__grid">
              {copy.evidenceItems.map((item) => (
                <article key={item}>
                  <span>{item}</span>
                  <strong>{copy.evidenceValue}</strong>
                </article>
              ))}
            </div>
          </div>

          <div className="ng-product-summary__foot">
            <a href={privacyPaths[language]}>{copy.privacy}</a>
            <a href={`mailto:${neuralGraphContact}`}>{neuralGraphContact}</a>
          </div>
        </section>
      </main>
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
      <div className="ng-thanks__square">
        <Brand href={languagePaths[language]} />
        <div>
          <p className="ng-section__label">{copy.thanksLabel}</p>
          <h1>{copy.thanksTitle}</h1>
          <p>{copy.thanksBody}</p>
          <a className="ng-button ng-button--primary" href={languagePaths[language]}>{copy.thanksBack}</a>
          <a className="ng-thanks__home" href="/">← {copy.homeLink}</a>
        </div>
      </div>
    </main>
  )
}
