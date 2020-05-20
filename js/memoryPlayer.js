'use strict';

var currentPlayersScore = 0;

getLocalStorage();

function setCurrentPlayersScore(){
  currentPlayer.score += currentPlayersScore;
}

document.getElementById('nextpage').addEventListener('submit', function handler(event){
  event.preventDefault();
  // Set the score set local storage load next page.
  setCurrentPlayersScore();
  setLocalStorage();

  location.href = 'keyword.html';
});
