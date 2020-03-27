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

    attackViking() {
        this.attack()
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
        return `Odin Owns You All!`
    }

}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)

    }

    receiveDamage(damage) {
        this.health -= damage

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


    addViking(vikingObject) {
        this.vikingArmy.push(vikingObject)
    }

    addSaxon(saxonObject) {
        this.saxonArmy.push(saxonObject)
    }

    vikingAttack() {

        let randomVikingIndex = Math.floor(Math.random() * (this.vikingArmy.length))
        let randomViking = this.vikingArmy[randomVikingIndex]

        let randomSaxonIndex = Math.floor(Math.random() * (this.saxonArmy.length))
        let randomSaxon = this.saxonArmy[randomSaxonIndex]


        let saxonDamage = randomSaxon.receiveDamage(randomViking.strength)

        this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0)

        return saxonDamage

        // if (randomSaxon.health <= 0) {
        //     return randomSaxon.receiveDamage(randomViking.strength)
        // } else {
        //     return randomSaxon.receiveDamage(randomViking.strength)
        // }

    }


    saxonAttack() {

        let randomVikingIndex = Math.floor(Math.random() * (this.vikingArmy.length))
        let randomViking = this.vikingArmy[randomVikingIndex]

        let randomSaxonIndex = Math.floor(Math.random() * (this.saxonArmy.length))
        let randomSaxon = this.saxonArmy[randomSaxonIndex]


        let vikingDamage = randomViking.receiveDamage(randomSaxon.strength)

        this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0)

        return vikingDamage

    }


    showStatus() {


    }
}

