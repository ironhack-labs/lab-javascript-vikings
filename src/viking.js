// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health,
    this.strength = strength
  }
  attack = () => {
    return `The strength : ${this.strength}`
  }
  receiveDamage = (theDamage) => {}
}

// Viking
class Viking extends Soldier {
  constructor (name, health, strength){
    super(health, strength)
    this.name = name
  }
  attack = () => {
    return `${this.strength} of the Viking.`
  }
  receiveDamage = (theDamage) => {
    return `${this.name.toUpperCase} has received Damage.toUpperCase point of damage.`
    }
    battleCry = () => {
      return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage = (theDamage) => {}
}

// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
