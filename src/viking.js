// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }
  attack() {
    return this.strength
  }
  receiveDamage(damage) {
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
  }
  attack() {
    return this.strength
  }
  receiveDamage(damage) {
    super.receiveDamage(damage)
    if (this.health > 0) {
      return (`${this.name} has received ${damage} points of damage`)
    } else {
      return (`${this.name} has died in act of combat`)
    }
  }
  battleCry() {
    return (`Odin Owns You All!`)
  }
}



// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength)
  }
  attack() {
    super.attack()
    { return this.strength }
  }
  receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0) {
      return (`A Saxon has received ${damage} points of damage`)
    } else {
      return (`A Saxon has died in combat`)
    }
  }
}
function getRandomItem(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const randomItem = arr[randomIndex]
  return randomItem;
};
// War
class War {
  constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
  }

  addViking(viking) {
    this.vikingArmy.push(viking)
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  }

  vikingAttack() {
    const saxon = getRandomItem(this.saxonArmy);
    const viking = getRandomItem(this.vikingArmy);
    const resultVikingAttack = saxon.receiveDamage(viking.strength);
    if (saxon.health <= 0) {
      this.saxonArmy = this.saxonArmy.filter(item => item !== saxon)
    }
    return resultVikingAttack
  }

  saxonAttack() {
    const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
    const saxon = this.saxonArmy[randomSaxonIndex]
    const viking = this.vikingArmy[randomVikingIndex]
    const resultAxonAttack = viking.receiveDamage(saxon.strength)
    if (viking.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1)
    } return resultAxonAttack
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!"
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...'
    } else if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) {
      return 'Vikings and Saxons are still in the thick of battle.'
    }
  }
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
