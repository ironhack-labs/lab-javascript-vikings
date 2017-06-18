// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
}
// Prototype for Soldiers
Soldier.prototype.attack = function attack() {
  return this.strength;
};
Soldier.prototype.receiveDamage = function receiveDamage(theDamage) {
  this.health -= theDamage;
};

// Prototype - Set the Prototype for Vikings from Soldier
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;
// Viking Funct
function Viking(name, healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
  this.name = name;
}
// Prototype - Set the prototype for Viking
Viking.prototype.receiveDamage = function receiveDamage(theDamage) {
  this.health -= theDamage;
  if (this.health > 0) {
    return this.name + " has received " + theDamage + " points of damage";
  } else{
    return this.name + " has died in act of combat";
  }
};
Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
};

// Saxon function
function Saxon(healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
}

// This function cant pass the Jasmine test. I check it
// with my mate and she has the same than me.
// TA please save the Saxon Damage Return string.
Saxon.prototype.receiveDamage = function receiveDamage(theDamage) {
  this.health -= theDamage;
  if (this.health > 0) {
    return 'A Saxon has received " + theDamage + " points of damage';
  } else {
    return 'A Saxon has died in combat';
  }
};

// Prototype - Set the prototype for Saxon from Soldier
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}
War.prototype.addViking = function addViking(Viking) {
  this.vikingArmy.push(Viking);
};
War.prototype.addSaxon = function addSaxon(Saxon) {
  this.saxonArmy.push(Saxon);
};
War.prototype.vikingAttack = function vikingAttack() {
  var statusSaxon = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);
  if (this.saxonArmy[0].health < 1) {
    this.saxonArmy.splice(0, 1);
  }
  return statusSaxon;
};
War.prototype.saxonAttack = function saxonAttack() {
  var statusViking = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);
  if (this.vikingArmy.health <= 0) {
    this.vikingArmy[0].splice(0,1);
  }
  return statusViking;
};
War.prototype.showStatus = function showStatus() {
  if (this.saxonArmy.length === 0) {
    return "Vikings have won the war of the century!";
  } else if (this.vikingArmy.length === 0) {
    return "Saxons have fought for their lives and survive another day...";
  } else {
    return "Vikings and Saxons are still in the thick of battle.";
  }
};
