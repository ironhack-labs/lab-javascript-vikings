//---> Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack() {
        return this.strength
    }
    receiveDamage(someDamage) {
        this.health -= someDamage
    }
}

//---> Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
        this.health = health
        this.strength = strength
    }
    receiveDamage(someDamage) {
        this.health -= someDamage
        if (this.health <= 0) {
            return (`${this.name} has died in act of combat`)
        } else {
            return (`${this.name} has received ${someDamage} points of damage`)
        }
    }
    battleCry() {
        return ("Odin Owns You All!")
    }
}

//---> Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
        this.health = health
        this.strength = strength
    }
    receiveDamage(someDamage) {
        this.health -= someDamage
        if (this.health <= 0) {
            return (`A Saxon has died in combat`)
        } else {
            return (`A Saxon has received ${someDamage} points of damage`)
        }
    }
}