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
  this.name = name;
  Soldier.call(this, health, strength);
}
Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.attack = function() {
  return this.strength;
}
Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health > 0) {
    return (this.name + " has received " + damage + " point of damage.");
  } else {
    return (this.name + " has died in act of combat");
  }
}

Viking.prototype.battleCry = function () {
  console.log("Odin Owns You All!");
}


// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}
Saxon.prototype.attack = function() {
  this.strength;
}

// War
function War() {}
