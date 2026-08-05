import { Brand } from './components/Brand.jsx'
import { neuralGraphContact } from './neuralgraph-config.js'

export function PrivacyPage() {
  return (
    <main className="privacy-page">
      <div className="privacy-container">
        <Brand href="/" />
        <p className="privacy-label">Información legal</p>
        <h1>Política de privacidad</h1>
        <p className="privacy-updated">Última actualización: 5 de agosto de 2026</p>

        <h2>Responsable del tratamiento</h2>
        <p>
          Coral Data Lab es responsable del tratamiento de los datos recogidos mediante
          esta web y la investigación de NeuralGraph. Contacto: <a href={`mailto:${neuralGraphContact}`}>{neuralGraphContact}</a>.
        </p>

        <h2>Datos y finalidad</h2>
        <p>
          Si participas en la investigación, trataremos las respuestas que facilites y,
          cuando corresponda, tus datos profesionales y de contacto para estudiar necesidades
          relacionadas con RAG y GraphRAG y para organizar entrevistas de investigación.
        </p>

        <h2>Base jurídica y conservación</h2>
        <p>
          El tratamiento se basa en tu consentimiento. Conservaremos la información durante
          el tiempo necesario para esta investigación o hasta que retires el consentimiento.
        </p>

        <h2>Proveedores y transferencias</h2>
        <p>
          El formulario puede ser gestionado mediante Typeform como proveedor tecnológico.
          Antes de responder podrás consultar sus condiciones y la información aplicable al
          tratamiento y a posibles transferencias internacionales.
        </p>

        <h2>Tus derechos</h2>
        <p>
          Puedes solicitar acceso, rectificación, supresión, limitación, oposición o portabilidad,
          y retirar tu consentimiento escribiendo a <a href={`mailto:${neuralGraphContact}`}>{neuralGraphContact}</a>.
          También puedes reclamar ante la autoridad de protección de datos competente.
        </p>

        <a className="privacy-back" href="/neuralgraph/">← Volver a NeuralGraph</a>
      </div>
    </main>
  )
}
