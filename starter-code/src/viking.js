"use strict";

// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
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

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage) {
  this.health = this.health - damage;
  return this.health <= 0 ? `${this.name} has died in act of combat`: `${this.name} has received ${damage} points of damage`;
}

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
};


// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage) {
  this.health = this.health - damage;
  return this.health <= 0 ? "A Saxon has died in combat" : `A Saxon has received ${damage} points of damage`
}
// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(viking) {
  this.vikingArmy.push(viking);
}

War.prototype.addSaxon = function(saxon) {
  this.saxonArmy.push(saxon);
}

War.prototype.vikingAttack = function() {
  var attackingViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

  var victimIndex = Math.floor(Math.random() * this.saxonArmy.length);
  var victim = this.saxonArmy[victimIndex];
  var result = victim.receiveDamage(attackingViking.strength);

  if (victim.health <= 0) this.saxonArmy.splice(victimIndex, 1);

  return result;
};


War.prototype.saxonAttack = function() {
  var attackingSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

  var victimIndex = Math.floor(Math.random() * this.vikingArmy.length);
  var victim = this.vikingArmy[victimIndex];
  var result = victim.receiveDamage(attackingSaxon.strength);

  if (victim.health <= 0) this.vikingArmy.splice(victimIndex, 1);

  return result;
};

War.prototype.showStatus = function() {
  if (this.vikingArmy.length === 0) return "Saxons have fought for their lives and survive another day...";

  if(this.saxonArmy.length === 0) return "Vikings have won the war of the century!";
  
  return "Vikings and Saxons are still in the thick of battle.";
};
