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
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
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
        this.health -= damage
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
        let iSaxon = Math.ceil(Math.random() * (this.saxonArmy.length - 1))
        let iViking = Math.ceil(Math.random() * (this.vikingArmy.length - 1))
        let message = this.saxonArmy[iSaxon].receiveDamage(this.vikingArmy[iViking].strength)
        if (message === `A Saxon has died in combat`) {
            this.saxonArmy.splice(iSaxon, 1)
        }
        return message
    }

    saxonAttack() {
        let iSaxon = Math.ceil(Math.random() * (this.saxonArmy.length - 1))
        let iViking = Math.ceil(Math.random() * (this.vikingArmy.length - 1))
        let message = this.vikingArmy[iViking].receiveDamage(this.saxonArmy[iSaxon].strength)
        if (message.includes(`has died in act of combat`)) {
            this.vikingArmy.splice(iViking, 1)
        }
        return message
    }

    showStatus() {
        if (!this.saxonArmy.length) {
            return "Vikings have won the war of the century!"
        } else if (!this.vikingArmy.length) {
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}