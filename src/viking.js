
// Soldier
class Soldier {
    constructor (soldierHealth, soldierStrength) {
        this.health = soldierHealth
        this.strength = soldierStrength
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
    constructor (vikingName, soldierHealth, soldierStrength) {
        super(soldierHealth, soldierStrength)
        this.name = vikingName
    }

    receiveDamage(damage) {
        this.health -= damage
        if (this.heatlh > 0) {
            return `${this.name} has received ${damage} points of damage.`
        } else {
            return `${this.name} has died in act of combat.`
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
        if (this.heatlh > 0) {
            return `A Saxon has received ${damage} points of damage.`
        } else {
            return `A Saxon has died in combat.`
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
        let randomSaxon = this.saxonArmy[parseInt(Math.random() * this.saxonArmy.length)]
        let randomViking = this.vikingArmy[parseInt(Math.random() * this.vikingArmy.length)]
        randomSaxon.receiveDamage(randomViking)
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1)
        }
        return
    }

    saxonAttack() {
        let randomSaxon = this.saxonArmy[parseInt(Math.random() * this.saxonArmy.length)]
        let randomViking = this.vikingArmy[parseInt(Math.random() * this.vikingArmy.length)]
        randomViking.receiveDamage(randomSaxon)
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
