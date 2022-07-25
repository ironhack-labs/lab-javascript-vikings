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

class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name
    }
    receiveDamage(damage) {
        this.health -= damage
       /* let dead = this.health < 0
        if (Viking !== dead) {
            console.log(`${Viking.name} has received ${damage} points of damage`)
        } else {
            console.log(`${Viking.name} has died in act of combat`)
        } */
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage
        let dead = this.health < 0
        if (this.health === dead) {
            console.log('A Saxon has died in combat')
        } else {
            console.log(`A Saxon has received ${damage} points of damage`)
        }

    /* attack() {
        return Saxon.strength
    } */
}
}

// War
class War {
    constructor (vikingArmy, saxonArmy)
    this.vikingArmy = []
    this.saxonArmy = []

    addViking(Viking) {
        return this.vikingArmy.push(Viking)
    }

    addSaxon(Saxon) {
        return this.saxonArmy.push(Saxon)
    }

    vikingAttack() {
        let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        let randomViking = this.vikingArmy(randomVikingIndex)

        let fight = randomSaxon.receiveDamage(randomViking.attack())
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonIndex, 1)
        }

        return fight
    }

    saxonAttack() {
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
        let randomSaxon = this.saxonArmy(randomSaxonIndex) 

        let fight = randomViking.receiveDamage(randomSaxon.attack())
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomVikingIndex, 1)
        }

        return fight
    }

    showStatus() {
        if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else if (this.saxonArmy.length === 0) {
            return  "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === this.saxonArmy.length) {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
