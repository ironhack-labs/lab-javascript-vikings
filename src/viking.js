// Soldier
class Soldier {
    constructor(healthValue, strengthValue) {
        this.health = healthValue
        this.strength = strengthValue
    }
    attack() {
        return this.strength
    }
    receiveDamage(damageValue) {
        this.health -= damageValue
    }
}

// Viking
class Viking extends Soldier {
    constructor(nameValue, healthValue, strengthValue) {
        super(healthValue, strengthValue)
        this.name = nameValue
    }
    receiveDamage(damageValue) {
        this.health = this.health - damageValue

        if (this.health <= 0) {
            // console.log(this.name, ` has died in act of combat`)
            return (this.name + ' has died in act of combat')
            // return `${this.name} has died in act of combat`

        } else {
            return `${this.name} has received ${damageValue} points of damage`
        }
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damageValue) {
        this.health = this.health - damageValue

        if (this.health <= 0) {
            // console.log(this.name, ` has died in act of combat`)
            return ('A Saxon has died in combat')
            // return `${this.name} has died in act of combat`

        } else {
            return `A Saxon has received ${damageValue} points of damage`
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
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        let vikingo = this.vikingArmy[randomViking]
    }
}
