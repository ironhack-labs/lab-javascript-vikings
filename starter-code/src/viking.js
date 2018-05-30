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
function Viking(nameArg, healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
  this.name = nameArg;
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if (this.health > 0) {
    return this.name + " has received " + damage + " points of damage";
  } else {
    return this.name + " has died in act of combat";
  }
}
Viking.prototype.battleCry = function () {
  return "Odin Owns You All!";
}

// Saxon
function Saxon(healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if (this.health > 0) {
    return "A Saxon has received " + damage + " points of damage";
  } else return "A Saxon has died in combat";
}


// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}
War.prototype.addViking = function (vikingFigther) {
  this.vikingArmy.push(vikingFigther);
}
War.prototype.addSaxon = function (saxonFigther) {
  this.saxonArmy.push(saxonFigther);
}
War.prototype.vikingAttack = function () {
  var vikingFigther = this.vikingArmy[Math.floor(Math.random()* this.vikingArmy.length)];
  var saxonFigther = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
  var temp= 0;
  
  temp=saxonFigther.receiveDamage(vikingFigther.strength);
  if (saxonFigther.health <=0) {this.saxonArmy.splice(saxonFigther,1);}
  return temp;
}
War.prototype.saxonAttack = function () {
  var vikingFigther = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
  var saxonFigther = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
  var temp = 0;

  temp = vikingFigther.receiveDamage(saxonFigther.strength);
  if (vikingFigther.health <=0) {
    this.vikingArmy.splice(vikingFigther, 1);
  }
  return temp;
}
War.prototype.showStatus = function () {
  if (this.vikingArmy.length < 1) {
    return "Saxons have fought for their lives and survive another day...";
  } else if (this.saxonArmy.length < 1) {
    return "Vikings have won the war of the century!";
  } else return "Vikings and Saxons are still in the thick of battle.";
}