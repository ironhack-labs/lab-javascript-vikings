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
  // return this.health;
};

// Viking
function Viking(name, health, strenght) {
  Soldier.call(this, health, strenght);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);

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
function Saxon(health, strenght) {
  Soldier.call(this, health, strenght);
}

Saxon.prototype = Object.create(Soldier.prototype);

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
  var randomSaxon = this.saxonArmy[
    Math.floor(Math.random() * this.saxonArmy.length)
  ];
  var randomViking = this.vikingArmy[
    Math.floor(Math.random() * this.vikingArmy.length)
  ];
  return randomSaxon.receiveDamage(randomViking.attack());
  if (randomSaxon.health <= 0) {
    console.log(randomSaxon);
    var toDelete = this.saxonArmy.findIndex(randomSaxon);
    this.saxonArmy.splice(toDelete, 1);
  }
};

War.prototype.saxonAttack = function() {
  var randomSaxon = this.saxonArmy[
    Math.floor(Math.random() * this.saxonArmy.length)
  ];
  var randomViking = this.vikingArmy[
    Math.floor(Math.random() * this.vikingArmy.length)
  ];
  return randomViking.receiveDamage(randomSaxon.attack());
  // if (randomSaxon.health <= 0){

  // }
};

War.prototype.showStatus = function() {};
