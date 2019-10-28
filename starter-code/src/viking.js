// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
        // console.log(this._health)
        // console.log(this._strength)
    }
    attack() {

        return this.strength
    }
    receiveDamage(damage) {
        console.log(this.health)
        this.health -= damage
        console.log(this.health)
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
        if (this.health <= 0) {
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
    constructor(health, strength) {
        super(health, strength)
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health -= damage
        if (this.health <= 0) {
            return `A Saxon has died in combat`
        } else {
            return `A Saxon has received ${damage} points of damage`
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
        let randV = (Math.floor(Math.random() * Math.floor(this.vikingArmy.length)))
        let randS = (Math.floor(Math.random() * Math.floor(this.saxonArmy.length)))
        let randViking = this.vikingArmy[randV]
        let randSaxon = this.saxonArmy[randS]
        console.log(randSaxon)
        console.log(randViking)
        let VaS = randSaxon.receiveDamage(randViking.strength)

        if (VaS == `A Saxon has died in combat`) {
            this.saxonArmy.splice(randS, 1)
        }
        return VaS
    }
    saxonAttack() {
        let randV = (Math.floor(Math.random() * Math.floor(this.vikingArmy.length)))
        let randS = (Math.floor(Math.random() * Math.floor(this.saxonArmy.length)))
        let randViking = this.vikingArmy[randV]
        let randSaxon = this.saxonArmy[randS]
        let SaV = randViking.receiveDamage(randSaxon.strength)

        if (SaV == `${randViking.name} has died in act of combat`) {
            this.vikingArmy.splice(randV, 1)
        }
        return SaV
    }
    showStatus() {
        if (this.saxonArmy.length == 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length == 0) {
            return "Saxons have fought for their lives and survive another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}