// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack() {

        return this.strength

    } receiveDamage(damage) {

        this.health -= damage
    }


}



// Viking
class Viking extends Soldier {
    constructor(name, health, strength,) {
        super(health, strength)
        this.name = name

    } receiveDamage(damage) {
        this.health -= damage
        if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        } else {

            return `${this.name} has received ${damage} points of damage`
        }




    } battleCry() {
        return "Odin Owns You All!"
    }

}




// Saxon
class Saxon extends Soldier {
    constructor(health, strength,) {
        super(health, strength)

    } receiveDamage(damage) {
        this.health -= damage
        if (this.health <= 0) {
            return `A Saxon has died in combat`
        } else {

            return `A Saxon has received ${damage} points of damage`
        }
    }
}

// War
class War {

    vikingArmy = []
    saxonArmy = []

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }

    vikingAttack() {

        let message = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength)
        if (this.saxonArmy[0].health <= 0) {
            this.saxonArmy.splice(0, 1)
        } return message
    }


    saxonAttack() {
        let message = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength)
        if (this.vikingArmy[0].health <= 0) {
            this.vikingArmy.splice(0, 1)

        } return message
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!'
        }
        if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...'
        }
        // } if (s) {
        if (this.vikingArmy.length !== 0 && this.saxonArmy.length !== 0) {
            return 'Vikings and Saxons are still in the thick of battle.'

        }



    }
}





