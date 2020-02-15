const usuario = {
  nome: 'Cadu',
  idade: 27,
  endereco: {
    cidade: 'Matão',
    uf: 'SP'
  },
};

// forma padrão:
//const nome = usuario.nome;
//const idade = usuario.idade;
//const cidade = usuario.endereco.cidade;

// usando desestruturação:
const { nome, idade, endereco: { cidade } } = usuario; // aliementa as três variáveis
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNomeIdade({nome, idade}) { // pode-se passar os atributos do objeto como um novo objeto no parâmetro da função
  console.log(nome, idade);
}

mostraNomeIdade(usuario);