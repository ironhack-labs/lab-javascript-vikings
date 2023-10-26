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
        } else { return `${this.name} has died in act of combat` }
    }
    battleCry() {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage
        if(this.health > 0){
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
    addViking(viking) {
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    vikingAttack() {
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

        randomSaxon.receiveDamage(randomViking.strength)
    }
    saxonAttack() {
        this.randomViking.receiveDamage(this.randomSaxon.strength)
    }


    /*saxonAttack() method
The Saxon version of vikingAttack(). A Viking receives damage equal to the strength of a Saxon.

should be a function
should receive 0 arguments
should make a Viking receiveDamage() equal to the strength of a Saxon
should remove dead Vikings from the army
should return result of calling receiveDamage() of a Viking with the strength of a Saxon */
}
