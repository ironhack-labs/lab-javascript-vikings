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
        return this.health <= 0 ? `${this.name} has died in act of combat` : `${this.name} has received ${damage} points of damage`
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }

    receiveDamage(damage) {
        this.health -= damage
        return this.health <= 0 ? `A Saxon has died in combat` : `A Saxon has received ${damage} points of damage`
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
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]

        const result = randomSaxon.receiveDamage(randomViking.strength)

        if (randomSaxon.health <= 0) this.saxonArmy.splice(randomSaxon, 1)

        return result

    }

    saxonAttack() {
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]

        const result = randomViking.receiveDamage(randomSaxon.strength)

        if (randomViking.health <= 0) this.vikingArmy.splice(randomViking, 1)

        return result
    }

    showStatus() {
        if (this.saxonArmy.length === 0 && this.vikingArmy.length > 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0 && this.saxonArmy.length > 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else if (this.saxonArmy.length !== 0 && this.vikingArmy.length !== 0) {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}