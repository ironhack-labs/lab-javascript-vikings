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
      this.health = this.health - damage
      
    }
  }

// Viking

class Viking extends Soldier {
    constructor(name, health, strength) {
      super(health,strength)
      this.name = name
   }
   battleCry() {
   return ("Odin Owns You All!")
   }
   receiveDamage(damage) {
   this.health = this.health - damage
     if (this.health > 0) {
        return (`${this.name} has received ${damage} points of damage`)
     } else {
     
       return (`${this.name} has died in act of combat`)
     }
   }
}

// Saxon

class Saxon extends Soldier {

    receiveDamage(damage) {
      this.health = this.health - damage
      if (this.health > 0) {
        return (`A Saxon has received ${damage} points of damage`)
      } else {
        
        return ("A Saxon has died in combat")
      }
    }
  }

// War

class War {
    constructor () {
      this.vikingArmy = [],
        this.saxonArmy = []  
    }
    addViking(viking) {
      this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
      this.saxonArmy.push(saxon)
    }
  
    vikingAttack() {
      let  randomsaxon = Math.floor(Math.random() * this.saxonArmy.length)
      let  randomviking = Math.floor(Math.random() * this.vikingArmy.length)
      return this.saxonArmy[randomsaxon].receiveDamage(this.vikingArmy[randomviking].attack())
      if (this.saxonArmy[randomsaxon].health <= 0) {
     
        this.saxonArmy.splice(randomsaxon, 1) 
      }    
    }
    saxonAttack() {
        let  randomsaxon = Math.floor(Math.random() * this.saxonArmy.length)
        let  randomviking = Math.floor(Math.random() * this.vikingArmy.length)
        return this.vikingArmy[randomsaxon].receiveDamage(this.saxonArmy[randomviking].attack())
        if (this.vikingArmy[randomsaxon].health <= 0) {
       
          this.vikingArmy.splice(randomsaxon, 1) 
        }    
    }
    showStatus() {
  
    }
  }