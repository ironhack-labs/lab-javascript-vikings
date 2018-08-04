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
    if (this.health > 0)
      return this.name + " has received " + damage + " points of damage";
    else return this.name + " has died in act of combat";
  };

  this.battleCry = function() {
    return "Odin Owns You All!";
  };
}
Viking.prototype = Object.create(Soldier.prototype);

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);

  this.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health > 0)
      return "A Saxon has received " + damage + " points of damage";
    else return "A Saxon has died in combat";
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
    if (this.vikingArmy.length === 0 || this.saxonArmy.length === 0) return;

    var randSaxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    var randViking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    var outcome = randSaxon.receiveDamage(randViking.strength);
    if (randSaxon.health <= 0) {
      this.saxonArmy.splice(randSaxon, 1);
    }
    return outcome;
  };

  this.saxonAttack = function() {
    if (this.vikingArmy.length === 0 || this.saxonArmy.length === 0) return;

    var randSaxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    var randViking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    var outcome = randViking.receiveDamage(randSaxon.strength);
    if (randViking.health <= 0) {
      this.vikingArmy.splice(randViking, 1);
    }
    return outcome;
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
var war = new War();

war.addSaxon(new Saxon(4, 4));
war.addSaxon(new Saxon(3, 2));
war.addViking(new Viking("bjork", 4, 5));

war.vikingAttack();
