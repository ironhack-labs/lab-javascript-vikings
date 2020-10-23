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

const soldier = new Soldier(150, 300)
soldier.attack()



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

// SAXON

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

class War {

    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(vikingObj) {
        this.vikingArmy.push(vikingObj)
    }

    addSaxon(saxonObj) {
        this.saxonArmy.push(saxonObj)
    }
    vikingAttack() {

    }
    saxonAttack() {

    }
    showStatus() {

    }

}

const viking1 = new Viking("Marisa", 100, 250)
const viking2 = new Viking("M", 100, 250)
const saxon1 = new Saxon(100, 250)
const war1 = new War([], [])
war1.addViking(viking1)
war1.addSaxon(saxon1)


