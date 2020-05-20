'use strict';

// ---------- WIP ----------------
// Test Users for testing May need to be deleted for final production
var trevor = new PlayerData('Trevor', getRandom(1,11) * 100);
var reagan = new PlayerData('Reagan', getRandom(1,11) * 100);
var kamit = new PlayerData('Kamit', getRandom(1,11) * 100);
var amber = new PlayerData('Amber', getRandom(1,11) * 100);
var spaceghost = new PlayerData('Spaceghost', getRandom(1,11) * 100);
var ethil = new PlayerData('Ethil', getRandom(1,11) * 100);
var harry = new PlayerData('Harry Winston', getRandom(1,11) * 100);
var lucipurr = new PlayerData('Lucipurr', getRandom(1,11) * 100);


function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}