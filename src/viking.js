// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health,
        this.strength = strength
    }

    attack() {
        return this.strength
    }

    receiveDamage(quantity) {
        this.health -= quantity
    }    
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength)
        this.name = name
    }

    battleCry () {
        return `Odin Owns You All!`
    }
    
//     receiveDamage (function () => {
//         if (this.health < quantity * 10) {
//             return `${this.name} has received ${quantity} points of damage`
//         } else {
//             return
//         }
//     })


    receiveDamage (quantity) {
        this.health -= quantity

        if (this.health > 0) {
            return `${this.name} has received ${quantity} points of damage`
         } else {
            return `${this.name} has died in act of combat`
        }
    }
}

// Saxon
class Saxon extends Soldier {
    constructor (health, strength) {
        super (health, strength)
    }

    receiveDamage (quantity) {
        this.health -= quantity

        if (this.health > 0) {
            return `A Saxon has received ${quantity} points of damage`
         } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {}
