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
        this.damage = damage
        this.health -= this.damage
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
        this.health <= this.damage ? `${this.name} has received ${this.damage} points of damage` : `${this.name} has died in act of combat`
    }
    battleCry() {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        super.receiveDamage(damage)
        if (this.damage >= this.health) {
            return `A Saxon has died in combat`
        } else {
            return `A Saxon has received ${this.damage} points of damage`
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
        const attackResult = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength)

        return attackResult <= 0 ? this.saxonArmy.slice(0, 1) : attackResult
    }
}
const warss = new War()