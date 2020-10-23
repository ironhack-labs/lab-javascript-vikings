// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health 
        this.strength = strength
    }

    attack() {
        return this.strength
    }

    receiveDamage(theDamage) {
        this.health -= theDamage
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }

    receiveDamage(theDamage) {
        this.health -= theDamage
        if (this.health > 0) {
            return `${this.name} has received ${theDamage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength) { 
        super(health, strength)
    }

    receiveDamage(theDamage) {
        this.health -= theDamage
        
        if (this.health > 0) {
            return `A Saxon has received ${theDamage} points of damage`
        } else {
            return 'A Saxon has died in combat'
        }
    }
}

// War
class War {
    constructor() { 
        this.vikingArmy = new Array
        this.saxonArmy = new Array
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }

    vikingAttack() {        
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        
        const damage = randomSaxon.receiveDamage(randomViking.strength)

        if (randomSaxon.health <= 0) {
            this.saxonArmy.pop(randomSaxon)
        }

        return damage

        // if (this.health > 0) {
        //     return `A Saxon has received ${theDamage} points of damage`
        // } else {
        //     return 'A Saxon has died in combat'
        // }
    }

    saxonAttack() {
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]

        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

        const damage = randomViking.receiveDamage(randomSaxon.strength)

        if (randomViking.health <= 0) {
            this.vikingArmy.pop(randomViking)
        }

        return damage
    }

    warAttack(attacker) {
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]

        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

        if (attacker === 'Viking') {
            const damage = randomSaxon.receiveDamage(randomViking.strength)

            if (randomSaxon.health <= 0) {
                this.saxonArmy.pop(randomSaxon)
            }
            return damage

        } else if (attacker === 'Saxon') {
            const damage = randomViking.receiveDamage(randomSaxon.strength)

            if (randomViking.health <= 0) {
                this.vikingArmy.pop(randomViking)
            }

            return damage
            
        } else {
            console.log("Please introduce either 'Viking' or 'Saxon' as an attacker")
        }
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


