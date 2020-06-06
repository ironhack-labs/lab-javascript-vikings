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
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage

        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War class (bonus)
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
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        
        if (randomSaxon.health < 1) { // at 0 health removes element
            this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1) // this method removes n items starting at the given index and modifies original array
        }
        
        return randomSaxon.receiveDamage(randomViking.strength)
    }
    saxonAttack() {
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        
        if (randomViking.health < 1) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1); 
        }
        
        return randomViking.receiveDamage(randomSaxon.strength)
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return console.log("Vikings have won the war of the century!")
        } else if (this.vikingArmy.length === 0) {
            return console.log("Saxons have fought for their lives and survived another day...");
        } else {
            return console.log("Vikings and Saxons are still in the thick of battle.");
        }
    }

    // Superbonus
    attack(winnerArmy, loserArmy) {
        const randomWinner = this.winnerArmy[Math.floor(Math.random() * this.winnerArmy.length)]
        const randomLoser = this.loserArmy[Math.floor(Math.random() * this.loserArmy.length)]
        if (randomLoser.health < 1) {
            this.loserArmy.splice(this.loserArmy.indexOf(randomLoser), 1)
        }
        return randomLoser.receiveDamage(randomWinner.strength)
    }
}
