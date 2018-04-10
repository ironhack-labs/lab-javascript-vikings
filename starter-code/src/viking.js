// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function attack() {
    return this.strength;
  };
  this.receiveDamage = function(damage) {
    this.health = this.health - damage;
  };
}

var soldier = new Soldier(300, 150);

soldier.receiveDamage(50);

// Viking
Viking.prototype = Object.create(Soldier.prototype);

function Viking(name, health, strength) {
  this.name = name;
  this.health = health;
  this.strength = strength;
  this.attack = function() {
    return this.strength;
  };
  this.receiveDamage = function(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return this.name + " has received " + damage + " points of damage";
    } else {
      return this.name + " has died in act of combat";
    }
  };
  this.battleCry = function battleCry() {
    return "Odin Owns You All!";
  };
}

var viking = new Viking("Harald", 300, 150);

// Saxon
Saxon.prototype = Object.create(Soldier.prototype);

function Saxon(health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function() {
    return this.strength;
  };
  this.receiveDamage = function(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return "A Saxon has received " + damage + " points of damage";
    } else {
      return "A Saxon has died in combat";
    }
  };
}

var saxon = new Saxon(60, 25);

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
  this.addViking = function(Viking) {
    this.vikingArmy.push(Viking);
  };
  this.addSaxon = function(Saxon) {
    this.saxonArmy.push(Saxon);
  };
  this.vikingAttack = function() {
    var result = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);
    if (this.saxonArmy[0].health <= 0) {
      this.saxonArmy.pop();
      return result;
    }
  };
  this.saxonAttack = function() {
    var result2 = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);
    if (this.vikingArmy[0].health <= 0) {
      this.vikingArmy.pop();
    } else {
      return result2;
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
