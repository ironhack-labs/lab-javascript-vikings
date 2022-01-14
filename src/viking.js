// Soldier
class Soldier {
  constructor(healthValue, strengthValue) {
    this.health = healthValue
    this.strength = strengthValue

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
  constructor(nameValue, healthValue, strengthValue) {
    super(healthValue, strengthValue)
    this.name = nameValue
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
class War { }



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
