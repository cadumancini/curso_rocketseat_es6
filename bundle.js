"use strict";

var arr = [1, 3, 4, 5, 6];
var newArr = arr.map(function (item) {
  // Arrow function. não precisa usar o nome function (por ser anônima), e após o parâmetro, usar '=>'
  return item * 2;
});
console.log(newArr);
var newArr2 = arr.map(function (item) {
  // Outra forma: quando tem apenas 1 parâmetro, não precisa do '(param)'
  return item * 2;
});
console.log(newArr2);
var newArr3 = arr.map(function (item) {
  return item * 2;
}); // Outra forma: quando tem apenas o return <código>, não precisa do '{ return ... }'

console.log(newArr3);

var teste = function teste() {
  // também é possível criar funções arrow dessa forma, porém recomenda-se usar 'function'
  return 'teste';
};

console.log(teste());

var teste2 = function teste2() {
  return 'teste';
}; // assim também funciona


console.log(teste2());

var retornaArr = function retornaArr() {
  return [1, 2, 3];
};

console.log(retornaArr());

var retornaObj = function retornaObj() {
  return {
    nome: 'Cadu'
  };
}; // para retornar objeto, deve-se usar parênteses em volta das chaves


console.log(retornaObj);
