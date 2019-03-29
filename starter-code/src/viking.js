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

  this.receiveDamage = function(damage) {
    this.health -= damage;

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  };

  this.battleCry = function() {
    return 'Odin Owns You All!';
  };
}

Viking.prototype = Object.create(Soldier.prototype);

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);

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

  this.vikingAttack = function() {
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    const viking = this.vikingArmy[randomViking];
    const saxon = this.saxonArmy[randomSaxon];

    const attackResult = saxon.receiveDamage(viking.attack());

    this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0);

    return attackResult;
  };

  this.saxonAttack = function() {
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    const viking = this.vikingArmy[randomViking];
    const saxon = this.saxonArmy[randomSaxon];

    const attackResult = viking.receiveDamage(saxon.attack());

    this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0);

    return attackResult;
  };

  this.showStatus = function() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    }

    if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survive another day...';
    }

    return 'Vikings and Saxons are still in the thick of battle.';
  };
}
