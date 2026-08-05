import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NeuralGraphPage, NeuralGraphThanksPage } from './NeuralGraphPage.jsx'
import '../tokens.css'
import '../neuralgraph.css'

const isThanksPage = /\/(gracias|gracies|thanks)$/.test(
  window.location.pathname.replace(/\/$/, ''),
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isThanksPage ? <NeuralGraphThanksPage /> : <NeuralGraphPage />}
  </StrictMode>,
)
