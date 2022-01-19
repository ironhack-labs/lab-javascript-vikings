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
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return 'A Saxon has died in combat';
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {
    this.attack(this.vikingArmy, this.saxonArmy);
  }
  saxonAttack() {
    this.attack(this.saxonArmy, this.vikingArmy);
  }
  attack(attacker, defender) {
    const ranDefender = Math.floor(Math.random() * defender.length);
    const ranAttacker = Math.floor(Math.random() * attacker.length);
    defender[ranDefender].receiveDamage(attacker[ranAttacker].strength);
    if (defender[ranDefender].health < 1) {
      defender.splice(ranDefender, 1);
      // Can't get this to work
      if (defender === this.vikingArmy) {
        return `A Viking has died in combat`;
      } else {
        return `A Saxon has died in combat`;
      }
    } else {
      console.log(defender[ranDefender]);
      return `${defender[ranDefender].name} has received ${attacker[ranAttacker].strength} points of damage`;
    }
  }
  showStatus() {
    if (this.saxonArmy.length < 1) {
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length < 1) {
      return 'Saxons have fought for their lives and survived another day...';
    } else {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
