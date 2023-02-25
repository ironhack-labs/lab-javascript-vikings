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
class Viking {
    
}

// Saxon
class Saxon { }

// War
class War { }

const sold = new Soldier(100, 100) // {health: , strength: , attack(), receiveDamage()}