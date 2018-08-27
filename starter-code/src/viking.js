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
  this.health -= damage;
  if (this.health <= 0) {
    return this.name + " has died in act of combat";
  } else {
    return this.name + " has received " + damage + " points of damage";
  }
};
Viking.prototype.battleCry = function () {
  return "Odin Owns You All!";
};
// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;
Saxon.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if (this.health <= 0) {
    return "A Saxon has died in combat";
  } else {
    return "A Saxon has received " + damage + " points of damage";
  }
};

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}
War.prototype.addViking = function (viking) {
  this.vikingArmy.push(viking);
};
War.prototype.addSaxon = function (saxon) {
  this.saxonArmy.push(saxon);
};
War.prototype.vikingAttack = function () {
  randomViking = Math.floor(Math.random() * this.vikingArmy.length);
  randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
  result = this.saxonArmy[randomSaxon].receiveDamage(
    this.vikingArmy[randomViking].attack()
  );
  if (this.saxonArmy[randomSaxon].health <= 0) {
    this.saxonArmy.splice(randomSaxon, 1);
  }
  return result;
};
War.prototype.saxonAttack = function () {
  randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
  randomViking = Math.floor(Math.random() * this.vikingArmy.length);
  result = this.vikingArmy[randomViking].receiveDamage(
    this.saxonArmy[randomSaxon].attack()
  );
  if (this.vikingArmy[randomViking].health <= 0) {
    this.vikingArmy.splice(randomViking, 1);
  }
  return result;
};
War.prototype.showStatus = function () {
  if (this.saxonArmy.length == 0) {
    result = "Vikings have won the war of the century!";
  } else if (this.vikingArmy.length == 0) {
    result = "Saxons have fought for their lives and survive another day...";
  } else {
    result = "Vikings and Saxons are still in the thick of battle.";
  }
  return result;
};
