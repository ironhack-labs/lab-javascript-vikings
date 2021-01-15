// Soldier
class Soldier {

    constructor(healthValue, strengthValue) {
        this.health = healthValue
        this.strength = strengthValue
    }

    attack() {
        return this.strength
    }

    receiveDamage (damage) {
        this.health -= damage
    }

}

// Viking
class Viking extends Soldier {

    constructor(nameValue, healthValue, strengthValue) {
        super(healthValue, strengthValue)
        this.name = nameValue  
    }

    receiveDamage (damage) {

        this.health -= damage

        if (this.health > 0) {
            return  `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return `Odin Owns You All!`
    }

}

// Saxon
class Saxon extends Soldier {

    constructor(healthValue, strengthValue) {
        super(healthValue, strengthValue)
    }


    receiveDamage (damage) {

        this.health -= damage

        if (this.health > 0) {
            return  `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }

}

// War
class War {

    vikingArmy = []
    saxonArmy = []

    addViking(object) {

        this.vikingArmy.push(object)

    }

    addSaxon(object) {

        this.saxonArmy.push(object)
        
    }

    vikingAttack() {
        
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]

        
        for (let i = 0; i < this.saxonArmy.length; i++) {
            if (this.saxonArmy[i].health <= 0) {
                this.saxonArmy.splice(i, 1)
            }
        }

        return randomSaxon.receiveDamage(randomViking.strength)

        
    }
}
