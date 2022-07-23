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
        let dead = this.health < 0
        if (Viking !== dead) {
            console.log(`${Viking.name} has received ${damage} points of damage`)
        } else {
            console.log(`${Viking.name} has died in act of combat`)
        }
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

class Saxon extends Soldier {
    receiveDamage(damage) {
        Saxon.health -= damage
        let dead = this.health < 0
        if (Saxon === dead) {
            console.log('A Saxon has died in combat')
        } else {
            console.log(`A Saxon has received ${damage} points of damage`)
        }

    attack() {
        return Saxon.strength
    }
}
}

// War
class War {
    constructor (vikingArmy, saxonArmy)
    this.vikingArmy = []
    this.saxonArmy = []

    function addViking(this.Viking) {
        return this.Viking + 1
    }

    function addSaxon(this.Saxon) {
        return this.Saxon + 1
    }

    function vikingAttack() {
        let attacker = 1 + Math.floor(1 * Math.random())
        this.attacker = (this.Saxon.receiveDamage)
        if (Saxon.strength < 0) {
            return vikingArmy -= 1
        }
        return Saxon.receiveDamage() === Viking.strength
    }

    function saxonAttack() {
        let attacker = 1 + Math.floor(1 * Math.random())
        this.attacker = (this.Viking.receiveDamage)
        if (Viking.strength < 0) {
            return saxonArmy -= 1
        }
        return Viking.receiveDamage() === Saxon.strength
    }

    function showStatus() {
        if (Saxon === 0) {
            console.log("Vikings have won the war of the century!")
        } else if (Viking === 0) {
            console.log("Saxons have fought for their lives and survived another day...")
        } else if (Viking >= 1 && Saxon >= 1) {
            console.log("Vikings and Saxons are still in the thick of battle.")
        }
    }
}
