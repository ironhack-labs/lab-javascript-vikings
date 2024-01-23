// Soldier
class Soldier {
    constructor(healthValue, strengthValue) {

        this.health = healthValue;
        this.strength = strengthValue;

    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health = this.health - damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(nameValue, healthValue, strengthValue) {
        super(healthValue, strengthValue)

        this.name = nameValue
    }

    receiveDamage(damage) {

        this.health = this.health - damage

        if (damage > this.health) {
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

        this.health = this.health - damage

        if (damage < this.health) {
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
        const viking = this.vikingArmy[0]
        const saxon = this.saxonArmy[0]
        const attack = viking.strength
        const damage = saxon.receiveDamage(attack)

        if (saxon.health <= 0) {
            this.saxonArmy.shift()
        }
    }

    saxonAttack() {
        const viking = this.vikingArmy[0]
        const saxon = this.saxonArmy[0]
        const attack = saxon.strength
        const damage = viking.receiveDamage(attack)

        if (viking.health <= 0) {
            this.vikingArmy.shift()
        }
    }

    showStatus() {
        if (this.saxonArmy.length <= 0) {
            return "Vikings have won the war of the century"
        } else if (this.vikingArmy.length = 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }

}
