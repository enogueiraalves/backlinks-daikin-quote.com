export default {
  async fetch(request) {
    const url = new URL(request.url)
    const path = url.pathname

    const redirects = {
        "/": "https://bargenial.com.br/daikin-quote/",
        "/home": "https://bargenial.com.br/daikin-quote/",
        "/quote": "https://bargenial.com.br/daikin-quote/",
        "/orcamento": "https://bargenial.com.br/daikin-quote/",
        "/ar-condicionado": "https://bargenial.com.br/daikin-quote/",
        "/climatizacao": "https://bargenial.com.br/daikin-quote/",
        "/instalacao": "https://bargenial.com.br/daikin-quote/",
        "/manutencao": "https://bargenial.com.br/daikin-quote/",
        "/contato": "https://bargenial.com.br/daikin-quote/"
    }

    if (redirects[path]) {
      return Response.redirect(redirects[path], 301)
    }

    return new Response("Página não encontrada", { status: 404 })
  }
} 