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

        super.receiveDamage(damage)

        if (this.health > 0) {

            return `${this.name} has received ${damage} points of damage`

        } else {

            return `${this.name} has died in act of combat`
        }

    }

    battleCry() {

        return 'Odin Owns You All!'

    }

}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage) {

        super.receiveDamage(damage)

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

    addViking(newViking) {

        this.vikingArmy.push(newViking)

    }

    addSaxon(newSaxon) {

        this.saxonArmy.push(newSaxon)

    }

    vikingAttack() {

        let attackedSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let attackerViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

        let returnedVal = attackedSaxon.receiveDamage(attackerViking.strength)

        if (attackedSaxon.health <= 0) {

            this.saxonArmy.splice(this.saxonArmy.indexOf(attackedSaxon), 1)

        }

        return returnedVal

    }

    saxonAttack() {

        let attackedViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let attackerSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]

        let returnedVal = attackedViking.receiveDamage(attackerSaxon.strength)

        if (attackedViking.health <= 0) {

            this.vikingArmy.splice(this.vikingArmy.indexOf(attackedViking), 1)

        }

        return returnedVal

    }

    showStatus() {

        if (this.saxonArmy.length === 0) {

            return 'Vikings have won the war of the century!'

        } else if (this.vikingArmy.length === 0) {

            return 'Saxons have fought for their lives and survived another day...'

        } else {

            return 'Vikings and Saxons are still in the thick of battle.'

        }

    }

}