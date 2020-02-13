"use strict";

var a = 1; // a = 3; // não funciona, pois é constante (read-only). não pode reatribuir valor

var usuario = {
  nome: 'Cadu'
};
usuario.nome = 'Eduardo'; // mutação funciona, o que é diferente de reatribuição

console.log(usuario);
/* ------------------------------------------------ */

function teste(x) {
  var y = 2;

  if (x > 5) {
    console.log(x, y); // aqui ele enxerga o y
  }
} // console.log(y); não funciona, pois variáveis do tipo 'let' são de escopo


teste(10);
