// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health,
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
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`

        }
    }

}

// Saxon
class Saxon {
    receiveDamage
}

// War
class War {}