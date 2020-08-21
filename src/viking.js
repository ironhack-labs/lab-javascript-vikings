// Soldier
class Soldier {
   
    constructor(par1, par2) {
   
        this.health = par1
        this.strength = par2
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
    
    constructor(par1, par2, par3) {

        super(par2, par3)
        this.name = par1
    }

    attack() {
      
        return this.strength
    }

    receiveDamage(damage) {

        this.health -= damage
        
        if (this.health > 0) {
          
            return (`${this.name} has received ${damage} points of damage`)
        
        } else {
        
            return (`${this.name} has died in act of combat`)
        }
        
    }

    battleCry() {
        
        return (`Odin Owns You All!`)
    }

}

// Saxon
class Saxon extends Soldier {

    constructor(par1, par2) {

        super(par1, par2)
    }

    attack() {

        return this.strength
    }

    receiveDamage(damage) {

        this.health -= damage

        if (this.health > 0) {

            return (`A Saxon has received ${damage} points of damage`)

        } else {

            return (`A Saxon has died in combat`)
        }
    }

}

// War

let viking = new Viking

let saxon = new Saxon

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
        
        saxon.health =- viking.strength 

        this.saxonArmy.pop()
        
        return saxon.receiveDamage(viking.strength) 
    
    }
   
   saxonAttack() {

        viking.health =- saxon.strength
        
        this.vikingArmy.pop()

        return viking.receiveDamage(saxon.strength)

    }

}

