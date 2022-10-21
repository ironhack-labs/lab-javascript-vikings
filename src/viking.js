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
        this.health = health
        this.strength = strength
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return this.name + " has received " + damage + " points of damage"
        } else {
            return this.name + " has died in act of combat"
        }
    }
    battleCry() {
        return "Odin Owns You All!"
    }


}

// Saxon
class Saxon extends Soldier {

    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return "A Saxon has received " + damage + " points of damage"
        } else {
            return "A Saxon has died in combat"
        }
    }
    showStatus() {
        if (vikingArmy.length === 0)
            return "Saxons have fought for their lives and survived another day..."
        else if (saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}


//War
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
        let saxonSoldier = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let vikingSoldier = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        this.saxonArmy.splice(this.saxonArmy[saxonSoldier], 1)
        return saxonSoldier.receiveDamage(vikingSoldier.strength)
    }
    saxonAttack() {
        let vikingSoldier = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let saxonSoldier = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        this.vikingArmy.splice(this.vikingArmy[vikingSoldier], 1)
        return vikingSoldier.receiveDamage(saxonSoldier.strength)

    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}