import axios from 'axios';

const api = axios.create({ // axios.create cria a configuração do axios. Pode-se criar uma URL de base para partir sempre dali
  baseURL: 'https://api.github.com'
});

export default api;