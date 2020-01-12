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
        return 'Odin Owns You All!'
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

        const randomNumberSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        const randomSaxon = this.saxonArmy[randomNumberSaxon]

        const randomNumberViking = Math.floor(Math.random() * this.vikingArmy.length)
        const randomViking = this.vikingArmy[randomNumberViking]

        const damage = randomSaxon.receiveDamage(randomViking.attack())

        if (damage.includes('died')) {
            this.saxonArmy.splice(randomNumberSaxon, 1)
        }

        return damage

    }
    saxonAttack() {
        const randomNumberSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        const randomSaxon = this.saxonArmy[randomNumberSaxon]

        const randomNumberViking = Math.floor(Math.random() * this.vikingArmy.length)
        const randomViking = this.vikingArmy[randomNumberViking]

        const damage = randomViking.receiveDamage(randomSaxon.attack())

        if (damage.includes('died')) {
            this.vikingArmy.splice(randomNumberSaxon, 1)
        }

        return damage
    }
    showStatus() {
        if (this.saxonArmy.length === 0) return 'Vikings have won the war of the century!'
        if (this.vikingArmy.length === 0) return 'Saxons have fought for their lives and survived another day...'
        if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) return 'Vikings and Saxons are still in the thick of battle.'
    }
}
