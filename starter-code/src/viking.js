// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
}

Soldier.prototype.attack = function() {
  return this.strength;
};

Soldier.prototype.receiveDamage = function(damage) {
  this.health = this.health - damage;
};

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function(damage) {
  this.health = this.health - damage;
  if (this.health > 0) {
    return this.name + " has received " + damage + " points of damage";
  } else {
    return this.name + " has died in act of combat";
  }
};

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
};

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function(damage) {
  this.health = this.health - damage;
  if (this.health > 0) {
    return "A Saxon has received " + damage + " points of damage";
  } else {
    return "A Saxon has died in combat";
  }
};

// War
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

War.prototype.vikingAttack = function() {
  var nbSaxon = Math.floor(Math.random() * this.saxonArmy.length);
  var nbViking = Math.floor(Math.random() * this.vikingArmy.length);
  var vikingStrength = this.vikingArmy[nbViking].strength;
  var result = this.saxonArmy[nbSaxon].receiveDamage(vikingStrength);
  if (this.saxonArmy[nbSaxon].health <= 0) {
    this.saxonArmy.splice(nbSaxon, 1);
  }
  return result;
};

War.prototype.saxonAttack = function() {
  var nbSaxon = Math.floor(Math.random() * this.saxonArmy.length);
  var nbViking = Math.floor(Math.random() * this.vikingArmy.length);
  var saxonStrength = this.saxonArmy[nbSaxon].strength;
  var result = this.vikingArmy[nbViking].receiveDamage(saxonStrength);
  if (this.vikingArmy[nbViking].health <= 0) {
    this.vikingArmy.splice(nbViking, 1);
  }
  return result;
};

War.prototype.showStatus = function() {
  if (this.saxonArmy.length === 0) {
    return "Vikings have won the war of the century!";
  } else if (this.vikingArmy.length === 0) {
    return "Saxons have fought for their lives and survive another day...";
  } else {
    return "Vikings and Saxons are still in the thick of battle.";
  }
};