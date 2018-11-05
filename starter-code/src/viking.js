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
  // var saxon = this.saxonArmy[0];
  // var viking = this.vikingArmy[0];
  var result = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].attack())
  // var result = saxon.receiveDamage(viking.attack());
  if(this.saxonArmy[0].health <= 0) this.saxonArmy.shift()
  // for (i = 0; i < this.saxonArmy.length; i++) {
  //   if (this.saxonArmy[i].health <= 0) {
  //     this.saxonArmy.splice([i]);
  //   } 
  // }
  return result;
}


