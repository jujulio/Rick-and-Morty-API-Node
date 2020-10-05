import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default api;
