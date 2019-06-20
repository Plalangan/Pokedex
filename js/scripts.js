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


function loopBlockFunction (currentPokemon){
  document.write('<br>' + '<h1>Name: ' + currentPokemon.name);
  document.write('<h1>Type: ' + currentPokemon.type);
  document.write('<h1>Height: ' + currentPokemon.height + ' Feet</h1>');
  if (currentPokemon.height >= 5) {
    document.write('<h3>Wow that is big!</h3>')
  }
}

var pokemonRepository = (function () {
  var repository = [charmander, squirtle, bulbasur];

  function add(pokemon) {
    repository.push(pokemon);
  }

  function getAll() {
    return repository.forEach(loopBlockFunction);
  }

  return {
    add: add,
    getAll: getAll
  };
})();




pokemonRepository.getAll();
