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
  constructor(health, strength) {
    super(health, strength);
  }

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
    this.randomVik = Math.floor(Math.random() * this.vikingArmy.length);
    this.randomSax = Math.floor(Math.random() * this.saxonArmy.length);
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    const result = this.saxonArmy[this.randomSax].receiveDamage(
      this.vikingArmy[this.randomVik].strength
    );

    // get the index of the random one and find it in the array
    if (this.saxonArmy[this.randomSax].health <= 0) {
      let deadSoldier = this.saxonArmy.indexOf(this.randomSax);
      this.saxonArmy.splice(deadSoldier, 1);
    }

    return result;
  }

  saxonAttack() {
    const result = this.vikingArmy[this.randomVik].receiveDamage(
      this.saxonArmy[this.randomSax].strength
    );

    if (this.vikingArmy[this.randomVik].health <= 0) {
      let deadSoldier = this.vikingArmy.indexOf(this.randomVik);
      this.vikingArmy.splice(deadSoldier, 1);
    }

    return result;
  }

  showStatus() {
    if (this.saxonArmy.length <= 0) {
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length <= 0) {
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
