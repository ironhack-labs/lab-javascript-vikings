// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
  return this.strength;
}

Soldier.prototype.receiveDamage = function(damage) {
  this.health -= damage;
}

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!"
}

Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  return this.health > 0 ? this.name + " has received " + damage + " points of damage" : this.name + " has died in act of combat";
}

// Saxon
function Saxon (health, strength) {
  Soldier.call(this, health, strength);
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  // if (this.health > 0) {
  //   return "A Saxon has received " + damage + " points of damage";
  // } else {
  //   return "A Saxon has died in combat";
  // }
  return this.health > 0 ? "A Saxon has received " + damage + " points of damage" : "A Saxon has died in combat";
}


// War
function War (){
  var vikingArmy = [];
  var saxonArmy = [];
}

function addViking (viking) {
  vikingArmy.push(viking);
}

function addSaxon (saxon) {
  vikingArmy.push(saxon);
}

function vikingAttack () {
  var vikingRandom = vikingArray[Math.floor(vikingArray.length * Math.random())];
  var saxonRandom = saxonArray[Math.floor(saxonArray.length * Math.random())];
  var result = saxonRandom.receiveDamage(vikingRandom.strength);
  
  if (saxonRandom.health <= 0){
     saxonArray.splice(indexOf(saxonRandom), 1);
  }
  
  return result;
}
