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
  }
  receiveDamage(damage) {
    this.health -= damage
    if (damage > this.health) {
      return `${this.name} has died in act of combat`
    } else {
      return `${this.name} has received ${damage} points of damage`
    }

  }

  battleCry() {
    return 'Odin Owns You All!'
  }

}


// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength)

  }
  receiveDamage(damage) {
    this.health -= damage
    if (damage > this.health) {
      return `A Saxon has died in combat`
    } else {
      return `A Saxon has received ${damage} points of damage `
    }

  }

}


// War
class War {
  constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
  }
  addViking(itemViking) {
    this.vikingArmy.push(itemViking)

  }
  addSaxon(itemSaxon) {
    this.saxonArmy.push(itemSaxon)
    
  }

  vikingAttack() {
    let indexSaxon = Math.trunc(Math.random() * (this.saxonArmy.length))
    let indexViking = Math.trunc(Math.random() * (this.vikingArmy.length))
    this.saxonArmy[indexSaxon].receiveDamage(this.vikingArmy[indexViking].strength)

    if (this.saxonArmy[indexSaxon].health <= 0) {
      this.saxonArmy[indexSaxon].splice(indexSaxon, 1)
    } else {
      return this.vikingArmy[indexViking].strength
    }

  }

  saxonAttack() {
    let indexSaxon = Math.trunc(Math.random() * (this.saxonArmy.length))
    let indexViking = Math.trunc(Math.random() * (this.vikingArmy.length))
    this.vikingArmy[indexViking].receiveDamage(this.saxonArmy[indexSaxon].strength)

    if (this.vikingArmy[indexViking].health <= 0) {
      this.vikingArmy[indexViking].splice(indexViking, 1)
    } else {
      return this.saxonArmy[indexSaxon].strength
    }

  }

  showStatus() {

    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!"

    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day..."

    } else if (this.saxonArmy.length === this.vikingArmy.length) {

      return "Vikings and Saxons are still in the thick of battle."
    }

  }
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
