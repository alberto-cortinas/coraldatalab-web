export const neuralGraphCampaign = {
  source: 'coraldatalab',
  medium: 'website',
  name: 'neuralgraph_research_preview',
}

export const neuralGraphContact = 'alberto@coraldatalab.com'

const typeformBaseUrl = import.meta.env.VITE_NEURALGRAPH_TYPEFORM_URL
const plausibleDomain = import.meta.env.VITE_PLAUSIBLE_DOMAIN

export function initAnalytics() {
  if (!plausibleDomain || document.querySelector('script[data-coral-analytics]')) return

  window.plausible = window.plausible || function plausible() {
    window.plausible.q = window.plausible.q || []
    window.plausible.q.push(arguments)
  }

  const script = document.createElement('script')
  script.defer = true
  script.dataset.coralAnalytics = 'true'
  script.dataset.domain = plausibleDomain
  script.src = 'https://plausible.io/js/script.js'
  document.head.append(script)
}

export function surveyUrl(placement) {
  if (!typeformBaseUrl) {
    const subject = encodeURIComponent('Participar en la investigación de NeuralGraph')
    return `mailto:${neuralGraphContact}?subject=${subject}`
  }

  const url = new URL(typeformBaseUrl)
  url.searchParams.set('utm_source', neuralGraphCampaign.source)
  url.searchParams.set('utm_medium', neuralGraphCampaign.medium)
  url.searchParams.set('utm_campaign', neuralGraphCampaign.name)
  url.searchParams.set('utm_content', placement)
  return url.toString()
}

export function trackNeuralGraph(event, properties = {}) {
  const detail = {
    event,
    campaign: neuralGraphCampaign.name,
    ...properties,
  }

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(detail)
  window.plausible?.(event, { props: detail })
  document.documentElement.dataset.lastAnalyticsEvent = event
  window.dispatchEvent(new CustomEvent('coral:analytics', { detail }))
}
