// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;

  this.attack = function() {
    return this.strength;
  };

  this.receiveDamage = function(damage) {
    this.health -= damage;
  };
}

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);

  this.name = name;

  this.attack = function() {
    return this.strength;
  };

  this.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  };

  this.battleCry = function() {
    return `Odin Owns You All!`;
  };
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);

  this.attack = function() {
    return this.strength;
  };

  this.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  };
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];

  this.addViking = function(viking) {
    this.vikingArmy.push(viking);
  };

  this.addSaxon = function(saxon) {
    this.saxonArmy.push(saxon);
  };

  this.genRandNum = function(length) {
    return Math.floor(Math.random() * Math.floor(length));
  };

  this.vikingAttack = function() {
    let randomSaxon = this.saxonArmy[this.genRandNum(this.saxonArmy.length)];
    let randomViking = this.vikingArmy[this.genRandNum(this.vikingArmy.length)];
    randomSaxon.receiveDamage(randomViking.strength);
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1);
      return "A Saxon has died in combat";
    }
  };

  this.saxonAttack = function() {
    let randomSaxon = this.saxonArmy[this.genRandNum(this.saxonArmy.length)];
    let randomViking = this.vikingArmy[this.genRandNum(this.vikingArmy.length)];
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

  this.showStatus = function() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  };
}
