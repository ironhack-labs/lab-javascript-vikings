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
        this.health -= damageValue
        if (this.health > 0) {
            return `${this.name} has received ${damageValue} points of damage`
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
    receiveDamage(damageValue) {
        this.health -= damageValue
        if (this.health > 0) {
            return `A Saxon has received ${damageValue} points of damage`
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

        const randomS = Math.floor(Math.random() * (this.saxonArmy.length))
        const randomV = Math.floor(Math.random() * (this.vikingArmy.length))
        const message = this.saxonArmy[randomS].receiveDamage(this.vikingArmy[randomV].strength)
        this.saxonArmy.splice(randomS, 1)
        return message
    }

    saxonAttack() {
        const randomS = Math.floor(Math.random() * (this.saxonArmy.length))
        const randomV = Math.floor(Math.random() * (this.vikingArmy.length))
        const message = this.vikingArmy[randomV].receiveDamage(this.saxonArmy[randomS].strength)
        if (this.vikingArmy[randomV].health === 0) {
            this.vikingArmy.splice(randomV, 1)
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
        return "Vikings and Saxons are still in the thick of battle."
    }


}