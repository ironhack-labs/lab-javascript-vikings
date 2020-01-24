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
        this.health = this.health - damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;   
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
    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }
    vikingAttack() {
        const a = Math.floor(Math.random() * this.saxonArmy.length) //generate random mumber
        const b = Math.floor(Math.random() * this.vikingArmy.length) //generate random mumber
        const aSaxon = this.saxonArmy[a]
        const aViking = this.vikingArmy[b]
        const result = aSaxon.receiveDamage(aViking.strength)
        if (aSaxon.health <= 0) {
            this.saxonArmy.splice(a,1)
            return "A Saxon has died in combat"
        } 
        return result
    }
    saxonAttack() {
        const a = Math.floor(Math.random() * this.saxonArmy.length) //generate random mumber
        const b = Math.floor(Math.random() * this.vikingArmy.length) //generate random mumber
        const aSaxon = this.saxonArmy[a]
        const aViking = this.vikingArmy[b]
        const result = aViking.receiveDamage(aSaxon.strength)
        if (aViking.health <= 0) {
            this.vikingArmy.splice(b,1)
        } 
        return result
    }
    showStatus() {
        if (this.saxonArmy.length <= 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length <= 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}

// War with generic method
// Since there is a lot of repetitive code in the previous two iterations, vikingAttack() and saxonAttack() try to create one generic method and call it in the case of vikingAttack and in the case of saxonAttack instead of using almost the same code for both methods. (This iteration doesn't have test, so ask your TAs and your instructor to give you feedback on the quality of your code after the refactor.)

// class War {
//     constructor() {
//         this.vikingArmy = []
//         this.saxonArmy = []
//     }
//     addViking(Viking) {
//         this.vikingArmy.push(Viking)
//     }
//     addSaxon(Saxon) {
//         this.saxonArmy.push(Saxon)
//     }
//     genericAttack(attackedArmy, attakingArmy) {
//         const a = Math.floor(Math.random() * this.attackedArmy.length) //generate random mumber
//         const b = Math.floor(Math.random() * this.attakingArmy.length) //generate random mumber
//         const attacked = this.attackedArmy[a]
//         const attaking = this.attakingArmy[b]
//         const result = attacked.receiveDamage(attaking.strength)
//         if (attacked.health <= 0) {
//             attackedArmy.splice(a,1)
//             return "An attacked warrior has died in combat"
//         } 
//         return result
//     }
//     vikingAttack() {
//         genericAttack(saxonArmy, vikingArmy)
//     }
//     saxonAttack() {
//         genericAttack(vikingArmy, saxonArmy)
//     }
// }