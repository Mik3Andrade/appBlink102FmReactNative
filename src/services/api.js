//https://www.blink102.com.br/feed/json

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.blink102.com.br/',
});

export default api;
