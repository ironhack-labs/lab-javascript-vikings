function chooseRandom(arr) {
  let random = Math.floor(Math.random() * arr.length);
  return [random, arr[random]];
}

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
      return `A Saxon has died in combat`;
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
    let viking = chooseRandom(this.vikingArmy);
    let saxon = chooseRandom(this.saxonArmy);
    let retval = saxon[1].receiveDamage(viking[1].attack());
    if (saxon[1].health <= 0) {
      this.saxonArmy.splice(saxon[0], 1);
    }
    return retval;
  }
  saxonAttack() {
    let viking = chooseRandom(this.vikingArmy);
    let saxon = chooseRandom(this.saxonArmy);
    let retval = viking[1].receiveDamage(saxon[1].strength);
    if (viking[1].health <= 0) {
      this.vikingArmy.splice(viking[0], 1);
    }
    return retval;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length === 0) {
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
