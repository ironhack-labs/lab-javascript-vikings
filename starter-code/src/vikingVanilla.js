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
  this.name = name;
  Soldier.call(this, health, strength);
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage;

  if (this.health <= 0) {
    return `${this.name} has died in act of combat`;
  } else {
    return `${this.name} has received ${damage} points of damage`;
  }
};

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
};

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
  this.receiveDamage = damage => {
    this.health -= damage;
    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    } else {
      return `A Saxon has received ${damage} points of damage`;
    }
  };
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

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
  let randomV = Math.floor(Math.random() * this.vikingArmy.length);
  let randomS = Math.floor(Math.random() * this.saxonArmy.length);
  let randomViking = this.vikingArmy[randomV].strength;
  let randomSaxon = this.saxonArmy[randomS];

  let damage = randomSaxon.receiveDamage(randomViking);

  if (randomSaxon.health <= 0) {
    this.saxonArmy.splice(randomS, 1);
    console.log("Dead");
  }
  return damage;
};

War.prototype.saxonAttack = function() {
  let randomV = Math.floor(Math.random() * this.vikingArmy.length);
  let randomS = Math.floor(Math.random() * this.saxonArmy.length);
  let randomViking = this.vikingArmy[randomV];
  let randomSaxon = this.saxonArmy[randomS].strength;

  let damage = randomViking.receiveDamage(randomSaxon);

  if (randomViking.health <= 0) {
    this.vikingArmy.splice(randomV, 1);
  }
  return damage;
};

War.prototype.showStatus = function() {
  if (this.vikingArmy.length === 0) {
    return "Saxons have fought for their lives and survive another day...";
  } else if (this.saxonArmy.length === 0) {
    return "Vikings have won the war of the century!";
  } else {
    return "Vikings and Saxons are still in the thick of battle.";
  }
};
