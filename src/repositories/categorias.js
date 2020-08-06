import config from '../config';

const URL_CATEGORIES = `${config.URL}/categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (respostaDoServer) => {
      if (respostaDoServer.ok) {
        const resposta = await respostaDoServer.json();

        return resposta;
      }

      throw new Error('não foi possivel pegar os dados');
    });
}

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (respostaDoServer) => {
      if (respostaDoServer.ok) {
        const resposta = await respostaDoServer.json();

        return resposta;
      }

      throw new Error('não foi possivel pegar os dados');
    });
}

export default {
  getAllWithVideos, getAll,
};
