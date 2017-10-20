// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
  return this.strength;
};

Soldier.prototype.receiveDamage = function(theDamage) {
  this.health -= theDamage;
};

// Viking
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

function Viking (name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype.attack = function() {
  return this.strength;
};

Viking.prototype.receiveDamage = function(theDamage) {
  this.health -= theDamage;
};


// Saxon
function Saxon () {}

// War
function War () {}
