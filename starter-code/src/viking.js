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
        //super.receiveDamage(damage)
        this.health -= damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
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
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        }
        else {
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
        let attackingViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let defendingSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        defendingSaxon.receiveDamage(attackingViking.strength)
        if (defendingSaxon.health < 1) {
            this.saxonArmy.splice(defendingSaxon, 1)
            return "A Saxon has died in combat"
        }
    }

    saxonAttack() {

        let attackingSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let defendingViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        defendingViking.receiveDamage(attackingSaxon.strength)
        if (defendingViking.health < 1) {
            this.vikingArmy.splice(defendingViking, 1)
            return "A Viking has died in combat"

        } else {
            return defendingViking.name + " has received " + attackingSaxon.strength + " points of damage"
        }
    }
    showStatus() {
        if (this.saxonArmy.length == 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length == 0) {
            return "Saxons have fought for their lives and survive another day..."
        }
        else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
} 