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
    constructor(health, strength) {
        super(health, strength)
    }
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
    addViking(Viking) {
        this.vikingArmy.push(Viking)

    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)

    }
    vikingAttack() {
        let newViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let newSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]

        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)

        this.saxonArmy.splice(randomSaxon, 1)

        newSaxon.receiveDamage(newViking.strength)


    }
    saxonAttack() {
        let newViking2 = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let newSaxon2 = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]

        let randomViking = Math.floor(Math.random() * this.vikingArmy.length)

        this.vikingArmy.splice(randomViking, 1)

        newViking2.receiveDamage(newSaxon2.strength)

    }
    showStatus() {

    }
}

