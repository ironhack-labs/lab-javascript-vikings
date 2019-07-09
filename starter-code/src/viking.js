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
        this.health - damage
        this.health = this.health - damage
    }
}

let health = 100


// Viking
class Viking {}

// Saxon
class Saxon {}

// War
class War {}