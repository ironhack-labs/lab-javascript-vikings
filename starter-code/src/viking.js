// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function attack() {
  return this.strength;
  }
  this.receiveDamage = function receiveDamage(damage) {
  this.health = health - damage;
  }
}


// Viking
function Viking() {}

// Saxon
function Saxon() {}

// War
function War() {}
