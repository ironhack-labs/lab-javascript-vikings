// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
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
        // should be the first
        super(health, strength)
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage
        if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        } else {
            return `${this.name} has received ${damage} points of damage`
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    // No need to add the constructor again but it's better to do that
    constructor(health, strength) {
        super(health, strength)
    }
    receiveDamage(damage) {
        this.health -= damage
        if (this.health <= 0) {
            return `A Saxon has died in combat`
        } else {
            return `A Saxon has received ${damage} points of damage`
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
        this.vikingArmy.push(Viking)
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    genericAttack(army1, army2) {
        let indexOfSoldier1 = Math.floor(Math.random() * army1.length)
        let indexOfSoldier2 = Math.floor(Math.random() * army2.length)
        let army1Soldier = army1[indexOfSoldier1]
        let army2Soldier = army2[indexOfSoldier2]
        let warResult = army1Soldier.receiveDamage(army2Soldier.strength)
        if (army1Soldier.health <= 0) {
            army1.splice(indexOfSoldier1, 1)
        }
        return warResult
    }
    vikingAttack() {
        let indexOfViking = Math.floor(Math.random() * this.vikingArmy.length)
        let indexOfSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        let saxonSoldier = this.saxonArmy[indexOfSaxon]
        let vikingSoldier = this.vikingArmy[indexOfViking]
        let result = saxonSoldier.receiveDamage(vikingSoldier.strength)
        if (saxonSoldier.health <= 0) {
            this.saxonArmy.splice(indexOfSaxon, 1)
        }
        return result
    }
    saxonAttack() {
        let indexOfViking = Math.floor(Math.random() * this.vikingArmy.length)
        let indexOfSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        let saxonSoldier = this.saxonArmy[indexOfSaxon]
        let vikingSoldier = this.vikingArmy[indexOfViking]
        let result = vikingSoldier.receiveDamage(saxonSoldier.strength)
        if (vikingSoldier.health <= 0) {
            this.vikingArmy.splice(indexOfViking, 1)
        }
        return result
    }

    showStatus() {
        let result = ``
        if (this.saxonArmy == 0) {
            return result = `Vikings have won the war of the century!`
        } else if (this.vikingArmy == 0) {
            return result = `Saxons have fought for their lives and survived another day...`
        } else {
            return result = `Vikings and Saxons are still in the thick of battle.`
        }

    }
}