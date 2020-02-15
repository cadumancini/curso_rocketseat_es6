"use strict";

var soma = function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
};

console.log(soma(1)); // como foi passado apenas 1 parâmetro, o JS entende como sendo o primeiro, e atribui o valor padrâo para b.

console.log(soma()); // usa o valor padrâo para os dois parâmetros
