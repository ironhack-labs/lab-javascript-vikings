// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
  return this.strength;
};

Soldier.prototype.receiveDamage = function(damage) {
  this.health = this.health - damage;
};

// Viking
Viking.prototype = Object.create(Soldier.prototype);

function Viking(name, health, strength) {
  this.name = name;
  this.health = health;
  this.strength = strength;
}

Viking.prototype.attack = function() {
  return this.strength;
};

Viking.prototype.receiveDamage = function(damage) {
  this.health = this.health - damage;
  if (this.health > 0) {
    return (this.name + " has received " + damage + " points of damage");
  } else {
    return (this.name + " has died in act of combat");
  }
};

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
};

// Saxon
Saxon.prototype = Object.create(Soldier.prototype);

function Saxon(health, strength) {
  this.health = health;
  this.strength = strength;
}

Saxon.prototype.attack = function() {
  return this.strength;
};

Saxon.prototype.receiveDamage = function(damage) {
  this.health = this.health - damage;
  if (this.health > 0) {
    return ("A Saxon has received " + damage + " points of damage");
  } else {
    return ("A Saxon has died in combat");
  }
};

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
  var i = Math.floor(Math.random() * this.saxonArmy.length);
  var j = Math.floor(Math.random() * this.vikingArmy.length);
  this.saxonArmy[i].health -= this.vikingArmy[j].strength;
  if (this.saxonArmy[i].health <= 0) {
    this.saxonArmy.length = 0;
    return "A Saxon has died in combat";
  }
};

War.prototype.saxonAttack = function() {
  var i = Math.floor(Math.random() * this.saxonArmy.length);
  var j = Math.floor(Math.random() * this.vikingArmy.length);
  this.vikingArmy[j].health -= this.saxonArmy[i].strength;
  if (this.vikingArmy[j].health <= 0) {
    this.vikingArmy.length = 0;
  } else {
    return (this.vikingArmy[j].name  + " has received " + this.saxonArmy[i].strength + " points of damage");
  }
};

War.prototype.showStatus = function () {
  if (this.saxonArmy.length == 0){
    return "Vikings have won the war of the century!";
  } else if (this.vikingArmy.length == 0) {
    return "Saxons have fought for their lives and survive another day...";
  } else {
    return "Vikings and Saxons are still in the thick of battle.";
  }
};
