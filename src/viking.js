// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health,
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
        return `Odin Owns You All!`
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
        this.vikingArmy = [],
            this.saxonArmy = []
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }

    vikingAttack() {
        let saxon = randomIndex(this.saxonArmy)
        let viking = randomIndex(this.vikingArmy)

        saxon = saxon.receiveDamage(viking.strength)

        this.saxonArmy = cleanDeads(this.saxonArmy)

        return saxon

    }

    saxonAttack() {
        let saxon = randomIndex(this.saxonArmy)
        let viking = randomIndex(this.vikingArmy)

        viking = viking.receiveDamage(saxon.strength)

        this.vikingArmy = cleanDeads(this.vikingArmy)

        return viking
    }

    showStatus() {
        if (!this.saxonArmy.length) {
            return "Vikings have won the war of the century!"
        }
        if (!this.vikingArmy.length) {
            return 'Saxons have fought for their lives and survived another day...'
        }
        if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
            return 'Vikings and Saxons are still in the thick of battle.'

        }
    }
}

function randomIndex(array) {
    return array[Math.floor(Math.random() * array.length)]
}

function cleanDeads(array) {
    return array.filter(item => item.health > 0)

}

let viking1 = new Viking("Piet", 20, 30)
let viking2 = new Viking("Piet", 20, 30)
let saxon = new Saxon(40, 50)
let war = new War

war.addViking(viking1)
war.addSaxon(saxon)
war.vikingAttack()