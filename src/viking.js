// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
    console.log("this.health")
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
  constructor(name, health, strength) {
    super(health, strength)

    this.name = name
  }

  receiveDamage(damage) {
    this.health = this.health - damage
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`

    }
    else {
      return `${this.name} has died in act of combat`
    }
  }
  battleCry() {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {

  receiveDamage(damage) {
    this.health = this.health - damage
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`

    }
    else {
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

    let ranViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    let ranSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    let result = ranSaxon.receiveDamage(ranViking.strength)

    if (ranSaxon.health <= 0) {
      let index = 0
      index = this.saxonArmy.indexOf(ranSaxon)
      this.saxonArmy.splice(index, 1)
    }

    return result
  }

  saxonAttack() {

    let ranViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    let ranSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    let result = ranViking.receiveDamage(ranSaxon.strength)

    if (ranViking.health <= 0) {
      let index = 0
      index = this.vikingArmy.indexOf(ranViking)
      this.vikingArmy.splice(index, 1)
    }

    return result
  }

  genericAttack(Attack) {

  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!"
    }
    if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day..."
    }
    if (this.vikingArmy.length !== 0 && this.vikingArmy.length !== 0) {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
