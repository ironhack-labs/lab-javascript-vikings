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
//inheritance: Viking should extend Soldier
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name

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
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health = this.health - damage
        if (this.health > 0)
            return `A Saxon has received ${damage} points of damage`
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

    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }

    vikingAttack() {
        /*receiveDamage(damage) {
            this.health = this.health - damage
            if (this.health > 0)
                return `A Saxon has received ${damage} points of damage`
            else {
                return `A Saxon has died in combat`
            }
        }*/
    }
    saxonAttack() {

    }

    showStatus() {

        if (this.saxonArmy.constructor === 0) {
            return `Vikings have won the war of the century!`
        } else
        if (vikingArmy.constructor === 0) {
            return `Saxons have fought for their lives and survived another day...`
        } else
        if (vikingArmy.constructor === 1 && saxonArmy.constructor === 1) {
            return `Vikings and Saxons are still in the thick of battle.`
        }

    }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = { Soldier, Viking, Saxon, War };
}