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
class Viking extends Soldier {
    constructor(name, health, strenght){
        super(health, strenght)

        this.name = name
    }

    receiveDamage(damage) {
        this.health -= damage

        if (this.health != 0) {
         return (`${this.name} has received ${damage} points of damage`)
        } else {
            return (`${this.name} has died in act of combat`)
            }
    }

    battleCry(){
        return (`Odin Owns You All!`)
    }

}

// Saxon
class Saxon extends Soldier { 

receiveDamage(damage) {
    this.health -= damage

    if (this.health != 0) {
        return (`A Saxon has received ${damage} points of damage`)
        
    } else {
        return (`A Saxon has died in combat`)
    }
}   
}


// War
class War {
     constructor(vikingArmy, saxonArmy) {
         this.vikingArmy = vikingArmy
         this.saxonArmy = saxonArmy
     }

    addViking(viking) {
     viking = {}
     this.vikingArmy += viking
     }


    addSaxon(saxon) {
     saxon = {}
     this.saxonArmy += saxon
     }
    
    vikingAttack() {
        parseInt(Math.random() * 10000).saxon.receiveDamage(this.strenght.viking)
        if (saxon.health != 0) {
            return (`A Saxon has received ${damage} points of damage`)

        }

    }

    // saxonAttack()
    // showStatus()
}

let arrayViking = []; //Esto debería pasarse al constructor de War al instanciar una guerra
let arraySaxon = [];

