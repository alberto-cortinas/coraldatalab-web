export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (request.method === 'GET' && !url.pathname.split('/').pop().includes('.')) {
      url.pathname = `${url.pathname.replace(/\/$/, '') || ''}/index.html`
      return env.ASSETS.fetch(new Request(url, request))
    }

    return env.ASSETS.fetch(request)
  },
}
