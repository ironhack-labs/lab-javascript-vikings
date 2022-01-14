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

const soldier1 = new Soldier(300, 150)


// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
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

const viking1 = new Viking('Harald', 300, 150)

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength)
  }

  receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
}


class War {
  constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking)
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon)
  }

  removeDead(army) {
    if (army.length === 0) return
    let indexOfDeadSoldier = 0
    for (let i = 0; i < army.length; i++) {
      if (army[i].health <= 0) {
        indexOfDeadSoldier = i
        break
      }
    }
    army.splice(indexOfDeadSoldier, 1)
  }

  vikingAttack() {
    const randomSaxon = Math.floor(Math.random() * (this.saxonArmy.length))
    const randomViking = Math.floor(Math.random() * (this.vikingArmy.length))

    const result = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength)

    this.removeDead(this.saxonArmy)

    return result
  }

  saxonAttack() {
    if (!this.vikingArmy.length) return
    const randomSaxon = Math.floor(Math.random() * (this.saxonArmy.length))
    const randomViking = Math.floor(Math.random() * (this.vikingArmy.length))
    console.log(randomViking, this.vikingArmy, this.vikingArmy[randomViking])
    const result = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength)

    this.removeDead(this.vikingArmy)

    return result
  }



}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
