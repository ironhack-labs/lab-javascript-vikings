// Soldier
function Soldier(healthArg, strengthArg) {
  this.strength = strengthArg;
  this.health = healthArg;
  this.attack = function() {
    return this.strength;
  };
  this.receiveDamage = function(damage) {
    this.health -= damage;
  };
}

// Viking
function Viking(nameArg, healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
  this.name = nameArg;
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
function Saxon(healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
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

  this.addViking = function(viking) {
    this.vikingArmy.push(viking);
  };

  this.addSaxon = function(saxon) {
    this.saxonArmy.push(saxon);
  };

  this.vikingAttack = function() {
    var victimIndex = randomNumber(this.saxonArmy.length);
    var victim = this.saxonArmy[victimIndex];
    var attacker = this.vikingArmy[randomNumber(this.vikingArmy.length)];
    var result = victim.receiveDamage(attacker.strength);
    if (victim.health <= 0) {
      this.saxonArmy.splice(victimIndex, 1);
    }
    return result;
  };

  this.saxonAttack = function() {
    var victimIndex = randomNumber(this.vikingArmy.length);
    var victim = this.vikingArmy[victimIndex];
    var attacker = this.saxonArmy[randomNumber(this.saxonArmy.length)];
    var result = victim.receiveDamage(attacker.strength);
    if (victim.health <= 0) {
      this.vikingArmy.splice(victimIndex, 1);
    }
    return result;
  };

  this.showStatus = function() {
    var saxonLength = this.saxonArmy.length;
    var vikingLength = this.vikingArmy.length;
    if (saxonLength === 0) {
      return "Vikings have won the war of the century!";
      saxonLength;
    } else if (vikingLength === 0) {
      return "Saxons have fought for their lives and survive another day...";
      saxonLength;
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  };
}

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

// Not necessary, just to satisfy jasmin
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Viking;
