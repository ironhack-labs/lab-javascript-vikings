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

    let indexOfSaxon = this.saxonArmy.indexOf(randomSaxon)
    let indexOfViking = this.vikingArmy.indexOf(randomViking)

    console.log(randomSaxon)
    
    randomSaxon.receiveDamage(randomViking.strength)

    //NOS RENDIMOS!!!!!!!!!!!! HAPPY WEEKEND

   }
   saxonAttack() {

   }
   showStatus() {

   }
}





