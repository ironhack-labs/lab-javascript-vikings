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

Viking.prototype.receiveDamage = function(damage) {
  Soldier.prototype.receiveDamage(damage);
  this.health -= damage;
  if (this.health <= 0)
    return this.name + " has died in act of combat";
  else
    return this.name + " has received " + damage + " points of damage";
}

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
}

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);

}
Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.attack = function() {
  return this.strength;
};

Saxon.prototype.receiveDamage = function(damage) {
  Soldier.prototype.receiveDamage(damage);
  this.health -= damage;
  if (this.health <= 0)
    return "A Saxon has died in combat";
  else
    return "A Saxon has received " + damage + " points of damage";
}


// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}
War.prototype.addViking = function(viking) {
  this.vikingArmy.push(viking);
};
War.prototype.addSaxon = function(saxon) {
  this.saxonArmy.push(saxon);
};
War.prototype.vikingAttack = function() {
  var saxon = this.saxonArmy[0];
  var viking = this.vikingArmy[0];
  if (saxon.health - viking.strength <= 0) { this.saxonArmy.shift() }
  return saxon.receiveDamage(viking.strength);
};
War.prototype.saxonAttack = function() {
  var saxon = this.saxonArmy[0];
  var viking = this.vikingArmy[0];
  if (viking.health - saxon.strength <= 0) { this.vikingArmy.shift() }
  return viking.receiveDamage(saxon.strength);
};
War.prototype.showStatus = function() {
  if (this.saxonArmy.length === 0) {
    return "Vikings have won the war of the century!";
  } else if (this.saxonArmy.length + this.vikingArmy.length >= 2) {
    return "Vikings and Saxons are still in the thick of battle.";
  } else if (this.saxonArmy.length > 0 ) {
    return "Saxons have fought for their lives and survive another day...";
  }
};

