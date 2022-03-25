// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }
  attack() {
    return this.strength
  }

  receiveDamage(theDamage) {
    this.health -= theDamage

  }
}


// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
  }

  receiveDamage(theDamage) {

    if (this.health -= theDamage) {
      return (`${this.name} has received ${theDamage} points of damage`)
    } else if (theDamage >= this.health) {
      return (`${this.name} has died in act of combat`)

    }
  }

  battleCry() {
    return ('Odin Owns You All!')
  }
}


// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength)
  }
  receiveDamage(theDamage) {

    if (this.health -= theDamage) {
      return (`A Saxon has received ${theDamage} points of damage`)
    } else if (theDamage >= this.health) {
      return (`A Saxon has died in combat`)

    }
  }
}

// War
class War {
  constructor() {
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

  }

  saxonAttack() { }
  showStatus() { }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
