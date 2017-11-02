// Soldier
function Soldier (healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
  this.attack = function () {
    return this.strength;
  };
  this.receiveDamage = function (damage) {
    this.health-=damage;
  };
}

// Viking
function Viking (nameArg1, healthArg1, strengthArg1) {
  Soldier.call (this, healthArg1, strengthArg1);
  this.name = nameArg1;
  this.attack = function () {
    return this.strength;
  };
  this.receiveDamage = function (damage) {
    this.health-=damage;
    if (this.health>0) {
      return this.name + " has received " + damage + " points of damage";
    }
    else {
      return this.name + " has died in act of combat";
    }
  };
  this.battleCry=function () {
    return "Odin Owns You All!";
  };
}
Viking.prototype = Object.create(Soldier.prototype);

// Saxon
function Saxon (healthArg2, strengthArg2) {
  Soldier.call (this, healthArg2, strengthArg2);
  this.attack = function () {
    return this.strength;
  };
  this.receiveDamage = function (damage) {
    this.health-=damage;
    if (this.health>0) {
      return "A Saxon has received " + damage + " points of damage";
    }
    else {
      return "A Saxon has died in combat";
  }
 };
}
Saxon.prototype = Object.create(Soldier.prototype);

// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
  this.addViking = function () {};
  this.addSaxon = function () {};
  this.vikingAttack = function () {};
  this.showStatus = function () {};
}
