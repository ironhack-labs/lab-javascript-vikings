// Soldier
let soldier;
const strength = 150;
const health = 300;

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
let viking;
const name = 'Harald';

class Viking extends Soldier {
    constructor(name, health, strength) {
    super(health, strength)
    this.name = name
    }

    receiveDamage(damage) {
        this.health = this.health - damage
        if (this.health > 0) {
        let text = `${this.name} has received ${damage} points of damage`
        return text
        } else {
        let text = `${this.name} has died in act of combat`
        return text
        }
    } 

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health = this.health - damage
        if (this.health > 0) {
            let text = `A Saxon has received ${damage} points of damage`
            return text
        } else {
            let text = `A Saxon has died in combat`
            return text
        }
    }
    }

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = [] 
    }

    addViking(newViking) {
        this.vikingArmy.push(newViking)
    }

    addSaxon(newSaxon) {
        this.saxonArmy.push(newSaxon)
    }

    vikingAttack() {
        let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
        let randomViking = this.vikingArmy[vikingIndex]
        let randomSaxon = this.saxonArmy[saxonIndex]
        const result = randomSaxon.receiveDamage(randomViking.strength)
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(saxonIndex,1)
        }
        return result
    }
    
    saxonAttack() {
        let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
        let randomViking = this.vikingArmy[vikingIndex]
        let randomSaxon = this.saxonArmy[saxonIndex]
        const result = randomViking.receiveDamage(randomSaxon.strength)
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(vikingIndex,1)
        }
        return result
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}