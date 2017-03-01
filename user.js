'use strict';

// store all users
var allUsers = [];

// create constructor for new user
function User(name, drink) {
  this.name = name;
  this.drink = 'images/' + drink;
  this.score = 0;
}

// Store All User Data to localStorage
function loadData(load) {
  if (localStorage['userData']) {
  var userDataLSString = localStorage['userData'];
  load = JSON.parse(userDataLSString);
  } else {
    console.log('loadData() :: no userData key found in localStorage object');
  }
}

function storeData(store) {
  var userDataJSON = JSON.stringify(allUsers);
  localStorage.setItem(store, userDataJSON);
}

// Gather User Data //
// add event listener to the user submission form
var userForm = document.getElementById('user-form');
userForm.addEventListener('submit', generateUser);

// generate a new user from the event handler
function generateUser(event) {
  console.log('generateUser() :: ***fired***')
  event.preventDefault();
  loadData(allUsers);
  var userName = event.target.username.value;
  var radios = event.target.avatar;

  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked === true) {
      var drinkSelected = (radios[i].value);
    }
  }
  var userDrink = drinkSelected;

  // check to see if user already exists, overwrite if so
  var newUser = new User(userName, userDrink);
  var userNameConflict = false;
  for (var i = 0; i < allUsers.length; i++) {
    if (allUsers[i].name === newUser.name) {
      allUsers[i] = newUser;
      userNameConflict = true;
      console.log('generateUser() :: name already exists; overwriting user object at index ' + i + ' of allUsers'); // consider giving user-visible feedback
      break;
    }
  }

  if (userNameConflict = false) {
      allUsers.push(newUser);
  }

  event.target.username.value = '';

  storeData('userData');
  resetIcon();
}

// Start Game and Retrieve Data
var startButton = document.getElementById('play');
startButton.addEventListener('click', loadGame);

function loadGame(event) {
  event.preventDefault();
  window.location.replace('category.html');
}


//Reset drink icons after user selection
function resetIcon() {
  var resetCocktail = document.getElementById('cocktail');
  var resetTea = document.getElementById('tea');
  var resetWine = document.getElementById('wine-glass');
  var resetBeer = document.getElementById('beer-mug');
  resetCocktail.checked = false;
  resetTea.checked = false;
  resetWine.checked = false;
  resetBeer.checked = false;
}