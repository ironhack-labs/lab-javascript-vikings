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
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
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
    let randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomIndexViking = Math.floor(Math.random() * this.vikingArmy.length);

    let damageSaxon = this.saxonArmy[randomIndexSaxon].receiveDamage(
      this.vikingArmy[randomIndexViking].strength
    );

    if (this.saxonArmy[randomIndexSaxon].health <= 0) {
      this.saxonArmy.splice(randomIndexSaxon, 1);
    }
    return damageSaxon;
  }

  saxonAttack() {
    let randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomIndexViking = Math.floor(Math.random() * this.vikingArmy.length);

    let damageViking = this.vikingArmy[randomIndexViking].receiveDamage(
      this.saxonArmy[randomIndexSaxon].strength
    );

    if (this.vikingArmy[randomIndexSaxon].health <= 0) {
      this.vikingArmy.splice(randomIndexSaxon, 1);
    }
    return damageViking;
  }
  // showStatus()
}

const thor = new Viking('Thor', 100, 80);
//const thor2 = new Viking('Thor2', 100, 70);
const loki = new Saxon(100, 85);
//const loki2 = new Saxon(100, 75);

let war1 = new War();
war1.addViking(thor);
war1.addSaxon(loki);

war1.vikingAttack;

console.log(war1.vikingArmy);
console.log(war1.saxonArmy);

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
