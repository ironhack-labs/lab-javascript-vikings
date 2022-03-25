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

const soldier = new Soldier(100, 50)

// Viking
class Viking extends Soldier {

  constructor(name, health, strength) {

    super(health, strength)

    this.name = name
  }

  receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    }
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`
    }
  }

  battleCry() {
    return "Odin Owns You All!"
  }

}

const viking = new Viking("olaf", 70, 80)

// Saxon
class Saxon extends Soldier {

  receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    }
    if (this.health <= 0) {
      return `A Saxon has died in combat`
    }
  }
}

const saxon = new Saxon(100, 40)

// War
class War {
  vikingArmy = []
  saxonArmy = []

  addViking(viking) {
    this.vikingArmy.push(viking)
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  }

  vikingAttack() {
    function vikingRandom(vikingArmy) {
      let randomViking = Math.random()
      return randomViking
    }

    function saxonRandom(saxonArmy) {
      let randomSaxon = Math.random()
      return randomSaxon
    }

  }

  saxonAttack() {

  }

}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
