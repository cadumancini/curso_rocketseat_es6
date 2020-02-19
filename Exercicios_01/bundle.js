"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
// Exercicio 01:
console.log('Exercício 01:');
class Usuario {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
    this.admin = false;
  }

  isAdmin(){
    return this.admin;
  }
}

class Admin extends Usuario {
  constructor(email, senha){
    super(email, senha);
    this.admin = true;
  }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()); // false
console.log(Adm1.isAdmin()); // true

// Exercicio 02:
console.log('---------------------------------------------------------');
console.log('Exercício 02:');

const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map(function(item, index) {
  return item.idade;
});
console.log('Idades: ', idades);

const rocketseatMais18 = usuarios.filter(function(item) {
  return item.empresa === 'Rocketseat' && item.idade > 18;
});
console.log('Trabalham na Rocketseat e possuem mais de 18 anos: ', rocketseatMais18);

const google = usuarios.find(function(item){
  return item.empresa === 'Google';
});
console.log('Trabalham no Google: ', google);

for(const usuario of usuarios){
  usuario.idade *= 2;
}
const rocketseatAte50 = usuarios.filter(function(item) {
  return item.idade <= 50;
});
console.log(rocketseatAte50);

// Exercicio 03:
console.log('---------------------------------------------------------');
console.log('Exercício 03:');
// 3.1
const arr = [1, 2, 3, 4, 5];
arr.map((item) => item + 10);

// 3.2
const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = (usuario) => usuario.idade;
console.log(mostraIdade(usuario));

// 3.3
const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => ({nome, idade});
console.log(mostraUsuario(nome));
console.log(mostraUsuario(nome, idade));

// 3.4
const promise = () => new Promise((resolve, reject) => resolve());
console.log(promise());  

// Exercicio 04:
console.log('---------------------------------------------------------');
console.log('Exercício 04:');

const empresaExe04 = {
  nomeExe04: 'Rocketseat',
  enderecoExe04: {
    cidadeExe04: 'Rio do Sul',
    estadoExe04: 'SC',
  }
};

const { nomeExe04, enderecoExe04: { cidadeExe04, estadoExe04 } } = empresaExe04;
console.log(nomeExe04);
console.log(cidadeExe04);
console.log(estadoExe04); 

function mostraInfo({nome, idade}) {
  return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

COMENTANDO PARA NÃO DAR PROBLEMAS EM VARIAVEIS
*/
// Exercicio 05:
console.log('---------------------------------------------------------');
console.log('Exercício 05:');
console.log('Usando Rest:');
var arr = [1, 2, 3, 4, 5, 6];
var x = arr[0],
    y = arr.slice(1);
console.log(x);
console.log(y);

var soma = function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total += next;
  });
};

console.log(soma(1, 2, 3, 4, 5, 6)); // 21

console.log(soma(1, 2)); // 3

console.log('\nUsando Spread:');
var usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};

var usuario2 = _objectSpread({}, usuario, {
  nome: 'Gabriel'
});

console.log(usuario2);

var usuario3 = _objectSpread({}, usuario, {
  endereco: _objectSpread({}, usuario.endereco, {
    cidade: 'Lontras'
  })
});

console.log(usuario3);
