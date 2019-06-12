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

var repository = [charmander, bulbasur, squirtle];


function loopBlockFunction (currentPokemon){
  document.write('<br>' + '<h1>Name: ' + currentPokemon.name);
  document.write('<h1>Type: ' + currentPokemon.type);
  document.write('<h1>Height: ' + currentPokemon.height + ' Feet</h1>');
  if (currentPokemon.height >= 5) {
    document.write('<h2>Wow that is big!</h2')
  }
}


repository.forEach(loopBlockFunction);
