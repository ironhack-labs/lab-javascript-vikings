

// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

function randomNumber(army) {
  return Math.floor(Math.random() * army.length);
}

Viking.prototype = Object.create(Soldier.prototype);
Saxon.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;
Saxon.prototype.constructor = Saxon;

Soldier.prototype.attack = function () {
  return this.strength;
};

Soldier.prototype.receiveDamage = function (damage) {
  this.health -= damage;
};

Viking.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if (this.health > 0) {
    return this.name + ' has received ' + damage + ' points of damage';
  }
  return this.name + ' has died in act of combat';
};

Viking.prototype.battleCry = function () {
  return 'Odin Owns You All!';
};

Saxon.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if (this.health > 0) {
    return 'A Saxon has received ' + damage + ' points of damage';
  }
  return 'A Saxon has died in combat';
};

War.prototype.addViking = function (viking) {
  this.vikingArmy.push(viking);
};

War.prototype.addSaxon = function (saxon) {
  this.saxonArmy.push(saxon);
};

War.prototype.vikingAttack = function () {
  var randomSaxon = randomNumber(this.saxonArmy);
  var randomViking = randomNumber(this.vikingArmy);
  var attackOutcome = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].attack());
  if (this.saxonArmy[randomSaxon].health <= 0) {
    this.saxonArmy.splice(randomSaxon, 1);
  }
  return attackOutcome;
};

War.prototype.saxonAttack = function () {
  var randomSaxon = randomNumber(this.saxonArmy);
  var randomViking = randomNumber(this.vikingArmy);
  var attackOutcome = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].attack());
  if (this.vikingArmy[randomViking].health <= 0) {
    this.vikingArmy.splice(randomViking, 1);
  }
  return attackOutcome;
};

War.prototype.showStatus = function () {
  if (this.saxonArmy.length === 0) {
    return 'Vikings have won the war of the century!';
  }
  if (this.vikingArmy.length === 0) {
    return 'Saxons have fought for their lives and survive another day...';
  }
  return 'Vikings and Saxons are still in the thick of battle.';
};
