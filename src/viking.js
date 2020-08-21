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

class War {

    constructor() {

        this.vikingArmy = []
      
        this.saxonArmy = []
    
    }

    addViking(Viking) {

        this.vikingArmy.push(Viking)

    }

    addSaxon(Saxon) {

        this.saxonArmy.push(Saxon)

    }

    vikingAttack() {
        
        
    }

}

