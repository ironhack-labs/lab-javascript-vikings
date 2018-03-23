// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function() {
    return this.strength;
  };
  this.receiveDamage = function(attack) {
    this.health -= attack;
  };
}

// Viking
function Viking(name, health, strength) {

}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
function Saxon() {}

// War
function War() {}
