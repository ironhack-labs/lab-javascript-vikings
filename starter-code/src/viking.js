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
  this.name = name;
  Soldier.call(this, health, strength);
  this.receiveDamage = function(damage) {
    this.health = this.health -= damage;
    if (this.health === 0) {
      return `${this.name} has died in act of combat`;
    } else {
      return `${this.name} has received ${damage} points of damage`;
    }
  };
  this.battleCry = function() {
    return `Odin Owns You All!`;
  };
}
Viking.prototype = Object.create(Soldier.prototype);

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
  this.receiveDamage = function(damage) {
    this.health -= damage;
  };
  this.attack = function() {
    return this.strength;
  };
  this.receiveDamage = function(damage) {
    this.health = this.health -= damage;
    if (this.health == 0) {
      return `A Saxon has died in combat`;
    } else {
      return `A Saxon has received ${damage} points of damage`;
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

  this.vikingAttack = function() {};

  this.saxonAttack = function() {};

  this.showStatus = function() {
      
    if ((this.saxonArmy.length = 0)) {
      return "Vikings have won the war of the century!";
    }
    if ((this.vikingArmy.length = 0)) {
      return "Saxons have fought for their lives and survive another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  };
}
