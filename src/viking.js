// Soldier
class Soldier {
    constructor(soldierHealth, soldierStrength) 
    {
        this.health = soldierHealth
        this.strength = soldierStrength
    }
    attack() {
        return this.strength
    }
    receiveDamage(soldierDamage)
    {
        this.health -= soldierDamage

    }
}
    let soldier = new Soldier (150, 300)
 

// Viking
class Viking extends Soldier {

    constructor (vikingName, soldierHealth, soldierStrength) {
        
        super(soldierHealth, soldierStrength)
        
        this.name = vikingName
    }

    attack() {
        return this.strength

    }  

    receiveDamage(soldierDamage) {
        
        this.health -= soldierDamage

        if (this.health > 0) {
            
             return `${viking.name} has received ${soldierDamage} points of damage`
        }
        else {
            return `${viking.name} has died in act of combat`
        }
    }

    battleCry() {
        return `Odin Owns You All!`
    }
    
}

let viking = new Viking("Harald", 150, 300)


// Saxon
class Saxon extends Soldier { 

    constructor(soldierHealth, soldierStrength) {

        super (soldierHealth, soldierStrength)
    }

    class(soldierHealth, soldierStrength) { }
    
    attack() {
        return this.strength
    }

    receiveDamage(soldierDamage) {
        this.health -= soldierDamage

        if (this.health > 0) {
            
             return `A Saxon has received ${soldierDamage} points of damage`
        }
        else {
            return `A Saxon has died in combat`
        }
    }
}

let saxon = new Saxon(60, 25)


// War
