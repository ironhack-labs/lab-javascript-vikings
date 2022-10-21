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
        this.health =this.health - damage
    }
}
const soldier1 = new Soldier(1, 2)
soldier1.attack()
soldier1.receiveDamage(1)

// Viking

class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }
    receiveDamage(damage) {
        this.health =this.health - damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`

        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() { 
        return "Odin Owns You All!"
    }
}


// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }
    receiveDamage(damage) {
        this.health = this.health - damage

        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`

        } else {
            return `A Saxon has died in combat`
        }
  
    }
}
// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(Viking) {
    this.vikingArmy.push (Viking)
    }
    addSaxon(Saxon) {
        this.saxonArmy.push (Saxon)
    } 
    vikingAttack() {
        
        let randomSaxon = Math.floor(Math.ramdom() * this.saxonArmy.length)
        let saxon = this.saxonArmy[randomSaxon]
    
        receiveDamage(this.Viking.strength) 
        
        // let randomViking = Math.floor(Math.ramdom() * this.vikingArmy.length)
        // let viking = this.vikingArmy[randomViking]
        


    }
}
