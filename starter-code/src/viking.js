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

  this.receiveDamage = function(damage) {
    this.damageMessage = '';
    this.health -= damage;

    if (this.health > 0) {
      damageMessage = `${this.name} has received ${damage} points of damage`;
    } else {
      damageMessage = `${this.name} has died in act of combat`;
    }

    return damageMessage;
  };

  this.battleCry = function() {
    return 'Odin Owns You All!';
  };
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);

  this.receiveDamage = function(damage) {
    console.log(damage);
    console.log(this.health);

    this._damageMessage = '';
    this.health -= damage;

    if (this.health > 0) {
      damageMessage = `A Saxon has received ${damage} points of damage`;
    } else {
      damageMessage = 'A Saxon has died in combat';
    }
    console.log(this.health);
    return damageMessage;
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

  this.vikingAttack = function() {
    var vikingIndex = parseInt(Math.random(vikingArmy.length - 1));
    var saxonIndex = parseInt(Math.random(saxonArmy.length - 1));

    saxonArmy[saxonIndex].receiveDamage(vikingArmy[vikingIndex].strength);
    if (saxonArmy[saxonIndex].health <= 0) {
      saxonArmy[saxonIndex] = undefined; 
    }
  };

  this.saxonAttack = function() {

  };

  this.showStatus = function() {

  };
}
