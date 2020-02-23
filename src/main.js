class App {
  constructor() {
    this.repositories = [];
    this.formEl = document.getElementById('repo-form');
    this.listEl = document.getElementById('repo-list');
    this.registerHandlers();
  }

  registerHandlers() {
    this.formEl.onsubmit = event => this.addRepository(event);
  }

  addRepository(event) {
    event.preventDefault();
    this.repositories.push({
      name: 'rocketseat.com.br',
      description: 'Tire a sua ideia do papel e dê vida à sua startup.',
      avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
      url: 'http://github.com/rocketseat/rocketseat.com.br'
    });
    this.render();
  }

  render() {  
    this.listEl.innerHTML = '';
    this.repositories.forEach(repo => { // o forEach passa por cada item do array, o map serve para retornar em outro array
      let imgEl = document.createElement('img');
      imgEl.setAttribute('src', repo.avatar_url);

      let titleEl = document.createElement('strong');
      titleEl.appendChild(document.createTextNode(repo.name));

      let descrEl = document.createElement('p');
      descrEl.appendChild(document.createTextNode(repo.description));

      let linkEl = document.createElement('a');
      linkEl.setAttribute('target', '_blank');
      linkEl.setAttribute('href', repo.url);
      linkEl.appendChild(document.createTextNode('Acessar'));

      let listItemEl = document.createElement('li');
      listItemEl.appendChild(imgEl);
      listItemEl.appendChild(titleEl);
      listItemEl.appendChild(descrEl);
      listItemEl.appendChild(linkEl);

      this.listEl.appendChild(listItemEl);
    }); 
  }
}

new App();
