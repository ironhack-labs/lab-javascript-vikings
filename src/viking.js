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

    constructor(nameValue, health, strength) {
        super(health, strength)
        this.name = nameValue
    }

    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        }
        else {
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
        }
        else {
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


    vikingAttack() {

        let ranViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

        let ranSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]

        let result = ranSaxon.receiveDamage(ranViking.strength)

        if (ranSaxon.health <= 0) {

            this.saxonArmy.splice(this.saxonArmy.indexOf(ranSaxon), 1)

        }

        return result

    }
    saxonAttack() {

        let ranViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

        let ranSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]

        let result = ranViking.receiveDamage(ranSaxon.strength)

        if (ranViking.health <= 0) {

            this.vikingArmy.splice(this.saxonArmy.indexOf(this.vikingArmy), 1)

        }

        return result
    }
    showStatus() {

        if (this.saxonArmy.length === 0) {

            return "Vikings have won the war of the century!"
        }
        else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        }

        else {


            return "Vikings and Saxons are still in the thick of battle."
        }

    }
}
