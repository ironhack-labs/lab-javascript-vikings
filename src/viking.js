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
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        }
        else { return `${this.name} has died in act of combat` }
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

new Viking('Bob', 100, 10)

// Saxon
class Saxon { }

// War
class War { }

const sold = new Soldier(100, 100) // {health: , strength: , attack(), receiveDamage()}