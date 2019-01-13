"use strict";

// Soldier
function Soldier(health, strength) { 
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function () {
  return this.strength;
}

Soldier.prototype.receiveDamage = function (damage) {
  this.health = this.health - damage;
}

//var soldier1 = new Soldier (300,300);
//soldier1.receiveDamage(50);
//console.log(soldier1.health);
//debugger;

// Viking
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

function Viking(name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
}

Viking.prototype.receiveDamage = function (damage) {
  this.health = this.health - damage;
  if(this.health > 0) {
    return this.name + " has received " + damage + " points of damage";
  } else {
    return this.name + " has died in act of combat";
  }
}

Viking.prototype.battleCry = function () {
  return "Odin Owns You All!";
}
//var viking1 = new Viking ("Harald", 300, 300);
//viking1.receiveDamage(50);
//console.log(viking1.health);
//debugger;

// Saxon
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

function Saxon(health, strength) {
  Soldier.call(this, health, strength); 
}

Saxon.prototype.receiveDamage = function (damage) {
  this.health = this.health - damage;
  if(this.health > 0) {
    console.log("A Saxon has received " + damage + " points of damage");
  } else {
    console.log("A Saxon has died in combat");
  }
}

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function (viking) {
  this.vikingArmy.push(viking);
}
War.prototype.addSaxon = function (saxon) {
  this.saxonArmy.push(saxon);
}

War.prototype.vikingAttack = function () {
  var randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
  var randomIndexViking = Math.floor(Math.random() * this.vikingArmy.length);

  var randomSaxon = this.saxonArmy[randomIndexSaxon];
  var randomViking = this.vikingArmy[randomIndexViking];

  var attack = randomSaxon.receiveDamage(randomViking.strength);

  if (randomSaxon.health <= 0) {
    this.saxonArmy.splice(randomIndexSaxon, 1);
  }
  
  return attack;
} 

War.prototype.saxonAttack = function () {
  var randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
  var randomIndexViking = Math.floor(Math.random() * this.vikingArmy.length);

  var randomSaxon = this.saxonArmy[randomIndexSaxon];
  var randomViking = this.vikingArmy[randomIndexViking];

  var attack = randomViking.receiveDamage(randomSaxon.strength);

  if (randomViking.health <= 0) {
    this.vikingArmy.splice(randomIndexViking, 1);
  }
  
  return attack;
}

War.prototype.showStatus = function () {
  switch (true) {
    case this.saxonArmy.length < 1:
      return "Vikings have won the war of the century!";

    case this.vikingArmy.length < 1:
      return "Saxons have fought for their lives and survive another day...";

    default:
      return "Vikings and Saxons are still in the thick of battle.";
  };
}

debugger;