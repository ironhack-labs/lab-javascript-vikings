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
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) return `${this.name} has received ${damage} points of damage`
        else return `${this.name} has died in act of combat`
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) return `A Saxon has received ${damage} points of damage`
        else return `A Saxon has died in combat`
    }
}

// War
class War {

    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    selectRandomWarrior(warriorArray) {
        const randomWarrior = Math.floor(Math.random() * warriorArray.length)
        return warriorArray[randomWarrior]
    }

    removeDeadWarriors(warriorArray) {
        for (let i = 0; i < warriorArray.length; i++) {
            if (warriorArray[i].health <= 0) {
                warriorArray.splice(i, 1)
                i--
            }
        }
    }

    addViking(viking) {
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }

    vikingAttack() {
        const randomSaxon = this.selectRandomWarrior(this.saxonArmy)
        const randomViking = this.selectRandomWarrior(this.vikingArmy)
        const combatResult = randomSaxon.receiveDamage(randomViking.strength)
        this.removeDeadWarriors(this.saxonArmy)
        return combatResult
    }

    saxonAttack() {
        const randomSaxon = this.selectRandomWarrior(this.saxonArmy)
        const randomViking = this.selectRandomWarrior(this.vikingArmy)
        const combatResult = randomViking.receiveDamage(randomSaxon.strength)
        this.removeDeadWarriors(this.vikingArmy)
        return combatResult
    }

    showStatus() {
        if (this.saxonArmy.length === 0 && this.vikingArmy.length > 0) {
            return "Vikings have won the war of the century!"
        } else if (this.saxonArmy.length > 0 && this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }

}
