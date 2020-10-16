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
        let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

        saxon = saxon.receiveDamage(viking.strength)

        this.saxonArmy = this.saxonArmy.filter(item => item.health > 0)

        return saxon

    }

    saxonAttack() {
        let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

        viking = viking.receiveDamage(saxon.strength)

        this.vikingArmy = this.vikingArmy.filter(item => item.health > 0)

        return viking
    }

    showStatus() {
        return
    }
}

let viking1 = new Viking("Piet", 20, 30)
let viking2 = new Viking("Piet", 20, 30)
let saxon = new Saxon(40, 50)
let war = new War

war.addViking(viking1)
war.addSaxon(saxon)
war.vikingAttack()