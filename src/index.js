export default {
  async fetch(request) {
    const url = new URL(request.url)
    const path = url.pathname

    const redirects = {
      "/br/": "https://melhoradegaclimatizada.com.br/climatizacao-inteligente-adegas-e-ar-condicionado/",
      "/br/#/login": "https://melhoradegaclimatizada.com.br/climatizacao-inteligente-adegas-e-ar-condicionado/"
    }

    if (redirects[path]) {
      return Response.redirect(redirects[path], 301)
    }

    return new Response("Página não encontrada", { status: 404 })
  }
} 