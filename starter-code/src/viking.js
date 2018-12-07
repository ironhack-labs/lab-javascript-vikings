// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
  return this.strength
}

Soldier.prototype.receiveDamage = function(damage) {
  this.health -= damage;
}

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength); // Calling Soldier constructor
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype); // Viking prototype object will be the same as Soldier Prototype.
Viking.prototype.constructor = Viking; // Viking prototype will have Viking as a contructor, not Soldier.

Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  if (this.health > 0) {
    return `${this.name} has received ${damage} points of damage`;
  } else {
    return `${this.name} has died in act of combat`;
  }
}

Viking.prototype.battleCry = function () {
  return 'Odin Owns You All!'
}

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength); // Calling Soldier constructor
}

Saxon.prototype = Object.create(Soldier.prototype); // Saxon prototype object will be the same as Soldier Prototype.
Saxon.prototype.constructor = Saxon; // Saxon prototype will have Saxon as a contructor, not Soldier.

Saxon.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if (this.health > 0) {
    return `A Saxon has received ${damage} points of damage`;
  } else {
    return `A Saxon has died in combat`;
  }
}

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function (viking) {
  this.vikingArmy.push(viking);
}

War.prototype.addSaxon = function (saxon) {
  this.saxonArmy.push(saxon);
}

War.prototype.vikingAttack = function () {
  let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
  let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
  let attack = randomSaxon.receiveDamage(randomViking.strength);

  if (randomSaxon.health <= 0) {
    let saxonKilled = this.saxonArmy.indexOf(randomSaxon);
    this.saxonArmy.splice(saxonKilled, 1);
  }
  return attack;
}

War.prototype.saxonAttack = function () {
  let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
  let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
  let attack = randomViking.receiveDamage(randomSaxon.strength);

  if (randomViking.health <= 0) {
    let vikingKilled = this.vikingArmy.indexOf(randomViking);
    this.vikingArmy.splice(vikingKilled, 1);
  }
  return attack; 
}

War.prototype.showStatus = function () {
  if (this.saxonArmy.length === 0) {
    return 'Vikings have won the war of the century!'
  } else if (this.vikingArmy.length === 0) {
    return 'Saxons have fought for their lives and survive another day...'
  } else {
    return 'Vikings and Saxons are still in the thick of battle.'
  }
}