var _ = require('lodash');
// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
  return this.strength;
};

Soldier.prototype.receiveDamage = function(damage) {
  this.health -= damage;
};

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health > 0) {
    return this.name + " has received " + damage + " points of damage";
  } else {
    return this.name + " has died in an act of Combat.";
  }
};

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
};

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health > 0) {
    return "A Saxon has received " + damage + " points of damage.";
  } else {
    return "A Saxon has died in an act of Combat.";
  }
};


// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy =[];
}

War.prototype.addViking = function(viking) {
  this.vikingArmy.push(viking);
};

War.prototype.addSaxon = function(saxon) {
  this.saxonArmy.push(saxon);
};

War.prototype.vikingAttack = function() {
  var status = this.showStatus();
  var attackingViking = _.sample(this.vikingArmy);
  var attackedSaxon = _.sample(this.saxonArmy);
  if(_.isEmpty(this.saxonArmy)){
    return status;
  } else{
  var result = attackedSaxon.receiveDamage(attackingViking.attack()) + status;

  if(attackedSaxon.health <= 0){
    _.remove(this.saxonArmy, attackedSaxon);
  }
    return result;
  }
};

War.prototype.saxonAttack = function() {
  var status = this.showStatus();
  var attackingSaxon = _.sample(this.saxonArmy);
  var attackedViking = _.sample(this.vikingArmy);
  if(_.isEmpty(this.vikingArmy)){
    return status;
  } else {
  var result = attackedViking.receiveDamage(attackingSaxon.attack()) + status;

  if(attackedViking.health <= 0){
    _.remove(this.vikingArmy, attackedViking);
  }
    return result;
}
};

War.prototype.showStatus = function() {

  if(_.isEmpty(this.vikingArmy)){
    return " Saxons have fought for their lives and survive another day...";
  } else if (_.isEmpty(this.saxonArmy)){
    return " Vikings have won the war of the century!";
  } else {
    return " Vikings and Saxons are still in the thick of battle.";
  }
};

var Ragnar = new Viking("Ragnar", 10, 20);
var Byul = new Viking("Byul", 15, 15);
var Locki = new Viking("Locki", 8, 12);
var saxon1 = new Saxon(6, 7);
var saxon2 = new Saxon(20, 15);
var saxon3 = new Saxon(2, 10);


var war1 = new War();

war1.addSaxon(saxon1);
war1.addSaxon(saxon2);
war1.addSaxon(saxon3);
war1.addViking(Ragnar);
war1.addViking(Byul);
war1.addViking(Locki);
