// Soldier
class Soldier {
    constructor(healthVal, strengthVal) {
        this.health = healthVal
        this.strength = strengthVal
    }

    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(nameVal, healthVal, strengthVal) {
        super(healthVal, strengthVal)
        this.name = nameVal;
    }
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(healthVal, strengthVal) {
        super(healthVal, strengthVal)
    }
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else if (this.health <= 0) {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor() {
        // METE LOS ARRAYS
        this.vikingArmy = []
        this.saxonArmy = []

    }
    // vikingArmy = []

    // saxonArmy = []

    addViking(viking) {
        // vikingArmy += viking;
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
        // vikingArmy += viking;
        this.saxonArmy.push(saxon)
    }
    vikingAttack() {
        const rdmSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        const rdmViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        const msg = rdmSaxon.receiveDamage(rdmViking.strength)

        if (rdmSaxon.health <= 0) {
            const indexSaxon = this.saxonArmy.indexOf(rdmSaxon)
            this.saxonArmy.splice(indexSaxon)
        }

        return msg

    }
    saxonAttack() {
        const rdmSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        const rdmViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        const msg = rdmViking.receiveDamage(rdmSaxon.strength)
        if (rdmViking.health <= 0) {
            const indexViking = this.vikingArmy.indexOf(rdmViking)
            this.vikingArmy.splice(indexViking)

        }
        return msg
    }

    showStatus() {
        if (this.saxonArmy.length === 0) return `Vikings have won the war of the century!`
        if (this.vikingArmy.length === 0) return `Saxons have fought for their lives and survived another day...`
        if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) return 'Vikings and Saxons are still in the thick of battle.'
    }

}
