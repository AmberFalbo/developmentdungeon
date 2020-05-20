'use strict';

var allPlayers = [];

if(allPlayers.length > 10){
  allPlayers.shift();
}

var currentPlayer = allPlayers[allPlayers.length-1];

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
  allPlayers = [];
  var playerGetter = localStorage.getItem('players');
  var parsedPlayers = JSON.parse(playerGetter);
  for(var i = 0; i < parsedPlayers.length;i++){
    new PlayerData(
      parsedPlayers[i].name,
      parsedPlayers[i].score
    );
  }
  currentPlayer = allPlayers[allPlayers.length-1];
}

function storageChecker(){
  if (localStorage.getItem('players') !== null){
    getLocalStorage();
  }
}

storageChecker();

document.getElementById('goto').addEventListener('click', function handler(){
  if(localStorage.getItem('players') === null){
    setLocalStorage();
  }
});
