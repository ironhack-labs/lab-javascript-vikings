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
        if (this.health <= 0) {
            const message = `${this.name} has died in act of combat`
            return message

        } else {
            const message = `${this.name} has received ${damage} points of damage`

            return message
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
        if (this.health <= 0) {
            const message = `A Saxon has died in combat`
            return message
        } else {
            const message = `A Saxon has received ${damage} points of damage`
            return message
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
        const randonViking = Math.floor(Math.random() * this.saxonArmy.length)
        const randonSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        this.saxonArmy[randonSaxon].receiveDamage(this.vikingArmy[randonViking].strength)
        const message = `A Saxon has died in combat`
        if (this.saxonArmy[randonSaxon].health <= 0) {
            this.saxonArmy.splice((randonSaxon), 1)
        }
        return message

    }
    saxonAttack() {
        const randonViking = Math.floor(Math.random() * this.saxonArmy.length)
        const randonSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        this.vikingArmy[randonViking].receiveDamage(this.saxonArmy[randonSaxon].strength)
        const message = `${this.vikingArmy[randonViking].name} has received ${this.saxonArmy[randonSaxon].strength} points of damage`
        if (this.vikingArmy[randonViking].health <= 0) {
            this.vikingArmy.splice((randonViking), 1)

        } return message

    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            const message = `Vikings have won the war of the century!`
            return message

        } else if (this.vikingArmy.length === 0) {
            const message = `Saxons have fought for their lives and survived another day...`
            return message
        } else {
            const message = `Vikings and Saxons are still in the thick of battle.`
            return message
        }
    }
}