// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack = function() {
    return this.strength;
  };
  receiveDamage = function(damage) {
    this.health -= damage;
  };
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;
  }
  receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  };
  battleCry = function() {
    return `Odin Owns You All!`;
  };
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
    this.health = health;
    this.strength = strength;
  }
  receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  };
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];
  addViking = function(viking) {
    this.vikingArmy.push(viking);
  };
  addSaxon = function(saxon) {
    this.saxonArmy.push(saxon);
  };
  vikingAttack = function() {
    let randomS = Math.floor(Math.random()) * this.saxonArmy.length;
    let randomV = Math.floor(Math.random()) * this.vikingArmy.length;
    let randomSaxon = this.saxonArmy[randomS];
    let randomViking = this.vikingArmy[randomV];
    randomSaxon.health -= randomViking.strength;
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomS, randomS + 1);
      return `A Saxon has died in combat`;
    } else {
      return `${randomSaxon.name} has received ${randomViking.strength} points of damage`;
    }
  };
  saxonAttack = function() {
    let randomS = Math.floor(Math.random()) * this.saxonArmy.length;
    let randomV = Math.floor(Math.random()) * this.vikingArmy.length;
    let randomSaxon = this.saxonArmy[randomS];
    let randomViking = this.vikingArmy[randomV];
    randomViking.health -= randomSaxon.strength;
    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomV, randomV + 1);
      return `A Viking has died in combat`;
    } else {
      return `${randomViking.name} has received ${randomSaxon.strength} points of damage`;
    }
  };
  showStatus = function() {
    if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`;
    } else if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  };
}
