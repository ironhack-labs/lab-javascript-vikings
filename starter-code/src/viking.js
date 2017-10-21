// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function() {
    return this.strength;
  }
  this.receiveDamage = function(damage) {
    this.health = this.health - damage;
  }
}

// Viking
function Viking (name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
  this.receiveDamage = function(damage) {
    this.health = this.health - damage;
    if (this.health > 0){
      return this.name + " has received " + damage + " points of damage";
    } else {
      return this.name + " has died in act of combat";
    }
  }
  this.battleCry = function() {
    return "Odin Owns You All!";
  }
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
function Saxon (health, strength) {
  Soldier.call(this, health, strength);
  this.receiveDamage = function(damage) {
    this.health = this.health - damage;
    if (this.health > 0){
      return "A Saxon has received " + damage + " points of damage";
    } else {
      return "A Saxon has died in combat";
    }
  }
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

function randomWarrior(array) {
  return array[Math.floor(Math.random() * array.length)]
}

// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
  this.addViking = function(newViking) {
    this.vikingArmy.push(newViking);
  }
  this.addSaxon = function(newSaxon) {
    this.saxonArmy.push(newSaxon);
  }
  this.vikingAttack = function() {
    var randomSaxon = randomWarrior(this.saxonArmy);
    var randomViking = randomWarrior(this.vikingArmy);
    var saxonDamage = randomSaxon.receiveDamage(randomViking.strength);
    for (var i = 0; i < this.saxonArmy.length; i++) {
      if (this.saxonArmy[i].health <= 0) {
        this.saxonArmy.splice(i, 1);
      }
    }
    return saxonDamage;
  }
  this.saxonAttack = function() {
    var randomViking = randomWarrior(this.vikingArmy);
    var randomSaxon = randomWarrior(this.saxonArmy);
    var vikingDamage = randomViking.receiveDamage(randomSaxon.strength);
    for (var i = 0; i < this.vikingArmy.length; i++) {
      if (this.vikingArmy[i].health <= 0) {
        this.vikingArmy.splice(i, 1);
      }
    }
    return vikingDamage;
  }
  this.showStatus = function() {
    var saxonsRemaining = this.saxonArmy.length;
    var vikingsRemaining = this.vikingArmy.length;
    if (saxonsRemaining > 0 && vikingsRemaining > 0) {
      return "Vikings and Saxons are still in the thick of battle."
    }
    if (saxonsRemaining === 0) {
      return "Vikings have won the war of the century!"
    }
    if (vikingsRemaining === 0) {
      return "Saxons have fought for their lives and survive another day..."
    }
  }
}
