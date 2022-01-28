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
    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    }
    return `A Saxon has received ${damage} points of damage`;
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
    const unluckySaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const viking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    if (unluckySaxon.health - viking.attack() <= 0) {
      this.saxonArmy = this.saxonArmy.filter((saxon) => saxon != unluckySaxon);
    }

    return unluckySaxon.receiveDamage(viking.attack());
  }

  saxonAttack() {
    const saxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const sonOfOdin =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    if (sonOfOdin.health - saxon.attack() <= 0) {
      this.vikingArmy = this.vikingArmy.filter((viking) => viking != sonOfOdin);
    }

    return sonOfOdin.receiveDamage(saxon.attack());
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
