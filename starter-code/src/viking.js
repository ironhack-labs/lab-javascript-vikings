// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.constructor = Soldier;
Soldier.prototype.attack = function() {
  return this.strength;
};
Soldier.prototype.receiveDamage = function(damage) {
  this.health -= damage;
};

// Viking
function Viking(name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
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

War.prototype.constructor = War;
War.prototype.addViking = function(Viking) {
  this.vikingArmy.push(Viking);
};
War.prototype.addSaxon = function(Saxon) {
  this.saxonArmy.push(Saxon);
};

War.prototype.vikingAttack = function() {
  var Saxon = saxonArmy[[Math.floor(Math.random() * saxonArmy.length)]];
  var Viking = vikingArmy[Math.floor(Math.random() * vikingArmy.length)];
  console.log(Saxon);
  Saxon.receiveDamage()
  console.log(Saxon);
  var oldHealth = Saxon.health;
};
