import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PrivacyPage } from './PrivacyPage.jsx'
import '../tokens.css'
import '../privacy.css'

createRoot(document.getElementById('root')).render(
  <StrictMode><PrivacyPage /></StrictMode>,
)
