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
  this.health -= damage;
  if (this.health <= 0) {
    return this.name + " has died in act of combat";
  } else {
    return this.name + " has received " + damage + " points of damage";
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

Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health <= 0) {
    return "A Saxon has died in combat";
  } else {
    return "A Saxon has received " + damage + " points of damage";
  }
};

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}
War.prototype.addViking = function(Viking) {
  this.vikingArmy.push(Viking);
};

War.prototype.addSaxon = function(Saxon) {
  this.saxonArmy.push(Saxon);
};

War.prototype.vikingAttack = function() {
  var attackerIndex = Math.random() * (this.vikingArmy.length - 1);
  var attackReceiverIndex = Math.random() * (this.saxonArmy.length - 1);

  var viking = this.vikingArmy[attackerIndex];
  var saxon = this.saxonArmy[attackReceiverIndex];

  var resolution = saxon.receiveDamage(viking.attack());

  if (saxon.health <= 0) {
    this.saxonArmy.splice(attackReceiverIndex, 1);
  }

  return resolution;
};

War.prototype.saxonAttack = function() {
  var attackerIndex = Math.random() * (this.saxonArmy.length - 1);
  var attackReceiverIndex = Math.random() * (this.vikingArmy.length - 1);

  var saxon = this.saxonArmy[attackerIndex];
  var viking = this.vikingArmy[attackReceiverIndex];

  var resolution = viking.receiveDamage(saxon.attack());

  if (viking.health <= 0) {
    this.vikingArmy.splice(attackReceiverIndex, 1);
  }

  return resolution;
};

War.prototype.showStatus = function() {
  if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
    return "Vikings and Saxons are still in the thick of battle.";
  } else if (this.vikingArmy.length <= 0) {
    return "Saxons have fought for their lives and survive another day...";
  } else {
    return "Vikings have won the war of the century!";
  }
};
