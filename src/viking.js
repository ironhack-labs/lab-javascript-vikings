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
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
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
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
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

    addViking(viking) {
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    vikingAttack() {
        let max = this.vikingArmy.length
        let min = 0
        let randomNum = Math.floor(Math.random() * (max - min) + min)
        let randomViking = this.vikingArmy[randomNum]
        randomNum = Math.floor(Math.random() * (max - min) + min)
        let randomSaxon = this.saxonArmy[randomNum]
        let result = randomSaxon.receiveDamage(randomViking.strength)
        let aliveSaxons = []
        aliveSaxons = this.saxonArmy.filter(saxon => saxon.health > 0)
        this.saxonArmy = aliveSaxons
        return result
    }
    saxonAttack() {
        let max = this.saxonArmy.length
        let min = 0
        let randomNum = Math.floor(Math.random() * (max - min) + min)
        let randomViking = this.vikingArmy[randomNum]
        randomNum = Math.floor(Math.random() * (max - min) + min)
        let randomSaxon = this.saxonArmy[randomNum]
        let result = randomViking.receiveDamage(randomSaxon.strength)
        let aliveVikings = []
        aliveVikings = this.vikingArmy.filter(viking => viking.health > 0)
        this.vikingArmy = aliveVikings
        return result
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`
        }
        if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`
        } else {
            return `Vikings and Saxons are still in the thick of battle.`
        }

    }
}






