'use strict';

var allPlayers = [];

var currentPlayer = allPlayers[allPlayers.length-1];

function PlayerData(name, memoryPlayed=false, keywordPlayed=false){
  this.name = name;
  this.score = 0;
  this.memoryPlayed = memoryPlayed;
  this.keywordPlayed = keywordPlayed;
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
  for(var i = 0; i<parsedPlayers.length;i++){
    new PlayerData(
      parsedPlayers[i].name,
      parsedPlayers[i].score,
      parsedPlayers[i].memoryPlayed,
      parsedPlayers[i].keywordPlayed
    );
  }
}

function storageChecker(){
  if (localStorage.getItem('players') !== null){
    getLocalStorage();
  }
}


// ---------- WIP ----------------
// Test Users for testing Must be deleted for final production
var trevor = new PlayerData('Trevor');
var reagan = new PlayerData('Reagan');
var kamit = new PlayerData('Kamit');
var amber = new PlayerData('Amber');

storageChecker();
