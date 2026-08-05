import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NeuralGraphPage, NeuralGraphThanksPage } from './NeuralGraphPage.jsx'
import '../tokens.css'
import '../neuralgraph.css'

const isThanksPage = window.location.pathname.replace(/\/$/, '').endsWith('/gracias')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isThanksPage ? <NeuralGraphThanksPage /> : <NeuralGraphPage />}
  </StrictMode>,
)
