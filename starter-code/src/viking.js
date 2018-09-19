// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;

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
    if (this.health <= 0) {
      return this.name + " has died in act of combat";
    } else {
      return this.name + " has received " + damage + " points of damage";
    }
  };
  this.battleCry = function() {
    return "Odin Owns You All!";
  };
}
Viking.prototype = Object.create(Soldier.prototype);

// Saxon

function Saxon(healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
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
    var randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var viking = this.vikingArmy[randomViking];
    var saxon = this.saxonArmy[randomSaxon];
    var result = saxon.receiveDamage(viking.strength);
    if (saxon.health <= 0) {
      this.saxonArmy.splice(randomSaxon, 1);
    }
    return result;
  };

  this.saxonAttack = function() {
    var randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var viking = this.vikingArmy[randomViking];
    var saxon = this.saxonArmy[randomSaxon];
    var result = viking.receiveDamage(saxon.strength);
    if (viking.health <= 0) {
      this.vikingArmy.splice(randomViking, 1);
    }
    return result;
  };

  this.showStatus = function() {
    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
      return "Vikings and Saxons are still in the thick of battle.";
    } else if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day...";
    }
  };
}
