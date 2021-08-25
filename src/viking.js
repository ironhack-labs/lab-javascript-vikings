// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = Number(health);
    this.strength = Number(strength);
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
    return this.health > 0
      ? `${this.name} has received ${damage} points of damage`
      : `${this.name} has died in act of combat`;
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    return this.health > 0
      ? `A Saxon has received ${damage} points of damage`
      : `A Saxon has died in combat`;
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
    //get random numbers to pick a viking and a saxon
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

    //pick a viking from the array
    let randomViking = this.vikingArmy[randomVikingIndex];

    //pick a saxon from the array
    let randomSaxon = this.saxonArmy[randomSaxonIndex];

    //Viking attacks saxon

    let result = randomSaxon.receiveDamage(randomViking.attack());

    //remove saxon if dead
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }
    return result;
  }

  saxonAttack() {
    //get random numbers to pick a viking and a saxon
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

    //pick a viking from the array
    let randomViking = this.vikingArmy[randomVikingIndex];

    //pick a saxon from the array
    let randomSaxon = this.saxonArmy[randomSaxonIndex];

    //Saxon attacks viking
    let attack = randomSaxon.attack();

    let result = randomViking.receiveDamage(attack);

    //remove viking if dead
    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
    }
    return result;
  }

  showStatus() {
    if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) {
      return `Vikings and Saxons are still in the thick of battle.`;
    } else if (!this.vikingArmy.length) {
      return `Saxons have fought for their lives and survived another day...`;
    } else if (!this.saxonArmy.length) {
      return `Vikings have won the war of the century!`;
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
