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
const soldier1 = new Soldier(5, 2)
// Viking
class Viking extends Soldier {
    constructor(nameValue, healthValue, strengthValue) {
        super(healthValue, strengthValue)
        this.name = nameValue
    }
    attack() {
        return this.strength
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

class Saxon extends Soldier {
    constructor(healthValue, strengthValue) {
        super(healthValue, strengthValue)
    }
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
//////////BOOOOOOOOOOONUUUUUUUUUUUUUS
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
        const randSax = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        const randVik = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        const fightResult = randSax.receiveDamage(randVik.strength)
        if (randSax.health <= 0) {
            this.saxonArmy.splice(randSax)
        }
        return fightResult
    }
    saxonAttack() {
        const randVik = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        const randSax = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        const fightResult2 = randVik.receiveDamage(randSax.strength)
        if (randVik.health <= 0) {
            this.vikingArmy.splice(randVik)
        }
        return fightResult2

    }
    showStatus() {
        if (this.saxonArmy == 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy == 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }

}