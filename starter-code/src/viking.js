// Soldier


function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
  return this.strength
}


Soldier.prototype.receiveDamage = function(damage) {
  this.health = this.health - damage;
}


// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = this;
}


Viking.prototype = Object.create(Soldier.prototype);



// Saxon
function Saxon() {}

// War
function War() {}


