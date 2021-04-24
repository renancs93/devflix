import config from '../config';

const URL_VIDEOS = `${config.URL_BASE}/videos`;

function create(objetoVideo) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoVideo),
  }).then(async (resp) => {
    if (resp.ok) {
      const resposta = await resp.json();
      return resposta;
    }
    throw new Error('Não foi possível cadastrar os dados :(');
  });
}

export default {
  create,
};
