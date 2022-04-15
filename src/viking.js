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
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    } else {
      return `${this.name} has received ${damage} points of damage`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
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
    const theSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const theViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    const result = theSaxon.receiveDamage(theViking.strength);

    if (theSaxon.health <= 0) {
      this.saxonArmy = this.saxonArmy.filter((element) => element !== theSaxon);
    }

    return result;
  }

  saxonAttack() {
    const theSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const theViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    const result = theViking.receiveDamage(theSaxon.strength);

    if (theViking.health <= 0) {
      this.vikingArmy = this.vikingArmy.filter(
        (element) => element !== theViking
      );
    }

    return result;
  }

  showStatus() {
    if (this.saxonArmy.length <= 0) {
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length <= 0) {
      return 'Saxons have fought for their lives and survived another day...';
    } else if (this.vikingArmy.length >= 1 || this.saxonArmy >= 1) {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
