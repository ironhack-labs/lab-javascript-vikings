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

    //attack()

    receiveDamage(damage) {
        this.health -= damage
        if (this.health === 0) {
            return `${this.name} has died in act of combat`
        } else {
            return `${this.name} has received ${damage} points of damage`
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }


}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        console.dir(this)
        this.health -= damage

        if (this.health === 0) {
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


    addViking(Viking) {

        this.vikingArmy.push(Viking)
    }




    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }
    vikingAttack() {

    }
    //saxonAttack()
    //showStatus()
}
