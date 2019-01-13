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
  return;
};

// Viking
function Viking(name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;
Viking.prototype.attack = function() {
  return this.strength;
};
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
  this.health = health;
  this.strength = strength;
  Soldier.call(this, health, strength);
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;
Saxon.prototype.attack = function() {
  return this.strength;
};
Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;
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
War.prototype.addViking = function(viking) {
  this.vikingArmy.push(viking);
};
War.prototype.addSaxon = function(saxon) {
  this.saxonArmy.push(saxon);
};
War.prototype.vikingAttack = function() {
  var randomViking = this.vikingArmy[
    Math.floor(Math.random() * this.vikingArmy.length)
  ];
  var randomSaxon = this.saxonArmy[
    Math.floor(Math.random() * this.saxonArmy.length)
  ];

  randomSaxon.receiveDamage(randomViking.strength);
  if (randomSaxon.health <= 0) {
    this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1);
    return "A Saxon has died in combat";
  }
};

War.prototype.saxonAttack = function() {
  var randomViking = this.vikingArmy[
    Math.floor(Math.random() * this.vikingArmy.length)
  ];
  var randomSaxon = this.saxonArmy[
    Math.floor(Math.random() * this.saxonArmy.length)
  ];
  console.log(randomViking);
  randomViking.receiveDamage(randomSaxon.strength);
  if (randomViking.health <= 0) {
    this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1);
  } else {
    return (
      randomViking.name +
      " has received " +
      randomSaxon.strength +
      " points of damage"
    );
  }
};
War.prototype.showStatus = function() {
  if (this.saxonArmy.length === 0) {
    return "Vikings have won the war of the century!";
  } else if (this.vikingArmy.length === 0) {
    return "Saxons have fought for their lives and survive another day...";
  }
  return "Vikings and Saxons are still in the thick of battle.";
};
