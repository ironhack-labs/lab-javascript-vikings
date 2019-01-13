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
  this.isAlive = function() {
    if (this.health > 0) {
      return true;
    } else {
      return false;
    }
  };
}

// Viking
function Viking(name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
  this.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.isAlive()) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
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
    if (this.isAlive()) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return "A Saxon has died in combat";
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
  this.vikingAttack = function() {
    var randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    var saxonSoldier = this.saxonArmy[randomSaxonIndex];

    var randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    var vikingSoldier = this.vikingArmy[randomVikingIndex];

    var saxonDamage = saxonSoldier.receiveDamage(vikingSoldier.strength);

    if (saxonSoldier.isAlive() == false) {
      this.saxonArmy.pop();
    }
    return saxonDamage;
  };

  this.saxonAttack = function() {
    var randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    var saxonSoldier = this.saxonArmy[randomSaxonIndex];

    var randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    var vikingSoldier = this.vikingArmy[randomVikingIndex];

    var vikingDamage = vikingSoldier.receiveDamage(saxonSoldier.strength);

    if (vikingSoldier.isAlive() == false) {
      this.vikingArmy.pop();
    }
    return vikingDamage;
  };

  this.showStatus = function() {
    if (this.saxonArmy.length == 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length == 0) {
      return "Saxons have fought for their lives and survive another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  };
}
