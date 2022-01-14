// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health,
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

  battleCry() {
    return `Odin Owns You All!`
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

  receiveDamage(damage) {
    this.health -= damage
    if (this.health <= 0) {
      return `A Saxon has died in combat`
    } else {
      return `A Saxon has received ${damage} points of damage`
    }
  }

}

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
function getRandomInt(max) {
  return Math.floor(Math.random() * max)
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
    let randomSaxon = getRandomInt(this.saxonArmy.length)
    let randomViking = getRandomInt(this.vikingArmy.length)
    let viking = this.vikingArmy[randomViking]
    let saxon = this.saxonArmy[randomSaxon]

    let damage = saxon.receiveDamage(viking.attack())

    if (saxon.health <= 0) {
      this.saxonArmy.splice(randomSaxon)
    }




    return damage



  }
  saxonAttack() {
    let randomSaxon = getRandomInt(this.saxonArmy.length)
    let randomViking = getRandomInt(this.vikingArmy.length)
    let viking = this.vikingArmy[randomViking]
    let saxon = this.saxonArmy[randomSaxon]


    let damage = viking.receiveDamage(saxon.attack())

    if (viking.health <= 0) {
      this.vikingArmy.splice(randomViking)
    }

    return damage




  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
