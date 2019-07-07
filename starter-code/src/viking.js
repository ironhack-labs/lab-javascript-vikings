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
        } else return `${this.name} has died in act of combat`
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
        this.health -= damage
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else return `A Saxon has died in combat`
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
        let rndSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        let rndViking = Math.floor(Math.random() * this.vikingArmy.length)

        let result = this.saxonArmy[rndSaxon].receiveDamage(this.vikingArmy[rndViking].attack())

        if (this.saxonArmy[rndSaxon].health < 1) {
            this.saxonArmy.splice(rndSaxon, 1)
        }
        return result

    }
    saxonAttack() {
        let rndSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        let rndViking = Math.floor(Math.random() * this.vikingArmy.length)

        let result = this.vikingArmy[rndViking].receiveDamage(this.saxonArmy[rndSaxon].attack())

        if (this.vikingArmy[rndViking].health < 1) {
            this.vikingArmy.splice(rndViking, 1)
        }
        return result
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        }
        else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survive another day..."
        }
        else if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
