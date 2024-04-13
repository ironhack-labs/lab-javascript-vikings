// Soldier
class Soldier {
    constructor(healthValue, strengthValue) {
        this.health = healthValue
        this.strength = strengthValue
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health = this.health - damage
    }

}

// Viking
class Viking extends Soldier {

    constructor(nameValue, healthValue, strengthValue) {
        super(healthValue, strengthValue)
        this.name = nameValue
    }
    receiveDamage(damage) {
        this.health -= damage

        if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        } else {
            return `${this.name} has received ${damage} points of damage`
        }
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}


// Saxon
class Saxon extends Soldier { }

// War
class War { }
