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
        this.health = this.health-damage
    }

}

// Viking
class Viking extends Soldier {
    constructor(name,health,strength) {
        super(health,strength)
        this.name = name
    }

    receiveDamage(damage) {
        super.receiveDamage(damage)
        let msgViking = ''
        if (this.health>0) {
            msgViking = `${this.name} has received ${damage} points of damage`
        } else {
            msgViking = `${this.name} has died in act of combat`
        }
        
        return msgViking
         
    }

    battleCry() {
        return 'Odin Owns You All!'
    }

}
    



// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        super.receiveDamage(damage)
        let msgSaxon = ''
        if (this.health>0) {
            msgSaxon = `A Saxon has received ${damage} points of damage`
        } else {
            msgSaxon = 'A Saxon has died in combat'
        }
        
        return msgSaxon
         
    }
}

// War
class War {
    // constructor(vikingArmy, saxonArmy) {
    //     this.vikingArmy = []
    //     this.saxonArmy = []
    // }

    // addViking(Viking) {
    //     this.vikingArmy.push(new Viking)
    // }
    
    // addSaxon(Saxon) {
    //     this.saxonArmy.push(new Saxon)
    // }

    // vikingAttack() {
    //     let randomSaxonIndex = Math.floor(Math.random()*this.saxonArmy.length)
    //     let randomSaxon = this.saxonArmy[randomSaxonIndex]
    //     let randomVikingIndex = Math.floor(Math.random()*this.vikingArmy.length)
    //     let randomViking = this.vikingArmy[randomVikingIndex]
    //     damage = randomViking.strength
    //     this.randomSaxon.receiveDamage(damage)
    //     if (this.randomSaxon.health <=0) {

    //     }
    // }

    // saxonAttack()
    // showStatus()
}
