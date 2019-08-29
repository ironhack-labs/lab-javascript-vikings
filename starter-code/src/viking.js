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

    receiveDamage(damage) {
        this.health -= damage
        if (this.health < 1) {
            return `${this.name} has died in act of combat`
        } else {
            return `${this.name} has received ${damage} points of damage`
        }
    }

    battleCry() {
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
    constructor (health, strength) {
        super(health, strength)
    }

    receiveDamage(damage) {
        this.health -= damage
        console.log (this.health)
        if (this.health < 1) {
            return "A Saxon has died in combat"
        } else {
            return `A Saxon has received ${damage} points of damage`
        }
    }
}


// War
class War {
    vikingArmy = []
    saxonArmy = []

    randomFighter(arr) {
        return Math.floor(Math.random() * arr.length)
    }

    addViking(argg) {
        this.vikingArmy.push(argg)
    }

    addSaxon(argg) {
        this.saxonArmy.push(argg)
    }

    vikingAttack() {
        
    }

    saxonAttack() {}

    showStatus() {}
}
