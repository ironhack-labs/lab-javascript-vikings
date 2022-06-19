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
      this.health = this.health - damage
    } 
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength)
    this.name = name 
  }
  receiveDamage(damage) {
    this.health = this.health - damage
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    }
    else {
      return `${this.name} has died in act of combat`
    }
  }
  battleCry(){
    return "Odin Owns You All!"
  } 
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health = this.health - damage
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    }
    else return "A Saxon has died in combat"
  }
}

// War
class War { constructor() {
      this.vikingArmy = []
      this.saxonArmy = []
    }
    addViking(viking){  
      this.vikingArmy.push(viking)
      
    }
    addSaxon (saxon) {
      this.saxonArmy.push(saxon)
    }
    
    vikingAttack(){
      this.rndSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)] 
      this.rndViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)] 
      
      this.rndSaxon.receiveDamage(this.rndViking.strength)
      
      if (this.rndSaxon.health <= 0) {this.saxonArmy.splice(this.saxonArmy.indexOf(this.rndSaxon), 1)
        return this.rndSaxon.receiveDamage(this.rndViking.strength)
      }
      else return this.rndSaxon.receiveDamage(this.rndViking.strength)
    }
    saxonAttack (){
      this.rndSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)] 
      this.rndViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)] 
      this.rndViking.receiveDamage(this.rndSaxon.strength) 
     
      if (this.rndViking.health <= 0) {this.vikingArmy.splice(this.vikingArmy.indexOf(this.rndViking), 1)
      return this.rndViking.receiveDamage(this.rndSaxon.strength) 
      }
     else return `${this.rndViking.name} has received ${this.rndSaxon.strength} points of damage`
    }
    
    showStatus(){
      if (this.vikingArmy.length === 0) {return `Saxons have fought for their lives and survived another day...`}
      else if (this.saxonArmy.length === 0) {return `Vikings have won the war of the century!`}
      else if (this.saxonArmy.length > 0 && this.saxonArmy.length > 0 ) {return `Vikings and Saxons are still in the thick of battle.`}
    }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
