// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
  return this.strength;
}

Soldier.prototype.receiveDamage = function(incomingAtt) {
  this.health -= incomingAtt;
}

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(incomingAtt) {
  if(incomingAtt < this.health) {
    this.health -= incomingAtt;
    return this.name + " has received " + incomingAtt + " points of damage";
  } else {
    this.health -= incomingAtt;
    return this.name + " has died in act of combat";
  }
}

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
}

// Saxon
function Saxon(health, strength) {
Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(incomingAtt) {
  if(incomingAtt < this.health) {
    this.health -= incomingAtt;
    return "A Saxon has received " + incomingAtt + " points of damage";
  } else {
    this.health -= incomingAtt;
    return "A Saxon has died in combat";
  }
}

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(viking) {
  this.vikingArmy.push(viking);
}

War.prototype.addSaxon = function(saxon) {
  this.saxonArmy.push(saxon);
}

War.prototype.vikingAttack = function() {
  var vikingAttack = this.vikingArmy[0].attack();
  var result = this.saxonArmy[0].receiveDamage(vikingAttack);
  if(this.vikingArmy[0].attack() > this.saxonArmy[0].health) {
    this.saxonArmy.splice(0, 1);
  }
  return result;
}

War.prototype.saxonAttack = function() {
  var saxonAttack = this.saxonArmy[0].attack();
  var result = this.vikingArmy[0].receiveDamage(saxonAttack);
  if(this.saxonArmy[0].attack() > this.vikingArmy[0].health) {
    this.vikingArmy.splice(0, 1);
  }
  return result;
}

War.prototype.showStatus = function() {
  if(this.saxonArmy.length === 0) {
    return "Vikings have won the war of the century!";
  } else if (this.vikingArmy.length === 0) {
    return "Saxons have fought for their lives and survive another day...";
  } else {
    return "Vikings and Saxons are still in the thick of battle.";
  }
}