// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(dam) {
    this.health -= dam;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(dam) {
    this.health -= dam;
    if (this.health > 0) {
      return `${this.name} has received ${dam} points of damage`;
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
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(dam) {
    this.health -= dam;
    if (this.health > 0) {
      return `A Saxon has received ${dam} points of damage`;
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
    const randomNumber = Math.floor(Math.random() * this.saxonArmy.length);
    const randomSax = this.saxonArmy[randomNumber];
    const vikingStrength = this.vikingArmy[0].strength;
    const damage = randomSax.receiveDamage(vikingStrength);

    if (randomSax.health <= 0) {
      this.saxonArmy.splice(randomNumber, 1);
    }

    return damage;
  }

  saxonAttack() {
    const randomNumber = Math.floor(Math.random() * this.vikingArmy.length);
    const randomViking = this.vikingArmy[randomNumber];
    const saxonStrength = this.saxonArmy[0].strength;
    const damage = randomViking.receiveDamage(saxonStrength);

    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomNumber, 1);
    }

    return damage;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
