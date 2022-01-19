
// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health
    this.strength = strength
  }

  attack () {
    return this.strength
  }

  receiveDamage(damage) {
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier {
  constructor (name, health, strength) {
    super(health, strength)
    this.name = name
  }

  receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }

  battleCry() {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  constructor (health, strength) {
    super(health, strength)
  }

  receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    }
    return "A Saxon has died in combat"
  }
}

function randomNumber(armyArray) {
  return Math.floor(Math.random() * armyArray.length)
}

// War
class War {
  constructor () {
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
    let saxonIndex = randomNumber(this.saxonArmy)
    let randomSaxon = this.saxonArmy[saxonIndex]

    let vikingIndex = randomNumber(this.vikingArmy)
    let randomViking = this.vikingArmy[vikingIndex]

    let result = randomSaxon.receiveDamage(randomViking.attack())
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(saxonIndex)
    }
    return result
  }

  saxonAttack() {
    let saxonIndex = randomNumber(this.saxonArmy)
    let randomSaxon = this.saxonArmy[saxonIndex]

    let vikingIndex = randomNumber(this.vikingArmy)
    let randomViking = this.vikingArmy[vikingIndex]

    let result = randomViking.receiveDamage(randomSaxon.attack())
    if (randomViking.health <= 0) {
      this.vikingArmy.splice(vikingIndex)
    }
    return result
  }

  showStatus() {
    if (this.saxonArmy.length === 1 && this.vikingArmy.length === 1) {
      return "Vikings and Saxons are still in the thick of battle."
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day..."
    } else if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!"
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
