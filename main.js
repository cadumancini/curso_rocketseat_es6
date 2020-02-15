const soma = (a = 3, b = 6) => a + b;

console.log(soma(1)); // como foi passado apenas 1 parâmetro, o JS entende como sendo o primeiro, e atribui o valor padrâo para b.
console.log(soma()); // usa o valor padrâo para os dois parâmetros