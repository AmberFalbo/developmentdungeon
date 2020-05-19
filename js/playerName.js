'use strict';

document.getElementById('playerName').addEventListener('submit', function handler(event){
  event.preventDefault();

  var nameOfPlayer = event.target.namePlayer.value;
  new PlayerData(nameOfPlayer);

  setLocalStorage();

  location.href = 'memory.html';
});
