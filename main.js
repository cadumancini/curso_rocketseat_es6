class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List{
  constructor() {
    super(); // chamando constructor() da classe pai
    this.usuario = 'Cadu';
  }

  mostraUsuario() {
    console.log(this.usuario);
  }
}

var MinhaLista = new TodoList();
document.getElementById('novoTodo').onclick = function() {
  MinhaLista.add('Novo ToDo');
}

MinhaLista.mostraUsuario();

/* ---------------------------------------------------------- */
// Métodos static

class TodoList2 {
  constructor() {
    this.todos = [];
  }

  static addTodo() {
    this.todos.push('Novo ToDo');
    console.log(this.todos);
  }
}

// TodoList2.addTodo(); // não funciona, pois método static não enxerga o 'this'. Serve para receber informação, processar e devolver
// classe que tem static geralmente não tem contrutor

class Matematica {
  static soma(a, b) {
    return a + b;
  }
}

console.log(Matematica.soma(1, 2));