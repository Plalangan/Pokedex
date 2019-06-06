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
  document.write('<p>Name:  ' + repository[i].name + '     ' + 'Height:' + repository[i].height + ' feet' +  '      ' + 'Type:' + repository[i].type   + '</p>');

}
