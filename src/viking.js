// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack() {
        
        return  this.strength
    }
    receiveDamage(damage) {
        this.health -= damage
    }
}
const soldier1 = new Soldier(300, 50)
console.log(`el soldado tiene ${soldier1.life} de vida y ${soldier1.level} de fuerza`)

// Viking

class Viking extends Soldier {
    
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }
    receiveDamage(damage) {
        this.health -= damage
        
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`        }
        else {
            return`${this.name} has died in act of combat`
        }

    }
    battleCry() {
        return ("Odin Owns You All!")
    }
}
const vinking1 = new Viking(300, 400, "Thor")

// Saxon
class Saxon extends Soldier {
       receiveDamage(damage) {
           this.health -= damage
           
        if (this.health > 0) {
            return(`A Saxon has received ${damage} points of damage`)
        }
        else {
            return(`A Saxon has died in combat`)
        }

    }

}
const saxon1 = new Saxon(300,499)

// War
class War extends Viking {

}
