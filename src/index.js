export default {
  async fetch(request) {
    const redirect = "https://melhoradegaclimatizada.com.br/climatizacao-inteligente-adegas-e-ar-condicionado/";
    return Response.redirect(redirect, 301)
  }
}