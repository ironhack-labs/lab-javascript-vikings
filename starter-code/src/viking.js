// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
  return this.strength;
};

Soldier.prototype.receiveDamage = function(damage) {
  this.health -= damage;
};


// Viking

function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

attack();

Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (Viking > 0) {
    return (name + " has received" + damage + "points of damage");
  } else {
    return (name + " has died in act of combat");
  }
};

// Saxon
function Saxon() {}

// War
function War() {}
