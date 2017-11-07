// Soldier
function Soldier (health, strength) {
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
function Viking (name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function(damage) {
  Soldier.prototype.receiveDamage.call(this, damage);
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
function Saxon (health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function(damage) {
  Soldier.prototype.receiveDamage.call(this, damage);
  if (this.health > 0) {
    return "A Saxon has received " + damage + " points of damage";
  } else {
    return "A Saxon has died in combat";
  }
};

// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function (viking) {
  if (viking instanceof Viking) {
    this.vikingArmy.push(viking);
  }
};

War.prototype.addSaxon = function (saxon) {
  if (saxon instanceof Saxon) {
    this.saxonArmy.push(saxon);
  }
};

War.prototype.vikingAttack = function () {

  var randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
  var randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

  var status = this.saxonArmy[randomSaxonIndex].receiveDamage(this.vikingArmy[randomVikingIndex].attack());

  if (this.saxonArmy[randomSaxonIndex].health <= 0) {
    this.saxonArmy.splice(randomSaxonIndex, 1);
  }
  return status;
};

War.prototype.saxonAttack = function () {
  var randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
  var randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

  var status = this.vikingArmy[randomVikingIndex].receiveDamage(this.saxonArmy[randomSaxonIndex].attack());

  if (this.vikingArmy[randomVikingIndex].health <= 0) {
    this.vikingArmy.splice(randomVikingIndex, 1);
  }
  return status;
};

War.prototype.showStatus = function () {
  if (this.saxonArmy.length == 0) {
    return "Vikings have won the war of the century!";
  }
  else if (this.vikingArmy.length == 0) {
    return "Saxons have fought for their lives and survive another day...";
  } else {
    return "Vikings and Saxons are still in the thick of battle.";
  }
};
