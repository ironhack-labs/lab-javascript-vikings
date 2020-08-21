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
        this.name = name
    }

    attack() {
        return this.strength
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
    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health -= damage

        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {

            return 'A Saxon has died in combat'
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
        const randonViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        const randonSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]

        const damage = randonSaxon.receiveDamage(randonViking.strength)

        if (randonSaxon.health <= 0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(randonSaxon), 1)
        }

        return damage
    }

    saxonAttack() {
        const randonSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        const randonViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

        const damage = randonViking.receiveDamage(randonSaxon.strength)

        if (randonViking.health <= 0) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(randonViking), 1)
        }

        return damage

    }




    showStatus() {
        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!'

        } else if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...'
        } else {
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }

}
