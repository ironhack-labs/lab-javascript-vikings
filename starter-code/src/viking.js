// Soldier
class Soldier {

    constructor (health, strength) {
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

    constructor (name, health, strength) {
        super (health, strength)
        this.name = name
        this.health = health
        this.strength = strength
    }

    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry(){
        return 'Odin Owns You All!'
    }
}


// Saxon
class Saxon extends Soldier {
    constructor (health, strength) {
        super (health, strength)
        this.health = health
        this.strength = strength
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

    addViking(vikingSoldier) {
        this.vikingArmy.push(vikingSoldier)
    }

    addSaxon(saxonSoldier) {
        this.saxonArmy.push(saxonSoldier)
    }

    vikingAttack() {

        let randomViking = Math.floor(Math.random() * this.vikingArmy.length)
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)

        let saxonReceivesDamage = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength)
        
        if (this.saxonArmy[randomSaxon].health <= 0) {
            this.saxonArmy.splice(this.saxonArmy[randomSaxon], 1)
            return saxonReceivesDamage
        }

    }

    saxonAttack() {

        let randomViking = Math.floor(Math.random() * this.vikingArmy.length)
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)

        let vikingReceivesDamage = this.vikingArmy[randomSaxon].receiveDamage(this.saxonArmy[randomSaxon].strength)
        
        if (this.vikingArmy[randomViking].health <= 0) {
            this.vikingArmy.splice(this.vikingArmy[randomViking], 1)
            return vikingReceivesDamage
        }

    }

    showStatus() {

        if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survive another day...'
        }

        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!'
        }

        if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
            return 'Vikings and Saxons are still in the thick of battle.'
        }

    }
}


