// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health,
        this.strength = strength
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier{
    constructor (name, health, strength) {
        super(health, strength)
        this.name = name
    }

    receiveDamage(damage) {
        this.health -= damage
        if (Viking.health > 0) {
            return `${this.name} has received ${this.damage} points of damage`
        } else {
            return `${this.name} has has died in act of combat`
        }
    }

    battleCry() {
        return 'Odin Owns You All!'
    }

}

// Saxon
class Saxon {}

// War
class War {}
