

var $pokemonList = document.querySelector('ul');

var pokemonRepository = (function () {
  var repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
    repository.push(pokemon);
  }

  function getAll() {
    return repository ;

  }

  function addListItem(pokemon){

    //creates li element in DOM
    var $addListItem = document.createElement('li');

    //creates button element in DOM
    var $button =  document.createElement('button');

    // puts pokemon name inside button element
    $button.innerText = pokemon.name;

    //adds 'button' class to 'button' element
    $button.classList.add('button');

    //appends button to li elements
    $addListItem.appendChild($button);

    //adds event listener to button to show pokemon info when clicked
    $button.addEventListener('click', () => showModal(pokemon));

    //appends li elements to ul element
    $pokemonList.appendChild($addListItem);
    }

    //function to show modal with pokemon details
  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function () {
    showModal(pokemon);   });
}

  //function to load list of pokemon fetched from API

  function loadList() {
      return fetch(apiUrl).then(function (response) {
      return response.json();
        }).then(function (json) {
          json.results.forEach(function (item) {
            var pokemon = {
              name: item.name,
              detailsUrl: item.url,
            };
            add(pokemon);
          });
        }).catch(function (e) {
          console.error(e);
        })
      }

  //function to load details for pokemon fetched from API

    function loadDetails(item) {
      var url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = Object.keys(details.types);
      }).catch(function (e) {
        console.error(e);
      });
    }


  //function to create elements inside modal

    function showModal(pokemon){
      var $modalContainer = document.querySelector('#modal-container');
      $modalContainer.innerHTML = '';

  //creates another div element inside of current div
      var modal = document.createElement('div');

  //adds modal class to modal variable
      modal.classList.add('modal');

  //creates close button element
      var closeButtonElement = document.createElement('button');

  //adds closeButton class to the close button element
      closeButtonElement.classList.add('closeButton');

  //adds text inside of close button element
      closeButtonElement.innerText = 'close';

  //adds event listener to hide the modal when close button element is clicked
      closeButtonElement.addEventListener('click', hideModal);


  //creates element for pokemon image
      var imgElement = document.createElement('img');

  //sets attribute to src and also adds class to img element
      imgElement.setAttribute('src', pokemon.imageUrl);
      imgElement.classList.add('pokemonImg');

  //creates h1 element for pokemon name
      var nameElement = document.createElement('h1');

  //puts pokemon name inside of name element
      nameElement.innerText = 'Name: ' + pokemon.name;

  //creates p element for pokemon height
      var heightElement = document.createElement('p');

  //adds pokemon height to the height element
      heightElement.innerText = 'Height: ' + pokemon.height;


  //appends close button to modal
      modal.appendChild(closeButtonElement);
  //appends img element to modal
      modal.appendChild(imgElement);
  //appends name element to modal
      modal.appendChild(nameElement);
  //appends height element to modal
      modal.appendChild(heightElement);
  //appends modal with all elements into modal container element
      $modalContainer.appendChild(modal);
  //adds 'is-visible' class to modal container element to have it show
      $modalContainer.classList.add('is-visible');



}

//creates function hide modal by removing 'is-visible' class
function hideModal(){
  var $modalContainer = document.querySelector('#modal-container');
  $modalContainer.classList.remove('is-visible');
}

//adds event listener so that modal closes when 'esc' is pressed
window.addEventListener('keydown', function(e){
  var $modalContainer = document.querySelector('#modal-container');
  if (e.key === 'Escape' && $modalContainer.classList.contains('is-visible')) {
    hideModal();
  }
});

//adds event listener to hide modal when modal is open and anywhere outside of the modal is clicked
$modalContainer = document.querySelector('#modal-container');
$modalContainer.addEventListener('click', (e) => {
  var target = e.target;
  if (target === $modalContainer){
    hideModal();
  }
});






  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal,
    hideModal: hideModal




  };
})();


pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});

pokemonRepository.showModal();
