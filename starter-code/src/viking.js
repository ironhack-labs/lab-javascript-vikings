// Soldier
class Soldier {
    constructor(health, strength) {
        this.name = ''
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
        this.name = name
    }

    battleCry() {
        return 'Odin Owns You All!'
    }

    receiveDamage(damage) {
        this.health -= damage
        return ((this.health > 0) && `${this.name} has received ${damage} points of damage`) || `${this.name} has died in act of combat`
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
        this.name = 'A Saxon'
    }

    receiveDamage(damage) {
        this.health -= damage
        return ((this.health > 0) && `${this.name} has received ${damage} points of damage`) || `${this.name} has died in combat`
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
        let randIndex = Math.floor(Math.random() * this.saxonArmy.length)
        let saxon = this.saxonArmy[randIndex]
        let result = saxon.receiveDamage(this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)].strength)
        saxon.health <= 0 && this.saxonArmy.splice(randIndex)
        return result
    }

    saxonAttack() {
        let randIndex = Math.floor(Math.random() * this.vikingArmy.length)
        let viking = this.vikingArmy[randIndex]
        let result = viking.receiveDamage(this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].strength)
        viking.health <= 0 && this.vikingArmy.splice(randIndex)
        return result
    }

    showStatus() {
        let messages = {
            '01': "Vikings have won the war of the century!",
            '10': "Saxons have fought for their lives and survive another day...",
            '11': "Vikings and Saxons are still in the thick of battle."
        }
        return messages[`${Number(this.saxonArmy.length > 0)}${Number(this.vikingArmy.length > 0)}`]
    }
}
