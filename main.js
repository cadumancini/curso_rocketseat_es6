const arr = [1, 3, 4, 5, 6];
const newArr = arr.map((item) => { // Arrow function. não precisa usar o nome function (por ser anônima), e após o parâmetro, usar '=>'
  return item * 2;
});
console.log(newArr);

const newArr2 = arr.map(item => { // Outra forma: quando tem apenas 1 parâmetro, não precisa do '(param)'
  return item * 2;
});
console.log(newArr2);

const newArr3 = arr.map(item => item * 2); // Outra forma: quando tem apenas o return <código>, não precisa do '{ return ... }'
console.log(newArr3);

const teste = () => { // também é possível criar funções arrow dessa forma, porém recomenda-se usar 'function'
  return 'teste';
}
console.log(teste());

const teste2 = () => 'teste'; // assim também funciona
console.log(teste2());

const retornaArr = () => [1, 2, 3];
console.log(retornaArr());

const retornaObj = () => ({ nome: 'Cadu' }); // para retornar objeto, deve-se usar parênteses em volta das chaves
console.log(retornaObj); 