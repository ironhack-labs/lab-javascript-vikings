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

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
  this.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return this.name + " has received " + damage + " points of damage";
    } else {
      return this.name + " has died in act of combat";
    }
  };
  this.battleCry = function() {
    return "Odin Owns You All!";
  };
}

// Saxon

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

function Saxon(health, strength) {
  Soldier.call(this, health, strength);
  this.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return "A Saxon has received " + damage + " points of damage";
    } else {
      return "A Saxon has died in combat";
    }
  };
}

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
    var victimId = Math.floor(Math.random() * this.saxonArmy.length);
    var attackerId = Math.floor(Math.random() * this.vickingArmy.length);
    var attackResult = this.saxonArmy[victimId].receiveDamage(
      this.vikingArmy[attackerId].strength
    );
    if (this.saxonArmy[victimId].health <= 0) {
      this.saxonArmy.splice(victimId, 1);
    }
    return attackResult;
  };

  this.saxonAttack = function() {
    var victimId = Math.floor(Math.random() * this.vikingArmy.length);
    var attackerId = Math.floor(Math.random() * this.saxongArmy.length);
    var attackResult = this.vickingArmy[victimId].receiveDamage(
      this.saxonArmy[attackerId].strength
    );
    if (this.vickingArmy[victimId].health <= 0) {
      this.vickingArmy.splice(victimId, 1);
    }
    return attackResult;


  };

  this.showStatus = function() {
    if (this.saxonArmy.length == 0) {
        return "Vikings have won the war of the century!";
    }
    else if (this.vikingArmy.length == 0) {
        return "Saxons have fought for their lives and survive another day...";
    }
    else {
        return "Vikings and Saxons are still in the thick of battle.";
    }

  };
}
