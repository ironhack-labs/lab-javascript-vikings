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
        }
        else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }
    receiveDamage(damage) {
        // console.log("antes", this.health, damage)
        this.health -= damage
        // console.log("despues", this.health)
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        }
        else {
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
    addViking(newViking) {
        this.vikingArmy.push(newViking)
    }
    addSaxon(newSaxon) {
        this.saxonArmy.push(newSaxon)
    }
    vikingAttack() {
        const damagedSaxon = generateRandomNumber(this.saxonArmy.length - 1)
        const aggressorViking = generateRandomNumber(this.vikingArmy.length - 1)

        const response = this.saxonArmy[damagedSaxon].receiveDamage(this.vikingArmy[aggressorViking].strength)
        if (this.saxonArmy[damagedSaxon].health <= 0) {
            this.saxonArmy.splice(damagedSaxon, 1)
        }
        return response
    }
    saxonAttack() {
        const damagedViking = generateRandomNumber(this.vikingArmy.length - 1)
        const aggressorSaxon = generateRandomNumber(this.saxonArmy.length - 1)

        const response = this.vikingArmy[damagedViking].receiveDamage(this.saxonArmy[aggressorSaxon].strength)
        if (this.vikingArmy[damagedViking].health <= 0) {
            this.vikingArmy.splice(damagedViking, 1)
        }
        return response
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        }
        else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        }
        else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}

function generateRandomNumber(max) {
    return Math.floor(Math.random() * max)
}
