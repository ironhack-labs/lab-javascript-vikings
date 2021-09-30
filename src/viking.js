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
  addViking(vikingObj) {
    this.vikingArmy.push(vikingObj);
  }
  addSaxon(saxonObj) {
    this.saxonArmy.push(saxonObj);
  }
  vikingAttack() {
    return this.attack(true);
    // const randomVikingIndex = Math.floor(
    //   Math.random() * this.vikingArmy.length
    // );
    // const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    // const randomViking = this.vikingArmy[randomVikingIndex];
    // const randomSaxon = this.saxonArmy[randomSaxonIndex];
    // const result = randomSaxon.receiveDamage(randomViking.strength);
    // if (randomSaxon.health <= 0) {
    //   this.saxonArmy.splice(randomSaxonIndex, 1);
    // }
    // return result;
  }

  saxonAttack() {
    return this.attack(false);
    // const randomVikingIndex = Math.floor(
    //   Math.random() * this.vikingArmy.length
    // );
    // const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    // const randomViking = this.vikingArmy[randomVikingIndex];
    // const randomSaxon = this.saxonArmy[randomSaxonIndex];
    // const result = randomViking.receiveDamage(randomSaxon.strength);
    // if (randomViking.health <= 0) {
    //   this.vikingArmy.splice(randomVikingIndex, 1);
    // }
    // return result;
  }

  // vikingOrNot - is the attacker Viking Or Not
  attack(vikingOrNot) {
    const randomVikingIndex = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomViking = this.vikingArmy[randomVikingIndex];
    const randomSaxon = this.saxonArmy[randomSaxonIndex];
    const attacker = vikingOrNot ? randomViking : randomSaxon;
    const attacked = vikingOrNot ? randomSaxon : randomViking;
    const result = attacked.receiveDamage(attacker.strength);
    if (attacked.health <= 0) {
      (vikingOrNot ? this.saxonArmy : this.vikingArmy).splice(
        vikingOrNot ? randomSaxonIndex : randomVikingIndex,
        1
      );
    }
    return result;
  }
  showStatus() {
    if (!this.saxonArmy.length) {
      return `Vikings have won the war of the century!`;
    }
    if (!this.vikingArmy.length) {
      return `Saxons have fought for their lives and survived another day...`;
    }
    if (this.saxonArmy.length && this.vikingArmy.length) {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
