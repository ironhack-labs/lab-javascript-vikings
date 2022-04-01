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
  
    battleCry() {
      return "Odin Owns You All!"
    }
  
    receiveDamage(theDamage) {
      this.health -= theDamage
      if (this.health > 0) {
        return `${this.name} has received ${theDamage} points of damage`
      } else {
        return `${this.name} has died in act of combat`
  
      }
    }
  }

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super()
    this.health = health
    this.strength = strength
  }
  receiveDamage(theDamage) {
    this.health -= theDamage
    if (this.health > 0) {
      return `A Saxon has received ${theDamage} points of damage`
    } else {
      return `A Saxon has died in combat`

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
  
      const randomSaxon = this.saxonArmy[Math.floor(Math.random(0, this.vikingArmy.length))]
      const randomViking = this.vikingArmy[Math.floor(Math.random(0, this.saxonArmy.length))]
  
      return randomSaxon.receiveDamage(randomViking.strength)
  
      if (randomSaxon.health <= 0) {
        let indexViking = this.vikingArmy.indexOf(randomViking)
        randomViking.splice(indexViking, indexViking)
        return result
      }
    }
    saxonAttack() { }
    showStatus() { }
  }



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
