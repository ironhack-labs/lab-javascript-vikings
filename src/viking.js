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
        this.health = this.health - damage
    }
}

const Soldier1 = new Soldier('heatlh', 'strength')
Soldier1.receiveDamage('damage')

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }
    receiveDamage(damage) {
        this.health = this.health - damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        }
        else {
            return `${this.name} has died in act of combat`
        }


    }
    battleCry() {
        return `Odin Owns You All!`

    }
}

const Viking1 = new Viking('name', 'heatlh', 'strength')


// Saxon
class Saxon extends Soldier {

    receiveDamage(damage) {
        this.health = this.health - damage
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        }
        else {
            return `A Saxon has died in combat`
        }
    }
}

const Saxon1 = new Saxon('heatlh', 'strength')

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
        const randomSaxon = Math.floor(Math.random() * (this.vikingArmy.length))
        const SaxonSoldier = this.saxonArmy[randomSaxon]
        this.saxonArmy.push(Saxon)

    }

    vikingAttack() {
        const randomViking = Math.floor(Math.random() * (this.vikingArmy.length))
        const VikingSoulder = this.vikingArmy[randomViking]
        VikingSoulder.receiveDamage(SaxonSoldier.strength)

        // this.saxonArmy.pop(Saxon)
        // return Saxon1.receiveDamage(Viking1.strength)
    }
    saxonAttack() {

        this.vikingArmy.pop(Viking)

    }
    showStatus() { }
}


const MyWar = new War([], [])