// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
};

Soldier.prototype.attack = function() {
  return this.strength;
};

Soldier.prototype.receiveDamage = function(damage) {
  this.health -= damage;
};

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
  this.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return this.name + " has received " + damage + " points of damage";
    } else {
      return this.name + " has died in act of combat";
    }
  };
  this.battleCry = function() {
    return "Odin Owns You All!";
  };
};

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
  this.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return "A Saxon has received " + damage + " points of damage";
    } else {
      return "A Saxon has died in combat";
    }
  };
};

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];

};

War.prototype.addViking = function(viking) {
  this.vikingArmy.push(viking);
};

War.prototype.addSaxon = function(saxon) {
  this.saxonArmy.push(saxon);
};

War.prototype.vikingAttack = function() {
  var saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
  var vikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
  var defendingSaxon = this.saxonArmy[saxonIndex];
  var attackingViking = this.vikingArmy[vikingIndex];
  return defendingSaxon.receiveDamage(attackingViking.strength);
  if (defendingSaxon.health <= 0) { 
    this.saxonArmy.splice(saxonIndex, 1);
  };
};

War.prototype.saxonAttack = function() {
  var saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
  var vikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
  var attackingSaxon = this.saxonArmy[saxonIndex];
  var defendingViking = this.vikingArmy[vikingIndex];
  var hit = defendingViking.receiveDamage(attackingSaxon.strength);
  if (defendingViking.health <= 0) { 
    this.vikingArmy.splice(vikingIndex, 1);}
  return hit;
}

War.prototype.showStatus = function () {
  if ( this.saxonArmy.length !== 0 && this.vikingArmy.length !== 0) {
    return "Vikings and Saxons are still in the thick of battle.";
  } else if ( this.saxonArmy.length === 0) {
    return "Vikings have won the war of the century!";
  } else {
    return "Saxons have fought for their lives and survive another day...";
  }
}