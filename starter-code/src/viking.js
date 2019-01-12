// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
}

Soldier.prototype.attack = function() {
  return this.strength;
}

Soldier.prototype.receiveDamage = function(damageArg) {
  this.health -= damageArg;
}

// Viking
function Viking(nameArg, healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
  this.name = nameArg;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damageArg) {
  this.health -= damageArg;
  if (this.health > 0) {
    return `${this.name} has received ${damageArg} points of damage`;
  } else {
    return `${this.name} has died in act of combat`;
  }
}

Viking.prototype.battleCry = function() {
  return `Odin Owns You All!`;
}

// Saxon
function Saxon(healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damageArg) {
  this.health -= damageArg;
  if (this.health > 0) {
    return `A Saxon has received ${damageArg} points of damage`;
  } else {
    return `A Saxon has died in combat`;
  }
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
  var saxonIndex =  Math.floor(Math.random() * this.saxonArmy.length);
  var struckSaxon = this.saxonArmy[saxonIndex];
  var aggressorViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
  var vikingAttack = struckSaxon.receiveDamage(aggressorViking.strength);
  if (struckSaxon.health <= 0) {
    this.saxonArmy.splice(saxonIndex, 1);
  }
  return vikingAttack;
}

War.prototype.saxonAttack = function() {
  var vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
  var struckViking = this.vikingArmy[vikingIndex];
  var aggressorSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
  var saxonAttack = struckViking.receiveDamage(aggressorSaxon.strength);
  if (struckViking.health <= 0) {
    this.vikingArmy.splice(vikingIndex, 1);
  }
  return saxonAttack;
}

War.prototype.showStatus = function() {
  if (this.saxonArmy.length === 0) {
    return `Vikings have won the war of the century!`;
  } else if (this.vikingArmy.length === 0) {
    return `Saxons have fought for their lives and survive another day...`;
  } else {
    return `Vikings and Saxons are still in the thick of battle.`;
  }
}
