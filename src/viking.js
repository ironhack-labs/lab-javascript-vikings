//Soldier
class Soldier {
    constructor(healthValue, strengthValue) {
        this.health = healthValue
        this.strength = strengthValue
    }
    attack() {
        return this.strength
    }
    receiveDamage(damageValue) {
        this.health -= damageValue
    }
}
// Viking
class Viking extends Soldier {
    constructor(nameValue, healthValue, strengthValue) {
        super(healthValue, strengthValue)
        this.name = nameValue
    }
    receiveDamage(damageValue) {
        this.health -= damageValue
        if (this.health > 0) {
            return `${this.name} has received ${damageValue} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return `Odin Owns You All!`
    }
}
// Saxon
class Saxon extends Soldier {
    receiveDamage(damageValue) {
        this.health -= damageValue
        if (this.health > 0) {
            return `A Saxon has received ${damageValue} points of damage`
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
    
    addViking(vikingSoldier) {
        this.vikingArmy.push(vikingSoldier)
    }

    addSaxon(saxonSoldier) {
        this.saxonArmy.push(saxonSoldier)
    }

    vikingAttack() {
        let selectedViking = Math.floor(Math.random() * this.vikingArmy.length)
        
        let selectedSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        
        this.saxonArmy[selectedSaxon].receiveDamage(this.vikingArmy[selectedViking].strength)

       //if(this.saxonArmy[selectedSaxon].health === 0) {
        this.saxonArmy.splice(selectedSaxon,1)
        
        return  'A Saxon has died in combat'
        //}
    }

    saxonAttack() {

        const selectedViking = Math.floor(Math.random() * this.vikingArmy.length)

        const selectedSaxon = Math.floor(Math.random() * this.saxonArmy.length)

        const message = `${this.vikingArmy[selectedViking].name} has received ${this.saxonArmy[selectedSaxon].strength} points of damage`

        this.vikingArmy[selectedViking].receiveDamage(this.saxonArmy[selectedSaxon].strength)

        if(this.vikingArmy[selectedViking].health === 0) {
        this.vikingArmy.splice(selectedViking, 1)
        }
        
        return message
    }


    showStatus() {
        if(this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!'
        } else if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...'
        } else {
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }
}

 
