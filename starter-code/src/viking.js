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
        this.health = this.health - damage
    }

}



// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }
    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health = this.health - damage
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
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health = this.health - damage
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return "A Saxon has died in combat"
        }
    }
}




// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(aViking0bject) {
        this.vikingArmy.push(aViking0bject)
    }
    addSaxon(aSaxon0bject) {
        this.saxonArmy.push(aSaxon0bject)
    }
    vikingAttack() {
        let vikingStrength = this.vikingArmy[0].strength
        let saxonDamage = this.saxonArmy[0].receiveDamage(vikingStrength)
        return saxonDamage
    }
    saxonAttack() {
        let saxonStrength = this.saxonArmy[0].strength
        let vikingDamage = this.vikingArmy[0].receiveDamage(saxonStrength)
        return vikingDamage
    }
    showStatus() {
        if (this.saxonArmy.length <= 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length <= 0) {
            return "Saxons have fought for their lives and survive another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."

        }

    }
}
