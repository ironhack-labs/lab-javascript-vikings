// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}
Soldier.prototype.attack = function() {
  return this.strength;
}
Soldier.prototype.receiveDamage = function(damage) {
  this.health = this.health - damage;
}

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
  }
this.name = function() {return this.firstName + " " + this.lastName;};
Soldier.prototype.receiveDamage = function(damage) {
  (health > 0 ? this.name + " has received " + damage + " points of damage" :
    this.name + " has died in act of combat");
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;
// Saxon
function Saxon() {}

// War
function War() {}
