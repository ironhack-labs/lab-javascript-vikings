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
  constructor (name, health, strength) {
    super(health, strength);
    this.name = name;
    //this.vikStr = str;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else if (damage > this.health) {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return ("Odin Owns You All!");
  }
}

// Saxon
class Saxon extends Soldier {
  constructor (health, strength) {
    super(health, strength);
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else if (damage > this.health) {
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
    const randomVikingNumber = Math.random() * this.vikingArmy.length;
    const randomVikingIndex = Math.floor(randomVikingNumber);
    const randomViking = this.vikingArmy[randomVikingIndex];

    const randomSaxonNumber = Math.random() * this.saxonArmy.length;
    const randomSaxonIndex = Math.floor(randomSaxonNumber);
    const randomSaxon = this.saxonArmy[randomSaxonIndex];

    const result = randomSaxon.receiveDamage(randomViking.attack());

    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }

    return result;
  }
  saxonAttack() {
    const randomVikingNumber = Math.random() * this.vikingArmy.length;
    const randomVikingIndex = parseInt(Math.floor(randomVikingNumber));
    const randomViking = this.vikingArmy[randomVikingIndex];

    const randomSaxonNumber = Math.random() * this.saxonArmy.length;
    const randomSaxonIndex = parseInt(Math.floor(randomSaxonNumber));
    const randomSaxon = this.saxonArmy[randomSaxonIndex];

    const result = randomViking.receiveDamage(randomSaxon.attack());

    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
    }

    return result;
  }
  showStatus() {
    if (this.vikingArmy.length <= 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else if (this.saxonArmy.length <= 0) {
      return "Vikings have won the war of the century!";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
