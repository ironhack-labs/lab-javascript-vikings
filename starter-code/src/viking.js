// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}
// Viking
class Viking extends Solider {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return this.name + " has received " + damage + " points of damage";
    }
    if (this.health < 0) {
      return this.name + " has dies in act of combat";
    }
  }
  battleCry() {
    var cry = "Odin Owns You All!";
    return cry;
  }
}

// Saxon
class Viking extends Saxon {
  constructor(health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return "A Saxon has received " + damage + " points of damage";
    }
    if (this.health < 0) {
      return "A Saxon has died in combat";
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
    this.addViking = function(viking) {
      this.armyViking += viking;
    };
    this.addSaxon = function(saxon) {
      this.armySaxon += saxon;
    };
    this.vikingAttack = function() {
      receiveDamage();
    };
    this.saxonAttack = function() {};
    this.showStatus = function() {};
  }
}
// function War() {
//   this.addViking = function() {};
//   this.addSaxon = function() {};
//   this.vikingAttack = function() {};
//   this.saxonAttack = function() {};
//   this.showStatus = function() {};
//   this.addViking = function() {};
// }
