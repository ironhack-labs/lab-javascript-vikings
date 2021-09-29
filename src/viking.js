// Soldier
class Soldier {
  constructor (health, strength) {
    this.health = health
    this.strength = strength
  }

  attack() {
    return this.strength
  }

  receiveDamage(damage) {
    this.health-=damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
  }

  receiveDamage(damage) {
    this.health-=damage
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`
    }
    else {
      return `${this.name} has received ${damage} points of damage`
    }
  }

  battleCry() {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {

  receiveDamage(damage) {
    this.health-=damage
    if (this.health <= 0) {
      return `A Saxon has died in combat`
    }
    else {
      return `A Saxon has received ${damage} points of damage`
    }
  }
}

// War
class War {
  constructor () {
    this.vikingArmy = []
    this.saxonArmy = []
  }

  addViking(vikingWarrior) {
    this.vikingArmy.push(vikingWarrior)
  }
  addSaxon(saxonWarrior) {
    this.saxonArmy.push(saxonWarrior)
  }
  vikingAttack() {
    let randomSaxon = Math.floor(Math.random()*this.saxonArmy.length)
    let randomViking = Math.floor(Math.random()*this.vikingArmy.length)

    let result = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].attack())
    if (result === "A Saxon has died in combat")
    {
      this.saxonArmy.splice(randomSaxon, 1)
    }
    return result
  }
  saxonAttack() {}
  showStatus() {}
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
