//------------------------------------------------------
// SOLDIER
//------------------------------------------------------
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
}

Soldier.prototype.attack = function() {
  return this.strength;
};

Soldier.prototype.receiveDamage = function(damage) {
  this.health -= damage;
};

//------------------------------------------------------
// VIKING
//------------------------------------------------------
function Viking(nameArg, healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
  this.name = nameArg;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage;

  if (this.health > 0) {
    return this.name + " has received " + damage + " points of damage";
  }
  return this.name + " has died in act of combat";
};

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
};

//------------------------------------------------------
// SAXON
//------------------------------------------------------
function Saxon(healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;

  if (this.health > 0) {
    return "A Saxon has received " + damage + " points of damage";
  }
  return "A Saxon has died in combat";
};

//------------------------------------------------------
// WAR
//------------------------------------------------------
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(viking) {
  this.vikingArmy.push(viking);
};

War.prototype.addSaxon = function(saxon) {
  this.saxonArmy.push(saxon);
};

War.prototype.saxonAttack = function() {
  var vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
  var saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
  var theViking = this.vikingArmy[vikingIndex];
  var theSaxon = this.saxonArmy[saxonIndex];

  var result = theViking.receiveDamage(theSaxon.attack());

  if (theViking.health <= 0) {
    this.vikingArmy.splice(vikingIndex, 1);
  }

  return result;
};

War.prototype.vikingAttack = function() {
  var vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
  var saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
  var theViking = this.vikingArmy[vikingIndex];
  var theSaxon = this.saxonArmy[saxonIndex];

  var result = theSaxon.receiveDamage(theViking.attack());

  if (theSaxon.health <= 0) {
    this.saxonArmy.splice(saxonIndex, 1);
  }

  return result;
};

War.prototype.showStatus = function() {
  if (this.saxonArmy.length === 0) {
    return "Vikings have won the war of the century!";
  } else if (this.vikingArmy.length === 0) {
    return "Saxons have fought for their lives and survive another day...";
  }
  return "Vikings and Saxons are still in the thick of battle.";
};
