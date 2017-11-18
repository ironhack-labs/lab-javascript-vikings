// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
}

// Soldier: attack
Soldier.prototype.attack = function(){
return this.strength;
};

// Soldier: damage
Soldier.prototype.receiveDamage = function(damage) {
    this.health = this.health - damage;
};

//Soldier:
Soldier.prototype.isStillAlive = function() {
  return this.health > 0;
};

// Viking
function Viking(name, health, strength) {
    this.name = name;
    Soldier.call(this, health, strength);
}

Viking.prototype = Object.create(Soldier.prototype);

// Viking: attack - The attack was created in soldier before and viking inherits it

// Viking: damage

Viking.prototype.receiveDamage = function(damage) {
  Soldier.prototype.receiveDamage.call(this, damage);
  if (this.health > 0) {
    return this.name + " has received " + damage + " points of damage";
  } else {
    return this.name + " has died in act of combat";
  }
};

// Viking: battle cry

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
};

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);

// Saxon: damage

Saxon.prototype.receiveDamage = function(damage) {
  Soldier.prototype.receiveDamage.call(this, damage);
  if (this.health > 0) {
    return "A Saxon has received " + damage + " points of damage";
  } else {
    return "A Saxon has died in combat";
  }
};

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

// War: add vikings
