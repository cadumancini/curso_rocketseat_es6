import showName, { soma as somaFunction, sub } from './functions'; // importando quando tem mais de uma função/classe/etc no arquivo
                                                         // e também pode-se dar um alias.
                                                         // fora do objeto, trazer o que tem 'default' no arquivo
import mult from './mult'; // outra forma de fazer, quando tem apenas uma função/classe/etc
//import multFunction from './mult' // pode-se inclusive mudar o nome ao importar

import * as funcoes from './functions'; // para trazer todos os itens no import, e ser chamado com 'prefixo'. (...)

console.log(somaFunction(2, 3));
console.log(sub(4, 2));
console.log(mult(10, 3));
console.log(showName('Carlos', 'Mancini'));

console.log(funcoes.soma(2, 10));