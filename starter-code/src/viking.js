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
  Soldier.call(this, health, strength)
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.attack = function() { 
  return this.strength;
}

Viking.prototype.receiveDamage = function(damage) { 
  // this.health -= damage;
  Soldier.prototype.receiveDamage.call(this, damage)
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
  Soldier.call(this, health, strength)
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.attack = function() { 
  return this.strength;
}

Saxon.prototype.receiveDamage = function(damage) { 
  // this.health -= damage;
  Soldier.prototype.receiveDamage.call(this, damage)
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
  var result = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].attack())
  if (this.saxonArmy[0].health <= 0) this.saxonArmy.shift()
  return result;
}

War.prototype.saxonAttack = function() {
  var result = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].attack())
  if (this.vikingArmy[0].health <= 0) this.vikingArmy.shift()
  return result;
}

War.prototype.showStatus = function () {
  if (this.vikingArmy > this.saxonArmy ) {
      return "Vikings have won the war of the century!";
  } else if (this.vikingArmy < this.saxonArmy ) { 
      return "Saxons have fought for their lives and survive another day...";
  } else {
      return "Vikings and Saxons are still in the thick of battle."
  }
}


