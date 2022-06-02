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

    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }

    return `${this.name} has received ${damage} points of damage`;
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
    }

    return 'A Saxon has died in combat';
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    const saxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const viking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    const result = saxon.receiveDamage(viking.strength);

    if (saxon.health <= 0) {
      this.saxonArmy = this.saxonArmy.filter((saxon) => saxon.health > 0);
    }

    return result;
  }

  saxonAttack() {
    const saxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const viking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    const result = viking.receiveDamage(saxon.strength);

    if (viking.health <= 0) {
      this.vikingArmy = this.vikingArmy.filter((viking) => viking.health > 0);
    }

    return result;
  }

  showStatus() {
    if (!this.saxonArmy.length) {
      return 'Vikings have won the war of the century!';
    }

    if (!this.vikingArmy.length) {
      return 'Saxons have fought for their lives and survived another day...';
    }

    if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
