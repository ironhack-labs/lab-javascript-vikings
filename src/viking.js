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
class Viking extends Soldier{
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
  }
  receiveDamage(damage) {
    this.health -= damage
    if (this.health === 0) {
      return this.name + " has died in act of combat"
    } else {
      return this.name + " has received "+ damage + " points of damage"
    }
  }
  battleCry() {
    return "Odin Owns You All!"
  }

}

// Saxon
class Saxon extends Soldier {

  receiveDamage(damage) {
    this.health -= damage
    if (this.health === 0) {
      return "A Saxon has died in combat"
    } else {
      return "A Saxon has received "+ damage + " points of damage"
    }
  }


}

// War
class War {

  constructor() {
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
      
      let randomVik = Math.floor((Math.random() * this.vikingArmy.length))

      let v = this.vikingArmy[randomVik]

      let dmg = v.strength
      
      let randomSax = Math.floor((Math.random() * this.saxonArmy.length))
      
      let s = this.saxonArmy[randomSax]
    

      
        
      //   // if (this.saxonArmy[randomSax].health <= 0) {
      // if (s.health<=0) {
        
      // }
      // let index = saxonArmy.indexOf(s)
      //    this.saxonArmy.slice(index, 1)
          
      //   // }
      
      
      
      
      
      return s.receiveDamage(dmg)

    }

  // saxonAttack()

  // showStatus()

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
