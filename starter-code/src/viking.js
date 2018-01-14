// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
}

Soldier.prototype.attack = function () {
  return this.strength;
};

Soldier.prototype.receiveDamage = function (damage) {
  this.health -= damage;
};

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function (damage) {
  this.damage = damage;
  this.health -= damage;
  if (this.health > 0) {
    return this.name + ' has received ' + this.damage + ' points of damage';
  } else if (this.health <= 0) {
    return this.name + ' has died in act of combat';
  } 
};

Viking.prototype.battleCry = function () {
  return 'Odin Owns You All!';
};

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function (damage) {
  this.damage = damage;
  this.health -= damage;
  if (this.health > 0) {
    return 'A Saxon has received ' + this.damage + ' points of damage';
  } else if (this.health <= 0) {
    return 'A Saxon has died in combat';
  } 
};

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

// Add Viking
War.prototype.addViking = function (vikingObj) {
  this.vikingArmy.push(vikingObj);
};

// Add Saxon
War.prototype.addSaxon = function (saxonObj) {
  this.saxonArmy.push(saxonObj);
};

// Viking Attack
War.prototype.vikingAttack = function () {
  var saxonI = Math.floor(Math.random() * this.saxonArmy.length);
  var vikingI = Math.floor(Math.random() * this.vikingArmy.length);
  var saxonAttacked = this.saxonArmy[saxonI].receiveDamage(this.vikingArmy[vikingI].strength);
  if (this.saxonArmy[saxonI].health <= 0) {
    this.saxonArmy.splice(saxonI, 1);
  }
  return saxonAttacked;
};

// Saxon Attack
War.prototype.saxonAttack = function () {
  var saxonI = Math.floor(Math.random() * this.saxonArmy.length);
  var vikingI = Math.floor(Math.random() * this.vikingArmy.length);
  var vikingAttacked = this.vikingArmy[vikingI].receiveDamage(this.saxonArmy[saxonI].strength);  
  if (this.vikingArmy[vikingI].health <= 0) {
    this.vikingArmy.splice(vikingI, 1);
  }
  return vikingAttacked;
};

// Show Status
War.prototype.showStatus = function () {
  var message;
  if (this.saxonArmy.length <= 0) {
    message = 'Vikings have won the war of the century!';
  } else if (this.vikingArmy.length <= 0) {
    message = 'Saxons have fought for their lives and survive another day...';
  } else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
    message = 'Vikings and Saxons are still in the thick of battle.';
  }
  return message;
};
