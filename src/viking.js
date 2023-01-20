// Soldier
class Soldier {

    constructor(healthValue, strengthValue) {
        this.health = healthValue
        this.strength = strengthValue


    }


    attack() {
        return this.strength
    }

    receiveDamage(damageTaken) {
        this.health -= damageTaken
    }
}

// Viking
class Viking extends Soldier {

    constructor(nameValue, healthValue, strengthValue) {
        super(healthValue, strengthValue)
        this.name = nameValue
    }



    receiveDamage(damageTaken) {

        this.health -= damageTaken
        if (this.health > 0) {

            return `${this.name} has received ${damageTaken} points of damage`
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

    constructor(healthValue, strengthValue) {
        super(healthValue, strengthValue)

    }


    receiveDamage(damageTaken) {

        this.health -= damageTaken

        if (this.health > 0) {
            return `A Saxon has received ${damageTaken} points of damage`
        }

        else {
            return `A Saxon has died in combat`
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}





// War
class War {

    vikingArmy = []
    saxonArmy = []


    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }


    vikingAttack() {


        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

        const message = randomSaxon.receiveDamage(randomViking.strength)

        for (let i = 0; i < this.saxonArmy.length; i++) {
            if (randomSaxon.health <= 0) {
                this.saxonArmy.splice(i, 1)
            }
        }
        return message
    }




    saxonAttack() {

        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

        const message = randomViking.receiveDamage(randomSaxon.strength)

        for (let i = 0; i < this.vikingArmy.length; i++) {
            if (randomViking.health <= 0) {
                this.vikingArmy.splice(i, 1)
            }
        }


        return message
    }


    showStatus() {

        if (this.saxonArmy.length === 0) {

            return "Vikings have won the war of the century!"
        }
        if (this.vikingArmy.length === 0) {

            return "Saxons have fought for their lives and survived another day..."

        }
        else {
            return "Vikings and Saxons are still in the thick of battle."

        }

    }

}
