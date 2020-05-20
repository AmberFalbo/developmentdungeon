'use strict';

// Event listener to set user's name into local storage
document.getElementById('playerName').addEventListener('submit', function handler(event){
  event.preventDefault();

  var nameOfPlayer = event.target.namePlayer.value;
  new PlayerData(nameOfPlayer);

  setLocalStorage();

  location.href = 'memory.html';
});
