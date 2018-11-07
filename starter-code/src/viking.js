// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
  return this.strength;
}

Soldier.prototype.receiveDamage = function(damage) {
  this.health -= damage;
}

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

Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health > 0) {
    return "A Saxon has received " + damage + " points of damage";
  } else {
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
  
  var posViking = Number.parseInt(Math.random() * this.vikingArmy.length); //we choice a random position in vikingArmy
  var posSaxon = Number.parseInt(Math.random() * this.saxonArmy.length); //we choice a random position in saxonArmy

  var viking = this.vikingArmy[posViking];
  var saxon = this.saxonArmy[posSaxon];

  if ((saxon.health - viking.strength) <= 0) { //if the saxon is going to die...we remove him from the saxonArmy
    this.saxonArmy.splice(posSaxon, 1);
  }
  return saxon.receiveDamage(viking.strength);  // return call to function receiveDamage (from saxon)
}

War.prototype.saxonAttack = function() {
  
  var posViking = Number.parseInt(Math.random() * this.vikingArmy.length); //we choice a random position in vikingArmy
  var posSaxon = Number.parseInt(Math.random() * this.saxonArmy.length); //we choice a random position in saxonArmy

  var viking = this.vikingArmy[posViking];
  var saxon = this.saxonArmy[posSaxon];

  if ((viking.health - saxon.strength) <= 0) { //if the viking is going to die...we remove him from the vikingArmy
    this.vikingArmy.splice(posViking, 1);
  }
  return viking.receiveDamage(saxon.strength);  // return call to function receiveDamage (from viking)
}

War.prototype.showStatus = function () {
  
  if (this.saxonArmy.length === 0) { 
    return "Vikings have won the war of the century!";
  } 
  if (this.vikingArmy.length === 0) {
    return "Saxons have fought for their lives and survive another day...";
  }
  return "Vikings and Saxons are still in the thick of battle."  //return this when there are at least 1 Viking and 1 Saxon
}