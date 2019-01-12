// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
}

Soldier.prototype.attack = function () {
  return this.strength;
}
Soldier.prototype.receiveDamage = function (damage) {
  this.health -= damage;
}

// Viking
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

function Viking(name, healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg)
  this.name = name;
}

Viking.prototype.battleCry = function () {
  return 'Odin Owns You All!';
}

Viking.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if (this.health <= 0) {
      return this.name + ' has died in act of combat';
  } else {
      return this.name + ' has received ' + damage + ' points of damage';
  }
}


// Saxon
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

function Saxon(healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg)
}


Saxon.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if (this.health <= 0) {
      return 'A Saxon has died in combat';
  } else {
      return 'A Saxon has received ' + damage + ' points of damage';
  }
}

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}


War.prototype.addViking = function (Viking) {
  this.vikingArmy.push(Viking);
}

War.prototype.addSaxon = function (Saxon) {
  this.saxonArmy.push(Saxon);

}

War.prototype.vikingAttack = function () {
  let saxonSoldier = this.saxonArmy[0];

  if (this.saxonArmy[0].health - this.vikingArmy[0].strength <= 0) {
      this.saxonArmy.splice(0, 1);
  }
  return saxonSoldier.receiveDamage(this.vikingArmy[0].strength);
};

War.prototype.saxonAttack = function () {
  let vikingSoldier = this.vikingArmy[0];

  if (this.vikingArmy[0].health - this.saxonArmy[0].strength <= 0) {
      this.vikingArmy.splice(0, 1);
  }
  return vikingSoldier.receiveDamage(this.saxonArmy[0].strength);
};


War.prototype.showStatus = function () {
if (this.saxonArmy.length === 0){
    return 'Vikings have won the war of the century!';
} else if (this.vikingArmy.length === 0){
    return 'Saxons have fought for their lives and survive another day...';
} else {
    return 'Vikings and Saxons are still in the thick of battle.';
}
}