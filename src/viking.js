// Soldier
class Soldier {

  constructor(healthValue, strengthValue) {

    this.strength = strengthValue
    this.health = healthValue

  }

  attack() {
    return this.strength
  }


  receiveDamage(damage) {
    this.health = this.health - damage


  }

}

// Viking
class Viking extends Soldier {

  constructor(nameValue, healthValue, strengthValue) {
    super(healthValue, strengthValue)

    this.name = nameValue

  }

  battleCry() {
    return "Odin Owns You All!"
  }





  receiveDamage(damage) {

    this.health -= damage
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`
    } else {
      return `${this.name} has received ${damage} points of damage`
    }


  }

}


// Saxon
class Saxon extends Soldier {
  constructor(healthValue, strengthValue) {
    super(healthValue, strengthValue)
  }

  attack() {
    return this.strength
  }

  receiveDamage(damage) {
    this.health -= damage
    if (this.health <= 0) {
      return `A Saxon has died in combat`
    } else {
      return `A Saxon has received ${damage} points of damage`
    }

  }
}

// War
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

  vikingAttack() {

  }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
