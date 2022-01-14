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

    }

    else {
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


  addViking(Viking) { this.vikingArmy.push(Viking) }

  addSaxon(Saxon) { this.saxonArmy.push(Saxon) }

  vikingAttack() {

    let randomSaxon = Math.floor((Math.random()) * this.saxonArmy.length)
    let randomViking = Math.floor((Math.random()) * this.vikingArmy.length)

    let result = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength)

    if (this.saxonArmy[randomSaxon].health <= 0) {
      this.saxonArmy.splice(randomSaxon, 1)
    }
    return result
  }

  saxonAttack() {
    let randomSaxon = Math.floor((Math.random()) * this.saxonArmy.length)
    let randomViking = Math.floor((Math.random()) * this.vikingArmy.length)

    let result = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength)

    if (this.vikingArmy[randomViking].health <= 0) {
      this.vikingArmy.splice(randomViking, 1)
    }
    return result
  }

  showStatus() {
    if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...'
    }

    else if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!'
    }

    else {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }



}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
