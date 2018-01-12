// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
  return this.strength;
};
Soldier.prototype.receiveDamage = function(damage) {
  this.health = this.health - damage;
};

var soldier1 = new Soldier(2, 4);
soldier1.attack();

soldier1.receiveDamage(2);
console.log(soldier1);

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function(damage) {
  this.health = this.health - damage;
  if (this.health !== 0) {
    return this.name + " has received " + damage + " points of damage";
  } else {
    return this.name + " has died in act of combat";
  }
};

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
};
var soldier1 = new Soldier(4, 5);
var soldier2 = new Soldier(5, 9);
var viking1 = new Viking("Herald", 30, 12);
var viking2 = new Viking("Raagnär", 55, 13);

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}
Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function(damage) {
  this.health = this.health - damage;
  if (this.health !== 0) {
    return "A Saxon has received " + damage + " points of damage";
  } else {
    return "A Saxon has died in combat";
  }
};

// War

function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
  this.vikingAttack = [];
  this.saxonAttack = [];
  this.showStatus = [];
}
