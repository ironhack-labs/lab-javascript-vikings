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
    //this.health -= damage;
    super.receiveDamage(damage);
    const isVikingAlive = this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
    return isVikingAlive;
  }
  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage);
    const isSaxonAlive = this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
    return isSaxonAlive;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  };

  addViking(vikingsFighters) {
    this.vikingArmy.push(vikingsFighters);
  };

  addSaxon(saxonsFighters) {
    this.saxonArmy.push(saxonsFighters);
  };

  vikingAttack() {
    let randomVikingArmyLength = Math.floor(Math.random() * this.vikingArmy.length);
    let randomSaxonArmyLength = Math.floor(Math.random() * this.saxonArmy.length);
    let randomViking = this.vikingArmy[randomVikingArmyLength];
    let randomSaxon = this.saxonArmy[randomSaxonArmyLength];
    let result = randomSaxon.receiveDamage(randomViking.strength);
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonArmyLength, 1)
    }
    return result;
  };

  saxonAttack() {
    let randomVikingArmyLength = Math.floor(Math.random() * this.vikingArmy.length);
    let randomSaxonArmyLength = Math.floor(Math.random() * this.saxonArmy.length);
    let randomViking = this.vikingArmy[randomVikingArmyLength];
    let randomSaxon = this.saxonArmy[randomSaxonArmyLength];
    let result = randomViking.receiveDamage(randomSaxon.strength);
    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomVikingArmyLength, 1)
    }
    return result;

  };
  showStatus() {
    if (!this.saxonArmy.length) {
      return "Vikings have won the war of the century!";
    } else if (!this.vikingArmy.length) {
      return "Saxons have fought for their lives and survived another day...";
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
