// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function () {
  return this.strength;
}

Soldier.prototype.receiveDamage = function(damage) {
  this.health -= damage;
}
// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.constructor = Viking;

Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health > 0) {
    return  this.name + " has received " + damage + " points of damage";
  } else {
    return this.name + " has died in act of combat";
  }
}

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
}

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health > 0) {
    return "A Saxon has received " + damage + " points of damage";
  } else {
    return "A Saxon has died in combat";
  }
};


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
  
  var randomSaxonIndex = Math.floor(Math.random(this.saxonArmy.length));
  var injuredSaxon = this.saxonArmy[randomSaxonIndex];

  var randomVikingIndex = Math.floor(Math.random(this.vikingArmy.length));
  var vikingAggressor = this.vikingArmy[randomVikingIndex];

  var result = injuredSaxon.receiveDamage(vikingAggressor.strength);
  if (injuredSaxon.health < 1) {
    this.saxonArmy.splice([randomSaxonIndex, 1]);
  }
  return result;
}

War.prototype.saxonAttack = function() {
  
  var randomVikingIndex = Math.floor(Math.random(this.vikingArmy.length));
  var injuredViking = this.vikingArmy[randomVikingIndex];

  var randomSaxonIndex = Math.floor(Math.random(this.saxonArmy.length));
  var saxonAggressor = this.saxonArmy[randomSaxonIndex];
  
  var result = injuredViking.receiveDamage(saxonAggressor.strength);
  if (injuredViking.health < 1) {
    this.vikingArmy.splice([randomVikingIndex, 1]);
  }
  return result;
}

War.prototype.showStatus = function() {
  if (this.vikingArmy.length < 1) {
    return "Saxons have fought for their lives and survive another day...";
  } else if (this.saxonArmy.length < 1) {
    return "Vikings have won the war of the century!";
  } else {
    return "Vikings and Saxons are still in the thick of battle.";
  }
}