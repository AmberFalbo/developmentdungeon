'use strict';

// Empty array ready to hold all the PlayerData Objects
var allPlayers = [];

// currentPlayer is the last item of the array
var currentPlayer = allPlayers[allPlayers.length-1];

// PlayerData 
function PlayerData(name, score=0){
  this.name = name;
  this.score = score;
  allPlayers.push(this);
}

// set Local storage with player data
function setLocalStorage(){
  var playerSetter = JSON.stringify(allPlayers);
  localStorage.setItem('players', playerSetter);
}

// get local storage player data
function getLocalStorage(){
  // Reset the array
  allPlayers = [];
  //get items from local storage
  var playerGetter = localStorage.getItem('players');
  // parse items from json into JS
  var parsedPlayers = JSON.parse(playerGetter);
  // Keep the array to 10 items
  while(parsedPlayers.length > 10){
    parsedPlayers.shift();
  }

  // Pass the array through the constructor
  for(var i = 0; i < parsedPlayers.length;i++){
    new PlayerData(
      parsedPlayers[i].name,
      parsedPlayers[i].score
    );
  }
  // Redefine the current player
  currentPlayer = allPlayers[allPlayers.length-1];
}

// Make sure local storage isn't empty
function storageChecker(){
  if (localStorage.getItem('players') !== null){
    getLocalStorage();
  }
}

// Start the whole process
storageChecker();

// Event listener to send the players score to local storage
document.getElementById('goto').addEventListener('click', function handler(){
  if(localStorage.getItem('players') === null){
    setLocalStorage();
  }
});
