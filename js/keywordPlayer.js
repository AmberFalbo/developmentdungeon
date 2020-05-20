'use strict';

// Variable to set the player's score before setting into local storage
var currentPlayersScore = 0;

// Set current PlayerData object to current players
function setCurrentPlayersScore(){
  currentPlayer.score += currentPlayersScore;
}

//event listener to load score into Local storage
document.getElementById('nextpage').addEventListener('submit', function handler(event){
  event.preventDefault();
  // Set the score set local storage load next page.
  setCurrentPlayersScore();
  setLocalStorage();

  location.href = 'highscores.html';
});
