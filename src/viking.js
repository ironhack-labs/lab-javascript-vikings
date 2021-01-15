// Soldier
class Soldier {
    constructor (health, strength) {
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
    constructor (name, health, strength) {
        super (health, strength)
        this.name = name
    }

    receiveDamage(damage) {
        super.receiveDamage(damage) 

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

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage) {
        super.receiveDamage(damage) 

        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }       
    }

    battleCry() {
        return `Odin Owns You All!`
    }
}

// War
class War {
    constructor () {
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
        const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
        const vikingRandom = this.vikingArmy[vikingIndex]
        const saxonRandom = this.saxonArmy[saxonIndex]
        const damage = saxonRandom.receiveDamage(vikingRandom.strength)
        
        if (damage === `A Saxon has died in combat`) {
            this.saxonArmy.splice(saxonIndex, 1)
            return damage
        } else {
            return damage
        }
    }

    saxonAttack() {
        const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
        const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        const saxonRandom = this.saxonArmy[saxonIndex]
        const vikingRandom = this.vikingArmy[vikingIndex]
        const damage = vikingRandom.receiveDamage(saxonRandom.strength)
        
        if (damage === `${vikingRandom.name} has died in act of combat`) {
            this.vikingArmy.splice(vikingIndex, 1)
            return damage
        } else {
            return damage
        }
    }

    
    showStatus() {
        if (!this.saxonArmy.length) {
            return `Vikings have won the war of the century!`
        } else if (!this.vikingArmy.length) {
            return `Saxons have fought for their lives and survived another day...`
        } else {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }
}

// attack(tribe) {
//     const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
//     const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
//     const saxonRandom = this.saxonArmy[saxonIndex]
//     const vikingRandom = this.vikingArmy[vikingIndex]

//     switch (tribe) {
//         case "vikingAttack":
//             const damage = saxonRandom.receiveDamage(vikingRandom.strength)
//             if (damage === `A Saxon has died in combat`) {
//                 this.saxonArmy.splice(saxonIndex, 1)
//                 return damage
//             } else {
//                 return damage
//             }
        
//         case "saxonAttack":
//             const damage = vikingRandom.receiveDamage(saxonRandom.strength)
//             if (damage === `${vikingRandom.name} has died in act of combat`) {
//                 this.vikingArmy.splice(vikingIndex, 1)
//                 return damage
//             } else {
//                 return damage
//             }
//         }
// }