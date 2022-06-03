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
        const newHealth = this.health -= damage
        if (newHealth > 0) {
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
        const newHealth = this.health -= damage
        if (newHealth > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return "A Saxon has died in combat"
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

        let saxon = this.saxonArmy[randomSaxon]
        let viking = this.vikingArmy[randomViking]

        let attack = saxon.receiveDamage(viking.strength)

        if (saxon.health <= 0) {
            this.saxonArmy.splice(this.randomSaxon, 1)
        }
        return attack
    }

    saxonAttack() {
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length)
        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)

        let saxon = this.saxonArmy[randomSaxon]
        let viking = this.vikingArmy[randomViking]

        let attack = viking.receiveDamage(saxon.strength)

        if (viking.health <= 0) {
            this.vikingArmy.splice(this.randomViking, 1)
        }
        return attack
    }

    showStatus() {
        if (saxonArmy.length === 0) {
            return "Vikings have won the war of the!"
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle"
        }
    }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = { Soldier, Viking, Saxon, War };
}