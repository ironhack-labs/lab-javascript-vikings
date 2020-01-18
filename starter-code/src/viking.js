// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }

    attack = () => this.strength

    receiveDamage(damage) {
        this.health -= damage
        return undefined
    }
}

// // Viking
class Viking {}

// // Saxon
// class Saxon {}

// // War
// class War {}