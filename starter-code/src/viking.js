// Soldier
function  Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function () {
  return this.strength;
};

Soldier.prototype.receiveDamage = function (damage) {
  this.health -= damage;
};

// Viking

function  Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype); // It is Soldier.prototype and not Soldier because the Object is inherited only through 'prototype' method!
Viking.prototype.constructor = Viking;

Viking.prototype.attack = function () {
  return this.strength;
};

Viking.prototype.receiveDamage = function (damage) {
  this.damage = damage;
  this.health -= this.damage;
  if (this.health !== 0) {
    return this.name + ' has received ' + this.damage + ' points of damage';
  }
  return this.name + ' has died in act of combat';
};

Viking.prototype.battleCry = function () {
  return 'Odin Owns You All!';
};

// Saxon

function  Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function (damage) {
  this.damage = damage;
  this.health -= this.damage;
  if (this.health !== 0) {
    return 'A Saxon has received ' + this.damage + ' points of damage';
  }
  return 'A Saxon has died in combat';
};

// War

function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function (Viking) {
  this.vikingArmy.push(Viking);
};

War.prototype.addSaxon = function (Saxon) {
  this.saxonArmy.push(Saxon);
};

War.prototype.vikingAttack = function () {
  var vikingArmyRandom = this.vikingArmy[0];
  var saxonArmyRandom = this.saxonArmy[0];

  saxonArmyRandom.receiveDamage(vikingArmyRandom.strength);

  if (saxonArmyRandom.health <= 0) {
    this.saxonArmy.pop();
    return 'A Saxon has died in combat';
  }
  return  saxonArmyRandom.name + ' has received ' + vikingArmyRandom.strength + ' points of damage';
};

War.prototype.saxonAttack = function () {
  var vikingArmyRandom = this.vikingArmy[0];
  var saxonArmyRandom = this.saxonArmy[0];

  vikingArmyRandom.receiveDamage(saxonArmyRandom.strength);

  if (vikingArmyRandom.health <= 0) {
    this.vikingArmy.pop();
  }
  return  vikingArmyRandom.name + ' has received ' + saxonArmyRandom.strength + ' points of damage';
};

War.prototype.showStatus = function() {
  if (this.saxonArmy.length == 0) {
    return 'Vikings have won the war of the century!';
  } else if (this.vikingArmy.length == 0) {
    return 'Saxons have fought for their lives and survive another day...';
  } else if (this.saxonArmy.length !== 0 && this.saxonArmy.length !== 0) {
    return 'Vikings and Saxons are still in the thick of battle.';
  }
  return 'Error, please check the array of Viking and/or Saxons to fix the problem';
};
