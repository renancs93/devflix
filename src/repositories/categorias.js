import config from '../config';

const URL_CATEGORIES = `${config.URL_BASE}/categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`).then(async (resp) => {
    if (resp.ok) {
      const resposta = await resp.json();
      return resposta;
    }
    throw new Error('Não foi possível carregar as categorias com videos :(');
  });
}

function getAll() {
  return fetch(URL_CATEGORIES).then(async (resp) => {
    if (resp.ok) {
      const resposta = await resp.json();
      return resposta;
    }
    throw new Error('Não foi possível carregar as categorias  :(');
  });
}

export default {
  getAll,
  getAllWithVideos,
};
