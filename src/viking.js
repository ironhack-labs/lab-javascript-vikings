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

    attack(arg) {
        let army = this.vikingArmy
        let otherArmy = this.saxonArmy
        if (!arg) {
            army = this.saxonArmy
            otherArmy = this.vikingArmy
        }
        let iArmy = Math.ceil(Math.random() * (army.length - 1))
        let iOtherArmy = Math.ceil(Math.random() * (otherArmy.length - 1))
        let message = army[iArmy].receiveDamage(otherArmy[iOtherArmy].strength)
        if (army[iArmy].health < 1) army.splice(iArmy, 1)
        return message
    }

    vikingAttack() {
        return this.attack(false)
    }

    saxonAttack() {
        return this.attack(true)
    }

    showStatus() {
        if (!this.saxonArmy.length) {
            return "Vikings have won the war of the century!"
        } else if (!this.vikingArmy.length) {
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}