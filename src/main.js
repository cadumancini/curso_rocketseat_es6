const minhaPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => {resolve('OK')}, 2000);
});

// antes era feito da seguinte forma:
// minhaPromise()
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => {

//   });

// agora é feito assim:
// ao definir uma função como async, ela automaticamente cria uma Promise
async function executaPromise(){
  //const response = await minhaPromise();
  //console.log(response);

  // o await faz com que a próxima linha só execute quando a primeira acabar. assim não precisa ficar chamando then/catch toda vez.
  // não é possível usar await fora de uma função async
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
}
executaPromise();

// pode-se usar também como arrow function:
const executaPromise2 = async () => {
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
};
executaPromise2();