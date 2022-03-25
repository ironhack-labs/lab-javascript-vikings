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
    } else if (this.health <= 0) {
      return `${this.name} has died in act of combat`
    }
  }
  battleCry() {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(healthValue, strengthValue) {
    super(healthValue, strengthValue)
  }
  receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else if (this.health <= 0) {
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
    const randomVikingNum = Math.floor((Math.random() * (this.vikingArmy.length - 0 + 1)) + 0)
    let randomViking = this.vikingArmy[randomVikingNum]
    const randomSaxonNum = Math.floor((Math.random() * (this.saxonArmy.length - 0 + 1)) + 0)
    let randomSaxon = this.saxonArmy[randomSaxonNum]

    randomSaxon.receiveDamage(randomViking.strength)





  }

  saxonAttack() {
    const randomVikingNum = Math.floor((Math.random() * (this.vikingArmy.length - 0 + 1)) + 0)
    let randomViking = this.vikingArmy[randomVikingNum]
    const randomSaxonNum = Math.floor((Math.random() * (this.saxonArmy.length - 0 + 1)) + 0)
    let randomSaxon = this.saxonArmy[randomSaxonNum]
  }

  showStatus() {
    if (this.saxonArmy.length <= 0) {
      return 'Vikings have won the war of the century!'
    }
    if (this.vikingArmy.length <= 0) {
      return 'Saxons have fought for their lives and survived another day...'
    }
    if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
      return 'Vikings and Saxons are still in the thick of battle.'
    }

  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
