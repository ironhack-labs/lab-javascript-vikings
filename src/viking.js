// Soldier
class Soldier {

    constructor(healthValue, strengthValue) {
      this.health = healthValue;
      this.strength = strengthValue;
    }

    attack() {
        return this.strength
    }
    receiveDamage(damage){
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
        this.health -= damage;

        if(this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            
            return `${this.name} has died in act of combat`
        }
        
    }
    battleCry() {
    return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    
      receiveDamage(damage) {
        this.health -= damage;

        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {

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

   addViking(viking) {
    this.vikingArmy.push(viking)
   }
   addSaxon(saxon) {
    this.saxonArmy.push(saxon)
   }

   vikingAttack() {
    
    let randomSaxon = this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())];
    let randomViking = this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())];
    let indexOfRandomSaxon = this.saxonArmy.indexOf(randomSaxon)
    
    randomSaxon.receiveDamage(randomViking.strength)
    //NOS RENDIMOS!!!!!!!!!!!! HAPPY WEEKEND
    if(randomSaxon.health === 0 || randomSaxon.health < 0) {
      this.saxonArmy.splice(indexOfRandomSaxon)
      return 'A Saxon has died in combat'
    }
   }

   saxonAttack() {

    let randomSaxon = this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())];
    let randomViking = this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())];

    let indexOfRandomViking = this.vikingArmy.indexOf(randomViking)
    
    randomViking.receiveDamage(randomSaxon.strength)

    if(randomViking.health === 0 || randomViking.health < 0) {
    this.vikingArmy.splice(indexOfRandomViking)
   }
     return `${randomViking.name} has received ${randomSaxon.strength} points of damage`
   }

   showStatus() {
    if(this.vikingArmy.length === 0) {
        return 'Saxons have fought for their lives and survived another day...'
    }
    if(this.saxonArmy.length === 0) {
        return 'Vikings have won the war of the century!'
    }
    else return "Vikings and Saxons are still in the thick of battle."
   }
}





