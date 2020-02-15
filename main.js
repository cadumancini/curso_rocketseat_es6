// REST operator:
const usuario = {
  nome: 'Cadu',
  idade: 27,
  cidade: 'Matão'
}

const {nome, ...resto} = usuario; // usando '...<variavel>' será atribuído o resto do objeto que não foi atribuido para a primeira variável
console.log(nome);
console.log(resto);

// fazendo com arrays:
const arr = [1, 2, 3, 4];
const [a, b, ...c] = arr;

console.log(a); // a = 1
console.log(b); // b = 2
console.log(c); // c = [3, 4]

// pode-se usar como parâmetro de função
function soma(...params) {
  return params.reduce((total, next) => total + next);
}
console.log(soma(1, 2, 3));

function teste(a, b, ...params){ // atribui os dois primeiros parametros para a e b, e o resto vai para dentro do params
  return params;
}
console.log(teste(1, 2, 3, 4, 5, 6));

// SPREAD operator:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2]; // pega os dados de arr1 e junta com os de arr2;
console.log(arr3);

//outra forma de usar (com objetos):
const usuario1 = {
  nome: 'Cadu',
  idade: 27,
  cidade: 'Matão'
};

const usuario2 = {...usuario1, cidade: 'Vancouver'}; // atribui todos os atributos do usuario1 para o usuario2, e pode-se trocar apenas o que for necessário
console.log(usuario2);