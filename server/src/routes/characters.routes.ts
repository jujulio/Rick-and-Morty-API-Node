import { Router } from 'express';
import api from '../services/api';

const routes = Router();
routes.get('/', async (req, res) => {
  let charactersId = [];
  let characters = [];

  await api.get('location/1').then(function (response) {
    charactersId = response.data.residents;
  });

  const onlyId = charactersId.map(item => item.replace(/\D+/g, ''));

  await api
    .get(`character/${onlyId.map(item => `${item}`)}`)
    .then(function (response) {
      characters = response.data;
    });

  const onlyHuman = characters.filter(item => item.species === 'Human');

  const result = onlyHuman.map(item => ({
    id: item.id,
    name: item.name,
    status: item.status,
    gender: item.gender,
    image: item.image,
    episodes: item.episode,
  }));

  return res.json(result);
});

export default routes;
