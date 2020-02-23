import api from './api'

class App {
  constructor() {
    this.repositories = [];
    this.formEl = document.getElementById('repo-form');
    this.inputEl = document.querySelector('input[name=repository]');
    this.listEl = document.getElementById('repo-list');
    this.registerHandlers();
  }

  registerHandlers() {
    this.formEl.onsubmit = event => this.addRepository(event);
  }

  async addRepository(event) {
    event.preventDefault();
    
    const repoInput = this.inputEl.value;
    if(repoInput.length === 0)
      return;

    const response = await api.get(`/repos/${repoInput}`);
    console.log(response);
    const{ name, description, html_url, owner: { avatar_url }} = response.data; // desestruturação

    this.repositories.push({
      name,
      description,
      avatar_url,
      html_url
    });
    this.inputEl.value = '';
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
      linkEl.setAttribute('href', repo.html_url);
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
