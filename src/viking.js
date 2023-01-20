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
        super.receiveDamage(damage);
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
    constructor(healthValue, strengthValue) {
        super(healthValue, strengthValue)

    }

    receiveDamage(damage) {
        super.receiveDamage(damage);
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

    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }
    vikingAttack() {

        const randomViking = Math.floor(Math.random() * (this.vikingArmy.length))
        const randomSaxon = Math.floor(Math.random() * (this.saxonArmy.length))

        const vikingSoldier = this.vikingArmy[randomViking]
        const saxonSoldier = this.saxonArmy[randomSaxon]

        const attack = saxonSoldier.receiveDamage(vikingSoldier.strength)

        if (saxonSoldier.health <= 0) {
            this.saxonArmy.splice(randomSaxon, 1)
        }
        return attack
    }

    saxonAttack() {
        const randomViking = Math.floor(Math.random() * (this.vikingArmy.length))
        const randomSaxon = Math.floor(Math.random() * (this.saxonArmy.length))

        const vikingSoldier = this.vikingArmy[randomViking]
        const saxonSoldier = this.saxonArmy[randomSaxon]

        const attack = vikingSoldier.receiveDamage(saxonSoldier.strength)

        if (vikingSoldier.health <= 0) {
            this.vikingArmy.splice(randomViking, 1)
        }

        return attack

    }
    showStatus() {

        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
