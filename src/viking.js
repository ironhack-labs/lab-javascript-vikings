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
      this.health = 0;
      return `${this.name} has died in act of combat`;
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

  addViking(army) {
    this.vikingArmy.push(army);
  }
  addSaxon(army) {
    this.saxonArmy.push(army);
  }
  vikingAttack() {
    let randomSaxonArmy =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomVikingArmy =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    let result = randomSaxonArmy.receiveDamage(randomVikingArmy.strength);

    if (randomSaxonArmy.health <= 0) {
      let randomSaxonArmyIndex = this.saxonArmy.indexOf(randomSaxonArmy);
      this.saxonArmy.splice(randomSaxonArmyIndex, 1);
    }

    // if (saxonArmy.length === 0) {
    //   return `Vikings have won the war of the century!`;
    // }

    return result;
  }
  saxonAttack() {
    let randomSaxonArmy =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomVikingArmy =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    let result = randomVikingArmy.receiveDamage(randomSaxonArmy.strength);

    if (randomVikingArmy.health <= 0) {
      let randomVikingArmyIndex = this.vikingArmy.indexOf(randomVikingArmy);
      this.vikingArmy.splice(randomVikingArmyIndex, 1);
    }

    return result;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`;
    } else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
