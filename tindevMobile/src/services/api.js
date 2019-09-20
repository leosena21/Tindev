import axios from 'axios';

const api = axios.create({
  baseURL: 'http://divvi.company:3333',
});

export default api;
