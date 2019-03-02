// Soldier
function Soldier( healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
}

Soldier.prototype.attack = function() {
  return this.strength;
}

Soldier.prototype.receiveDamage = function(damage) {
  this.health = this.health - damage;
}

// Viking
function Viking(nameArg, healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg)
  this.name = nameArg;
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function (damage) {
  this.health = this.health - damage;
  if (this.health <= 0 ) {
    return this.name + " has died in act of combat"
  } else {
    return this.name + " has received " + damage + " points of damage"
  }
}

Viking.prototype.battleCry = function () {
  return "Odin Owns You All!"
}

// Saxon
function Saxon(healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg)
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function (damage) {
  this.health = this.health - damage;
  if (this.health <= 0 ) {
    return "A Saxon has died in combat"
  } else {
    return "A Saxon has received " + damage + " points of damage"
  }
}

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(Viking) {
  this.vikingArmy.push(Viking);
}

War.prototype.addSaxon = function(Saxon) {
  this.saxonArmy.push(Saxon);
}

War.prototype.vikingAttack = function() {
  var vikingDamage = this.vikingArmy[0].strength; 
  var fightResult = this.saxonArmy[0].receiveDamage(vikingDamage);

  if (this.saxonArmy[0].health <= 0) {
    this.saxonArmy.pop()
  }

  return fightResult
}

War.prototype.saxonAttack = function () {
  var saxonDamage = this.saxonArmy[0].strength;
  var fightResult = this.vikingArmy[0].receiveDamage(saxonDamage);

  if (this.vikingArmy[0].health <= 0) {
    this.vikingArmy.pop()
  }

  return fightResult
}

War.prototype.showStatus = function () {
  if (this.saxonArmy.length <= 0 ) {
    return "Vikings have won the war of the century!"
  } else if (this.vikingArmy.length <=0 ){
    return "Saxons have fought for their lives and survive another day..."
  } else {
    return "Vikings and Saxons are still in the thick of battle."
  }
}
