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

    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    } else {
      return `${this.name} has received ${damage} points of damage`;
    }
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    } else {
      return `A Saxon has received ${damage} points of damage`;
    }
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
    const victim =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const attacker =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    victim.receiveDamage(attacker.strength);

    if (victim.health <= 0) {
      this.saxonArmy.shift(victim);
    }

    return victim.health;
  }

  saxonAttack() {
    const victim =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    const attacker =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    victim.receiveDamage(attacker.strength);

    if (victim.health <= 0) {
      this.vikingArmy.shift(victim);

      return `${victim.name} has received ${attacker.strength} points of damage`;
    }
  }
  showStatus() {}
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
