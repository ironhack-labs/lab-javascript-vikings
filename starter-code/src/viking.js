// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
}

// Soldier Methods
Soldier.prototype.attack = function () {
  return this.strength;
}

Soldier.prototype.receiveDamage = function (damage) {
  this.health -= damage;
}

// Viking

function Viking (name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
}

// Viking -Soldier Method Inheritance
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Viking Methods
Viking.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if (this.health > 0) {
    return this.name + " has received " + damage + " points of damage";
  } else {
    return this.name + " has died in act of combat";
  }
}

Viking.prototype.battleCry = function () {
  return "Odin Owns You All!";
}

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
}
  
// Saxon -Soldier Method Inheritance
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// Viking Methods
Saxon.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if (this.health > 0) {
    return "A Saxon has received " + damage + " points of damage";
  } else {
    return "A Saxon has died in combat";
  }
}

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

// War Methods
War.prototype.addViking = function (viking) {
  this.vikingArmy.push(viking);
}

War.prototype.addSaxon = function (saxon) {
  this.saxonArmy.push(saxon);
}

War.prototype.vikingAttack = function () {
  var indexViking = Math.floor(Math.random() * this.vikingArmy.length);
  var indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
  var isSaxonDead = this.saxonArmy[indexSaxon].receiveDamage(this.vikingArmy[indexViking].strength);
  if (isSaxonDead === "A Saxon has died in combat"){
    this.saxonArmy.splice(indexSaxon,1);
  }
  return isSaxonDead;
}

War.prototype.saxonAttack = function () {
  var indexViking = Math.floor(Math.random() * this.vikingArmy.length);
  var indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
  var isVikingDead = this.vikingArmy[indexViking].receiveDamage(this.saxonArmy[indexSaxon].strength);
  if (isVikingDead === this.vikingArmy[indexViking].name + " has died in act of combat"){
    this.vikingArmy.splice(indexViking,1);
  }
  return isVikingDead;
}

War.prototype.showStatus = function () {
  if (this.vikingArmy.length >= 1 && this.saxonArmy.length <= 0) {
    return "Vikings have won the war of the century!";
  } else if (this.vikingArmy.length <= 0 && this.saxonArmy.length >= 1) {
    return "Saxons have fought for their lives and survive another day...";
  } else if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) {
    return "Vikings and Saxons are still in the thick of battle.";
  }
}