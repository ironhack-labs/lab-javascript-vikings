// Soldier

function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;

  this.attack = function attack() {
    return this.strength;
  };

  this.receiveDamage = function receiveDamage(damage) {
    this.health = health - damage; //can it be written better?
  };
};

// Viking

function Viking(name, health, strength) {
  Soldier.call(this, health, strength);

  this.name = name;
};

Viking.prototype = Object.create(Soldier.prototype); //WTF

Viking.prototype.receiveDamage = function (damage) {
  this.health = health - damage;
  if (this.health > 0) {
    return `${this.name} has received ${damage} points of damage`;
  }

  return `${this.name} has died in act of combat`;
};

Viking.prototype.battleCry = function () {
  return "Odin Owns You All!";
};

// Saxon

function Saxon(health, strength) {
  Soldier.call(this, health, strength);
};

Saxon.prototype = Object.create(Soldier.prototype);

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];

  this.addViking = function addViking(viking) {
    this.vikingArmy.push(viking);
  };

  this.addSaxon = function addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  };

  this.vikingAttack = function vikingAttack() {
    var chooseRandomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var chooseRandomViking = Math.floor(Math.random() * this.vikingArmy.length);
    var attackedSaxon = this.saxonArmy[chooseRandomSaxon];
    var attackingViking = this.vikingArmy[chooseRandomViking];

    attackedSaxon.receiveDamage(attackingViking.strength);

    if (attackedSaxon.health <= 0) {
      this.saxonArmy.splice(chooseRandomSaxon, 1);
    };
  };

  this.saxonAttack = function saxonAttack() {
    var chooseRandomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var chooseRandomViking = Math.floor(Math.random() * this.vikingArmy.length);
    var attackingSaxon = this.saxonArmy[chooseRandomSaxon];
    var attackedViking = this.vikingArmy[chooseRandomViking];

    attackedViking.receiveDamage(attackingSaxon.strength);

    if (attackedViking.health <= 0) {
      this.vikingArmy.splice(chooseRandomViking, 1);
    };
  };

  this.showStatus = function showStatus() {
    switch (true) {
      case this.saxonArmy.length < 1:
        return "Vikings have won the war of the century!";
        
      case this.vikingArmy.length < 1:
        return "Saxons have fought for their lives and survive another day...";

        default:
        return "Vikings and Saxons are still in the thick of battle.";
    };
  };
};


