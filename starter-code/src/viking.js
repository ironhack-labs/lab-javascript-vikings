// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function attack () {
  return this.strength;
  }
  // should remove the received damage from the health property
  Soldier.prototype.receiveDamage = function (damage) {
    this.health -= damage;

  } 
}



// Viking
function Viking(name, health, strength) {
  Soldier.call(this, name, health, strength);
  this.name = name;
  this.health = health;
  this.strength = strength;
  if (Viking.health < 0 ) {
  return name + " has received " + Soldier.damage + " points of damage ";
  } else {
    return name  + " has died in act of combat ", if the Viking dies
  }
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
function Saxon() {}

// War
function War() {}
