"use strict";

var arr = [1, 2, 4, 5, 8, 9, 12];
var newArr = arr.map(function (item, index) {
  // a variável da função recebe cada item do array mapeado
  return item * 2; // e retorna ele multiplicado por 2 pra dentro do novo array, neste caso.
  // return item + index; // também poderia ser dessa forma, pois também podemos utilizar o índice do array
});
console.log(newArr);
var sum = arr.reduce(function (total, next) {
  // variáveis para trabalhar a cada iteração, sendo 'next' o item iterado
  return total + next; // vai somando cada item
});
console.log(sum);
var filter = arr.filter(function (item) {
  // o filter faz com que cada item fique ou não no novo array se a condição da função for true
  return item % 2 === 0; // deixando ficar no array apenas os pares.
});
console.log(filter);
var find = arr.find(function (item) {
  // procura dentro do array e retorna os que retornarem true dentro da função
  return item === 4; // procurando itens igual a 4. se não encontrar, vai retornar 'undefined'.
});
console.log(find);
