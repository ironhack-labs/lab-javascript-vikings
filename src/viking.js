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
    super(name)
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


const viking1 = new Viking('Alnior', 10, 15)

console.log(viking1.receiveDamage(10))
console.log('Viking1:', viking1)





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
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
