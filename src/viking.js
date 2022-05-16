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

    if (this.health <= 0) {
      return `${this.name} has died in act of combat`
    }
    return `${this.name} has received ${damage} points of damage`
  }

  battleCry() {
    return `Odin Owns You All!`
  }
}




// Saxon

class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage

    if (this.health <= 0) {
      return `A Saxon has died in combat`
    }
    return `A Saxon has received ${damage} points of damage`
  }

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
    const dice = 0 + Math.floor(this.saxonArmy.length * Math.random())
    this.saxonArmy[dice].receiveDamage(this.vikingArmy[dice].strength)

    if (this.saxonArmy[dice].health <= 0) {
      this.saxonArmy.splice(dice, 1)
    }
  }

  saxonAttack() {
    const dice = 0 + Math.floor(this.vikingArmy.length * Math.random())
    this.vikingArmy[dice].receiveDamage(this.saxonArmy[dice].strength)

    if (this.vikingArmy[dice].health <= 0) {
      this.vikingArmy.splice(dice, 1)
    }
  }
}



const viking1 = new Viking('Alnior', 10, 15)

console.log(viking1.receiveDamage(10))
console.log('Viking1:', viking1)


const war1 = new War()

war1.addViking(viking1)
console.log('war1:', war1)



















// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
