import { Brand } from './components/Brand.jsx'
import { neuralGraphContact } from './neuralgraph-config.js'
import { currentLanguage, languagePaths } from './neuralgraph-i18n.js'
import { privacyCopy } from './privacy-i18n.js'

export function PrivacyPage() {
  const language = currentLanguage()
  const copy = privacyCopy[language]

  return (
    <main className="privacy-page">
      <div className="privacy-container">
        <Brand href="/" />
        <p className="privacy-label">{copy.label}</p>
        <h1>{copy.title}</h1>
        <p className="privacy-updated">{copy.updated}</p>

        <h2>{copy.responsibleTitle}</h2>
        <p>
          {copy.responsible} {copy.contact}: <a href={`mailto:${neuralGraphContact}`}>{neuralGraphContact}</a>.
        </p>

        <h2>{copy.dataTitle}</h2>
        <p>{copy.data}</p>

        <h2>{copy.legalTitle}</h2>
        <p>{copy.legal}</p>

        <h2>{copy.providersTitle}</h2>
        <p>{copy.providers}</p>

        <h2>{copy.rightsTitle}</h2>
        <p>
          {copy.rightsBefore} <a href={`mailto:${neuralGraphContact}`}>{neuralGraphContact}</a>.
          {' '}{copy.rightsAfter}
        </p>

        <a className="privacy-back" href={languagePaths[language]}>{copy.back}</a>
      </div>
    </main>
  )
}
