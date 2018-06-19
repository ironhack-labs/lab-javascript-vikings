// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
};

Soldier.prototype.attack = function() {
  return this.strength
};

Soldier.prototype.receiveDamage = function(receiveDamage) {
  this.health -= receiveDamage;
}

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(receiveDamage) {
  this.health -= receiveDamage;
  if(this.health > 0 ) {
  return `${this.name} has received ${receiveDamage} points of damage`
} else {
  return `${this.name} has died in act of combat`
}
};

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!"
};

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;


Saxon.prototype.receiveDamage = function(receiveDamage) {
  this.health -= receiveDamage;
  if(this.health > 0 ) {
  return `A Saxon has received ${receiveDamage} points of damage`
} else {
  return `A Saxon has died in combat`
}
};

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(vikingObject) {
  this.vikingArmy.push(vikingObject)
};

War.prototype.addSaxon = function(saxonObject) {
  this.saxonArmy.push(saxonObject)
};

War.prototype.vikingAttack = function() {
  // var oldHealth = saxon.health;
  // war.vikingAttack();
  // Saxon.health = oldHealth - viking.strength;
}