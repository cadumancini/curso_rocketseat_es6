import axios from 'axios';

class Api {
  static async getUserInfo(username) {
    // o await não tem a função de then/catch, tem que usar o try/catch:
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      console.log(response);
    } catch (err) {
      console.warn('Erro na API: ', err.message);
    }
  }
}

Api.getUserInfo('cadumancini'); // funciona OK
Api.getUserInfo('cadumancini1225345321qrq'); // retorna 404