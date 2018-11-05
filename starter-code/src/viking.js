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
      return this.name + "has received" + damage + "points of damage";
    } else {
      return this.name + " has died in act of combat";
    }
  };

  this.battleCry = function() {
    return "Odin Owns You All!";
  };
}

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
  this.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return "A Saxon has received " + damage + "points of damage";
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
    var positionViking = this.vikingArmy.length;
    var positionSaxon = this.saxonArmy.length;
    var viking = this.vikingArmy[Math.floor(Math.random() * positionViking)];
    var saxon = this.saxonArmy[Math.floor(Math.random() * positionSaxon)];
    var battle = saxon.receiveDamage(viking.strength);
    if (saxon.health < 1) {
      this.saxonArmy.splice(Math.floor(Math.random() * positionSaxon), 1);
    }
    return battle + " with " + vikingo.strength + " of vikingo strength ";
  };
  this.saxonAttack = function() {
    var positionViking = this.vikingArmy.length;
    var positionSaxon = this.saxonArmy.length;
    var viking = this.vikingArmy[Math.floor(Math.random() * positionViking)];
    var saxon = this.saxonArmy[Math.floor(Math.random() * positionSaxon)];
    var battle = viking.receiveDamage(saxon.strength);
    if (viking.health < 1) {
      this.vikingArmy.splice(Math.floor(Math.random() * positionViking), 1);
    }
    return battle + " with " + saxon.strength + " of saxon strength ";
  };

  this.showStatus = function() {
    if (this.saxonArmy.length < 1) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length < 1) {
      return "Saxons have fought for their lives and survive another day..";
    } else {
      return "Vikings ans Saxons are still in the thick of battle";
    }
  };
}
