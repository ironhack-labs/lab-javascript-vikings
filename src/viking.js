// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength


  }

  attack() {
    return this.strength

  }

  receiveDamage(strength) {
    this.health -= strength

  }

}

// Viking
class Viking extends Soldier {
  constructor(health, strength, name) {
    super(health, strength)
    this.name = name
  }
  receiveDamage(strength) {
    this.health -= strength
    if (health > 0) {
      return `${this.name} has received ${strength} pouints of damage`

    }
    else {
      return `${this.name} has died in act combat`
    }
  }
  battleCry() {
    return "Odin Owns You All!"
  }

}


// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {

  }
  receiveDamage(strength) {
    if (health > 0) {
      return `Saxon received ${strength} points of damage`
    }
    else {
      return `Saxon has died in act combat`
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
