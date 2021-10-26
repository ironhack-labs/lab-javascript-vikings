// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }

  attack() {
    return this.strength
  }

  receiveDamange(damage) {
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
  }

  receiveDamage(damage) {
    this.health -= damage
    console.log(damage)
    if (this.health > 0) {
      return `${this.name} has received ${this.damage} points of damage`
    } else {
      `${this.name} has died in act of combat`
    }
  }

  battleCry() {
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0) {
      return `A Saxon has received ${this.damage} points of damage`
    } else {
      `A Saxon has died in act of combat`
    }
  }
}

// War
class War {
  constructor () {
    this.vikingArmy = []
    this.saxonArmy = []
  }
  addViking(viking) {
    vikingArmy.push(viking)
  }

  addSaxon(saxon) {
    saxonArmy.push(saxon)
  }

  vikingAttack() {
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    const result = randomSaxon.receiveDamage(randomViking.strength) 
    this.saxonArmy.filter(s => s.health > 0)
    return result
  }

  saxonAttack() {

  }

  showStatus() {

  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
