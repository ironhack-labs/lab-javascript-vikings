// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }

    attack() {
        return this.strength
    }

    receiveDamage(theDamage) {
        this.health -= theDamage
    }

}


// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }

    receiveDamage(theDamage) {
        this.health -= theDamage

        if (this.health > 0) {
            return `${this.name} has received ${theDamage} points of damage`
        } else
            return `${this.name} has died in act of combat`
    }


    battleCry() {
        return `Odin Owns You All!`
    }
}

// // Saxon
class Saxon extends Soldier {

    attack() {
        return this.strength
    }

    receiveDamage(theDamage) {
        this.health -= theDamage

        if (this.health > 0) {
            return `A Saxon has received ${theDamage} points of damage`
        } else
            return `A Saxon has died in combat`
    }
}
// // War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(vikingSoldier) {
        this.vikingArmy.push(vikingSoldier)
    }

    addSaxon(saxonSoldier) {
        this.saxonArmy.push(saxonSoldier)
    }

    vikingAttack() {
        let viking = this.vikingArmy[Math.round(Math.random() * (this.vikingArmy.length - 1))]
        let saxon = this.saxonArmy[Math.round(Math.random() * (this.saxonArmy.length - 1))]

        saxon.receiveDamage(viking.strength)
        if (saxon.health <= 0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(saxon), 1)
        }

    }
}
