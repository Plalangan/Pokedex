document.write('<h1>Starter Pokemon:</h1>');


var charmander = {
  name: 'Charmander',
  height: 5,
  type: 'Fire',
};

var bulbasur = {
  name: 'Bulbasur',
  height: 3,
  type: 'Grass'
};

var squirtle = {
  name: 'Squirtle',
  height: 4,
  type: 'Water'
};


var $pokemonList = document.querySelector('ul');


var pokemonRepository = (function () {
  var repository = [charmander, squirtle, bulbasur];

  function add(pokemon) {
    repository.push(pokemon);
  }

  function getAll() {
    return repository.forEach(addListItem);

  }

  function addListItem(pokemon){
    var $addListItem = document.createElement('li');
    var $button =  document.createElement('button');
    $button.innerText = pokemon.name;
    $button.classList.add('button');
    $addListItem.appendChild($button);
    $pokemonList.appendChild($addListItem);
    };


  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();




pokemonRepository.getAll();
