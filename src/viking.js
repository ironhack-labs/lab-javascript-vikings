// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health,
      this.strength = strength,
      this.attack = function () {
        return this.strength = strength;
      },
      this.receiveDamage = function (damage) {
        this.health = health - damage;
      }
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
    this.receiveDamage = function (damage) {
      this.health = health - damage;
      if (this.health <= 0) {
        return (`${this.name} has died in act of combat`);
      } else if (this.health > 0) {
        return (`${this.name} has received ${damage} points of damage`);
      }
    }
    this.battleCry = function () {
      return (`Odin Owns You All!`);
    }
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage = function (damage) {
    this.health = this.health - damage;
    if (this.health <= 0) {
      return (`A Saxon has died in combat`);
    } else if (this.health > 0) {
      return (`A Saxon has received ${damage} points of damage`);
    }
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];
  constructor() {
    this.addViking = function (Viking) {
      this.vikingArmy.push(Viking);
    }
    this.addSaxon = function (Saxon) {
      this.saxonArmy.push(Saxon);
    }
    this.vikingAttack = function () {

    }
    this.saxonAttack = function () {

    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
