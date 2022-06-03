// Soldier
class Soldier {
  constructor (healthValue, strengthValue) {
    this.health = healthValue
    this.strength = strengthValue
  }

  attack () {
    return this.strength
  }

  receiveDamage (damage) {
    this.health -= damage 
  }
}

// Viking
class Viking extends Soldier {
  constructor(nameValue, healthValue, strengthValue) {
    super (healthValue, strengthValue)
    this.name = nameValue
  }

  receiveDamage (damage) {
    this.health -= damage
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    } 
  }
  battleCry() {
    return 'Odin Owns You All!'
  }
}
  
// Saxon
class Saxon extends Soldier {
  receiveDamage (damage) {
    this.health -= damage
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`
    } 
  }
}

// War
class War {
  vikingArmy = []
  saxonArmy = []
  

  addViking (Viking) {
    this.vikingArmy.push(Viking) 
  }
  
  addSaxon (Saxon) {
    this.saxonArmy.push(Saxon)
  }

  vikingAttack () {
    const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    const randomSaxon = this.saxonArmy[Math.floor (Math.random() * this.saxonArmy.length)]

   let receivedDamage = randomSaxon.receiveDamage(randomViking.strength)

   if (randomSaxon.health <= 0) {
     this.saxonArmy.splice(randomSaxon, 1)
   }
    return receivedDamage
  }
  
  saxonAttack () {
    const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]

    let receivedDamage = randomViking.receiveDamage(randomSaxon.strength)

    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomViking, 1)
    }
    return receivedDamage
  }


  showStatus () {}

}





// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}