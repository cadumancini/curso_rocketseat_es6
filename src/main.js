// Exercícios Módulo 03:

// 3.1
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
async function umPorSegundo(){
  await delay();
  console.log('1s');
  await delay();
  console.log('2s');
  await delay();
  console.log('3s');
}
umPorSegundo();

// 3.2
import axios from 'axios';
async function getUserFromGitHub(user) {
  try{
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response);
  } catch (err) {
    console.log('Usuário não existe!');
  }
}
getUserFromGitHub('cadumancini');
getUserFromGitHub('cadumancinisadfsfasefa12');

// 3.3
class Github {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);
      console.log(response.data);
    } catch (err) {
      console.log('Repositório não existe');
    }
  }
}
Github.getRepositories('cadumancini/Unique');
Github.getRepositories('cadumancini/Unique1245443');

// 3.4
const buscaUsuario = async usuario => {
  try {
    const response = await axios.get(`https://api.github.com/users/${usuario}`);
    console.log(response);   
  }
  catch (err) { 
    console.log('Usuário não existe!');
  }
}
buscaUsuario('cadumancini');