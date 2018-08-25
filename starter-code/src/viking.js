// Soldier

function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
  return this.strength;
};

Soldier.prototype.receiveDamage = function(thedamage) {
  this.health -= thedamage;
};

//Viking

function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage) {
  Soldier.prototype.receiveDamage.call(this, damage);
  if (this.health > 0) {
    return `${this.name} has received ${damage} points of damage`;
  } else {
    return `${this.name} has died in act of combat`;
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
  if (this.health > 0) {
    return `A Saxon has received ${damage} points of damage`;
  } else {
    return `A Saxon has died in combat`;
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
  var vikingAtt = Math.floor(Math.random() * this.vikingArmy.length);
  var saxonAtt = Math.floor(Math.random() * this.saxonArmy.length);
  var randomVik = this.vikingArmy[vikingAtt];
  var randomSax = this.saxonArmy[saxonAtt];

  var result = randomSax.receiveDamage(randomVik.attack());
  if (randomSax.health <= 0) {
    this.saxonArmy.splice(saxonAtt, 1);
  }
  return result;
};

War.prototype.saxonAttack = function() {
  var vikingAtt = Math.floor(Math.random() * this.vikingArmy.length);
  var saxonAtt = Math.floor(Math.random() * this.saxonArmy.length);
  var randomVik = this.vikingArmy[vikingAtt];
  var randomSax = this.saxonArmy[saxonAtt];

  var result = randomVik.receiveDamage(randomSax.attack());
  if (randomVik.health <= 0) {
    this.vikingArmy.splice(vikingAtt, 1);
  }
  return result;
};

War.prototype.showStatus = function() {
  if (this.saxonArmy.length === 0) {
    return "Vikings have won the war of the century!";
  }
  if (this.vikingArmy.length === 0) {
    return "Saxons have fought for their lives and survive another day...";
  }
  return "Vikings and Saxons are still in the thick of battle.";
};
