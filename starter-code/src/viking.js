// Soldier constructor
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
Viking.prototype = Object.create(Soldier.prototype); // Inheritance Soldier's prototype

// Constructor of viking
function Viking(name, health, strength) {
  this.name = name;
  this.health = health;
  this.strength = strength;
  // Soldier.call(this, health, strength);
}
Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  console.log(this.health);
  if (this.health > 0)  {
    return this.name + " has received " + damage + " points of damage";
  }
};


// Saxon
function Saxon() {}

// War
function War() {}
