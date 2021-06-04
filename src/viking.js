// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }

  attack () {
    return this.strength
  }

  receiveDamage(damage) {

     this.health = this.health - damage
  }

}







// Viking

class Viking extends Soldier {
  constructor (nameValue, healthValue, strengthValue) {
    super(healthValue, strengthValue) 

      this.name = nameValue
  }
 
  
  receiveDamage(damage) {
    super.receiveDamage(damage) 

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
class Saxon extends Soldier{

  receiveDamage(damage) {
    super.receiveDamage(damage)

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
    
  }
  vikingArmy = []
  saxonArmy = []


  addViking(viking) {
    this.vikingArmy.push(viking)
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  }

  vikingAttack() {
    let randomSaxon = this.saxonArmy  [
      Math.floor(math.random()*this.saxonArmy.length)
    ]

    let randomviking = this.saxonArmy[
      Math.floor(math.random()*this.vikingArmy.length)
    ]

  }
  
  saxonAttack() {
    let randomSaxon = this.saxonArmy[
      Math.floor(math.random() * this.saxonArmy.length)
    ]

    let randomviking = this.saxonArmy[
      Math.floor(math.random() * this.vikingArmy.length)
    ]


  }


}






// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
