// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack() {
        return this.strength
    }
    receiveDamage(damagePoint) {
        this.health -= damagePoint
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }
    receiveDamage(damage) {
        this.health -= damage;

        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
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
    constructor(health, strength) {
        super(health, strength)
    }
    receiveDamage(damage) {
        this.health -= damage;

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

        const randomViking = Math.floor(Math.random() * this.vikingArmy.length)
        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)

        const result = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].attack())

        if (this.saxonArmy[randomSaxon].health <= 0) {
            this.saxonArmy.splice(randomSaxon, 1)
        }

        return result
    }
    saxonAttack() {
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length)
        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)

        const result = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].attack())

        if (this.vikingArmy[randomViking].health <= 0) {
            this.vikingArmy.splice(randomViking, 1)
        }

        return result
    }
    showStatus() {
        let vikingWon = "Vikings have won the war of the century!"
        let saxonWon = "Saxons have fought for their lives and survived another day..."
        let nobodyWon = "Vikings and Saxons are still in the thick of battle."


        if (this.saxonArmy.length >= 1 && this.vikingArmy.length === 0) {
            return saxonWon
        } else if (this.vikingArmy.length >= 1 && this.saxonArmy.length === 0) {
            return vikingWon
        }
        return nobodyWon
    }
}