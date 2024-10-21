// Soldier
class Soldier {
    constructor(healthValue, strengthValue) {
        this.health = healthValue
        this.strength = strengthValue
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
    constructor(nameValue, healthValue, strengthValue) {
        super(healthValue, strengthValue)
        this.name = nameValue
    }
    receiveDamage(damage) {
        this.health -= damage

        if (!this.health) {
            return `${this.name} has died in act of combat`
        } else {
            return `${this.name} has received ${damage} points of damage`
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

        if (!this.health) {
            return `A Saxon has died in combat`
        } else {
            return `A Saxon has received ${damage} points of damage`
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
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

        let randomSaxonDamage = randomSaxon.receiveDamage(randomViking.strength)

        if (randomSaxonDamage) {
            this.saxonArmy.pop()
        }


    }
    saxonAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

        let randomVikingDamage = randomViking.receiveDamage(randomSaxon.strength)

        if (randomVikingDamage) {
            this.vikingArmy.pop()
        }

    }
    showStatus() {

        if (!this.saxonArmy.length) {
            return `Vikings have won the war of the century!`
        }
        if (!this.vikingArmy.length) {
            return `Saxons have fought for their lives and survived another day...`
        }
        if (this.saxonArmy.length && this.vikingArmy.length) {
            return `Vikings and Saxons are still in the thick of battle.`
        }

    }
}
