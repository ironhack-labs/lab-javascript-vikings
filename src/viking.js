// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    
    attack() {
        return this.strength
    }

    receiveDamage(dmg) {
        this.health -= dmg
    }
}

// Viking
class Viking extends Soldier {
    constructor(name,health,strength) {
        super(health,strength)
        this.name = name
    }

    receiveDamage(dmg) {
        super.receiveDamage(dmg)
        if (this.health>0) {
            return `${this.name} has received ${dmg} points of damage`
        }
        else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon {}

// War
class War {}
