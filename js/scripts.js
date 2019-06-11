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


for (var i = 0; i < repository.length; i++) {
  document.write('<br>' + '<h1>Name: ' + repository[i].name);
  document.write('<h1>Type: ' + repository[i].type);
  document.write('<h1>Height: ' + repository[i].height + ' Feet</h1>');
  if (repository[i].height >= 5) {
    document.write('<h2>Wow that is big!</h2>');
  }
}
