// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack () {
    return this.strength
  }
  receiveDamage(demage) {
    this.health -= demage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage (damage) {
    this.health -= damage

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }

  battleCry () {
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
  }


// War
class War {
  vikingArmy = []
  saxonArmy = []
  addViking(viking) {
    this.vikingArmy.push(viking)
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  }

  vikingAttack() {
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[randomSaxonIndex];
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let resultOfVikingAttack = randomSaxon.receiveDamage(randomViking.strength);

    if(randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1)
    }
    return resultOfVikingAttack
  }

  saxonAttack() {
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let randomViking = this.vikingArmy[randomVikingIndex];
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let resultOfSaxonAttack = randomViking.receiveDamage(randomSaxon.strength);

    if(randomViking.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1)
    }
    return resultOfSaxonAttack

  }

  showStatus() {
    if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`
    }
    else if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`
    }
    else {
      return `Vikings and Saxons are still in the thick of battle.`
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
