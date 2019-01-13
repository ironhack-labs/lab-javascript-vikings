// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
}

Soldier.prototype.attack = function () {
  return this.strength;
}

Soldier.prototype.receiveDamage = function (damageArg) {
  this.health = this.health - damageArg;
}

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function (damageArg) {
  this.health = this.health - damageArg;
  if (this.health > 0) {
    return (`${this.name} has received ${damageArg} points of damage`);
  } else {
    return (`${this.name} has died in act of combat`);
  }
}

Viking.prototype.battleCry = function () {
  return "Odin Owns You All!";
}

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function (damageArg) {
  this.health = this.health - damageArg;
  if (this.health > 0) {
    return `A Saxon has received ${damageArg} points of damage`;
  } else {
    return `A Saxon has died in combat`;
  }
}

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function (viking) {
  this.vikingArmy.push(viking);
}

War.prototype.addSaxon = function (saxon) {
  this.saxonArmy.push(saxon);
}

War.prototype.vikingAttack = function () {
  var indexViking = Math.floor(Math.random() * this.vikingArmy.length);
  var indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
  var returnValue = this.saxonArmy[indexSaxon].receiveDamage(this.vikingArmy[indexViking].strength);

  if (this.saxonArmy[indexSaxon].health <= 0) {
    this.saxonArmy.splice(indexSaxon, 1);
  }

  return returnValue;
}

War.prototype.saxonAttack = function () {
  var indexViking = Math.floor(Math.random() * this.vikingArmy.length);
  var indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
  var returnValue = this.vikingArmy[indexViking].receiveDamage(this.saxonArmy[indexSaxon].strength);
  if (this.vikingArmy[indexViking].health <= 0) {
    this.vikingArmy.splice(indexViking, 1);
  }
  return returnValue;
}

War.prototype.showStatus = function () {
  
   if (this.saxonArmy.length === 0 && this.vikingArmy.length > 0) {
    return (`Vikings have won the war of the century!`);
  } else if (this.saxonArmy.length > 0 && this.vikingArmy.length === 0) {
    return (`Saxons have fought for their lives and survive another day...`);
  } else {
    return (`Vikings and Saxons are still in the thick of battle.`);
  } 
  
}


