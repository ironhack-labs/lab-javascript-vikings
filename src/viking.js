// Soldier
class Soldier {
  constructor (health, strength) {
    this.health=health
    this.strength=strength
  }
  attack() 
  {return this.strength}

  receiveDamage(damage){
    this.health=(this.health-damage)
  }


}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
    
  }

  receiveDamage(damage) {
    
    if (damage<this.health) {
      this.health=(this.health-damage)
      return (`${this.name} has received ${damage} points of damage`)
    }
    else {this.health=(this.health-damage)
    return (`${this.name} has died in act of combat`)}
  }

  battleCry () {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  // super()

  receiveDamage(damage) {
    
    if (damage<this.health) {
      this.health=this.health-damage
      return (`A Saxon has received ${damage} points of damage`)
    }
    else {this.health=this.health-damage
        return (`A Saxon has died in combat`)}
  }

  }


// War
class War {
  constructor () {
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
    const rndVik = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    const rndSax = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    const result = rndSax.receiveDamage(rndVik.strength)
    if (rndSax.health <= 0) {
      let saxIndex = this.saxonArmy.indexOf(rndSax)
      this.saxonArmy.splice(saxIndex,1)
    }
    return result
  }
  saxonAttack() {
    const rndVik = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    const rndSax = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    const result = rndVik.receiveDamage(rndSax.strength)
    if (rndVik.health <= 0) {
      let vikIndex = this.vikingArmy.indexOf(rndVik)
      this.vikingArmy.splice(vikIndex,1)
    }
    return result
  }
  showStatus() {
    if (this.vikingArmy.length === 0) 
    {return 'Saxons have fought for their lives and survived another day...'}
    else if (this.saxonArmy.length === 0) 
    {return 'Vikings have won the war of the century!'}
    else return 'Vikings and Saxons are still in the thick of battle.'
  }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
