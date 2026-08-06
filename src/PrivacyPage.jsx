import { Brand } from './components/Brand.jsx'
import { neuralGraphContact } from './neuralgraph-config.js'
import {
  currentLanguage,
  languageLabels,
  languagePaths,
  privacyPaths,
} from './neuralgraph-i18n.js'
import { privacyCopy } from './privacy-i18n.js'

export function PrivacyPage() {
  const language = currentLanguage()
  const copy = privacyCopy[language]

  return (
    <main className="privacy-layout">
      <aside className="privacy-rail">
        <Brand href="/" />
        <div className="privacy-rail__title">
          <p className="privacy-label">{copy.label}</p>
          <h1>{copy.title}</h1>
          <p className="privacy-updated">{copy.updated}</p>
        </div>
        <div className="privacy-rail__utilities">
          <nav aria-label="Idioma">
            {Object.entries(privacyPaths).map(([code, path]) => (
              <a key={code} href={path} hrefLang={code} aria-current={code === language ? 'page' : undefined}>
                {languageLabels[code]}
              </a>
            ))}
          </nav>
          <a href={`mailto:${neuralGraphContact}`}>Hablemos →</a>
        </div>
      </aside>

      <article className="privacy-content">
        <section>
          <span>01</span>
          <div>
            <h2>{copy.responsibleTitle}</h2>
            <p>{copy.responsible} {copy.contact}: <a href={`mailto:${neuralGraphContact}`}>{neuralGraphContact}</a>.</p>
          </div>
        </section>
        <section>
          <span>02</span>
          <div><h2>{copy.dataTitle}</h2><p>{copy.data}</p></div>
        </section>
        <section>
          <span>03</span>
          <div><h2>{copy.legalTitle}</h2><p>{copy.legal}</p></div>
        </section>
        <section>
          <span>04</span>
          <div><h2>{copy.providersTitle}</h2><p>{copy.providers}</p></div>
        </section>
        <section>
          <span>05</span>
          <div>
            <h2>{copy.rightsTitle}</h2>
            <p>{copy.rightsBefore} <a href={`mailto:${neuralGraphContact}`}>{neuralGraphContact}</a>. {copy.rightsAfter}</p>
          </div>
        </section>
        <a className="privacy-back" href={languagePaths[language]}>{copy.back} →</a>
      </article>
    </main>
  )
}
