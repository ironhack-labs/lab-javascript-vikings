// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
}
// soldier methods
Soldier.prototype.attack = function() {
  return this.strength;
};

Soldier.prototype.receiveDamage = function(theDamage) {
  this.health -= theDamage;
};
// end soldier methods

// Viking
function Viking(nameArg, healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
  this.name = nameArg;
}
// For Inheritance to work
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// viking methods
Viking.prototype.receiveDamage = function(theDamage) {
  this.health -= theDamage;
  if (this.health > 0) {
    return this.name + ' has received ' + theDamage + ' points of damage';
  } else {
    return this.name + ' has died in act of combat';
  }
};
Viking.prototype.battleCry = function() {
  return 'Odin Owns You All!';
};
// / Viking

// Saxon
function Saxon(healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
}
// for inheritance to work
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// saxon methods
Saxon.prototype.receiveDamage = function(theDamage) {
  this.health -= theDamage;
  if (this.health > 0) {
    return 'A Saxon has received ' + theDamage + ' points of damage';
  } else {
    return 'A Saxon has died in combat';
  }
};
// end saxon methods

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}
// war methods
War.prototype.addViking = function(newViking) {
  this.vikingArmy.push(newViking);
};
War.prototype.addSaxon = function(newSaxon) {
  this.saxonArmy.push(newSaxon);
};
War.prototype.vikingAttack = function() {
  var vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
  var attackViking = this.vikingArmy[vikingIndex];
  var saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
  var defendSaxon = this.saxonArmy[saxonIndex];
  var attackResult = defendSaxon.receiveDamage(attackViking.strength);
  if (attackResult.includes('died')) {
    this.saxonArmy.splice(saxonIndex, 1);
  }
  return attackResult;
};
War.prototype.saxonAttack = function() {
  var vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
  var defendViking = this.vikingArmy[vikingIndex];
  var saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
  var attackSaxon = this.saxonArmy[saxonIndex];
  var attackResult = defendViking.receiveDamage(attackSaxon.strength);
  if (attackResult.includes('died')) {
    this.vikingArmy.splice(vikingIndex, 1);
  }
  return attackResult;
};
War.prototype.showStatus = function() {
  if (this.saxonArmy.length === 0) {
    return 'Vikings have won the war of the century!';
  } else if (this.vikingArmy.length === 0) {
    return 'Saxons have fought for their lives and survive another day...';
  } else {
    return 'Vikings and Saxons are still in the thick of battle.';
  }
};
// end war methods
