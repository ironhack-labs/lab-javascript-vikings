// Soldier iteration 1
class Soldier {
    constructor(health, strength){
        this.health = health
        this.strength = strength
    }
    attack (){
        return this.strength
    }
    receiveDamage (damage){
        this.health += - damage
    }
}

// Viking iteration 2
class Viking {
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

    battleCry() {
        return `Odin Owns You All!`
    }
}

// Saxon iteration 3
class Saxon {

    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }

}

// War iteration 4
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(viking){
        this.vikingArmy.push(viking)

    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }
}
