// Soldier

class Soldier {
  constructor(health, strength){
    this.health = health
    this.strength = strength
  }
    
  attack() {
    return this.strength
    }
    
  receiveDamage(theDamage) {
    this.health = this.health - theDamage
  }
}


// Viking

class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name
  }
  
  attack() {
    return this.strength
  }
  
  receiveDamage(theDamage) {
    this.health = this.health - theDamage
  
    
    if (this.health > 0) {
      return(`${this.name} has received ${theDamage} points of damage`)
    }

    if (this.health <= 0) {
      return(`${this.name} has died in act of combat`)
    }
  }

  battleCry() {
    return("Odin Owns You All!")
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(theDamage) {
    this.health = this.health - theDamage

    if (this.health > 0) {
      return(`A Saxon has received ${theDamage} points of damage`)
    }
      if (this.health <= 0) {
        return("A Saxon has died in combat")
    }
  }
}


// War
class War {
 
  saxonArmy = []
  vikingArmy = []

  addViking(viking) {
    this.vikingArmy.push(viking)
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  }
  vikingAttack() {
    const randomSaxon = saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    const randomViking = vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    console.log(randomSaxon)
    console.log(randomViking)
    randomSaxon.receiveDamage(randomViking.strength)
    
  }
  saxonAttack() {
    randomViking.receiveDamage === (randomSaxon.strength)
  }
  showStatus() {
    if (Viking.health > 0 && Saxon.health > 0) {
      return("Vikings and Saxons are still in the thick of battle.")
    }
  }
}











// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}

// test