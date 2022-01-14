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
    this.health = health
    this.strength = strength
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
    const randomViking = this.vikingArmy[Math.floor((Math.random() * this.vikingArmy.length))]
    const randomSaxon = this.saxonArmy[Math.floor((Math.random() * this.saxonArmy.length))]

    let newHealth = randomSaxon.receiveDamage(randomViking.strength)

    return newHealth
  }

  saxonAttack() {
    const randomViking = this.vikingArmy[Math.floor((Math.random() * this.vikingArmy.length))]
    const randomSaxon = this.saxonArmy[Math.floor((Math.random() * this.saxonArmy.length))]

    return randomViking.receiveDamage(randomSaxon.strength)

  }

  showStatus() {

  }
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
