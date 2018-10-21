// Armies
let saxonArmy;
let vikingArmy;

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

Soldier.prototype.receiveDamage = function(health, strength) {
  this.damage = damage;
  this.health -= damage;
};

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
  this.battleCry = function() {
    return "Odin Owns You All!";
  };
  this.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      return this.name + " has died in act of combat";
    } else {
      return this.name + " has received " + damage + " points of damage";
    }
  };
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

let newViking = new Viking("Bard", 100, 50);

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
  this.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      return "A Saxon has died in combat";
    } else {
      return "A Saxon has received " + damage + " points of damage";
    }
  };
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

let newSaxon = new Saxon(100, 60);

// War
function War() {
  this.saxonArmy = [];
  this.vikingArmy = [];
  this.addViking = function(Viking) {
    this.vikingArmy.push(Viking);
  };
  this.addSaxon = function(Saxon) {
    this.saxonArmy.push(Saxon);
  };
  this.vikingAttack = function() {
    let attackedSaxon = this.saxonArmy[0];
    let attackingViking = this.vikingArmy[0];
    if (attackedSaxon.health <= attackingViking.strength) {
      this.saxonArmy.shift();
      return attackedSaxon.receiveDamage(attackingViking.strength);
    }
    return attackedSaxon.receiveDamage(attackingViking.strength);
  };
  this.saxonAttack = function() {
    let attackedViking = this.vikingArmy[0];
    let attackingSaxon = this.saxonArmy[0];
    if (attackedViking.health <= attackingSaxon.strength) {
      this.vikingArmy.shift();
      return attackedViking.receiveDamage(attackingSaxon.strength);
    } else {
      return attackedViking.receiveDamage(attackingSaxon.strength);
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
