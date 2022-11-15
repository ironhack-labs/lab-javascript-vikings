// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack () {
        return this.strength
    }

    receiveDamage (damage) {
        this.health = this.health - damage
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super (health, strength)
        this.name = name;
    }

    receiveDamage (damage) {
        super.receiveDamage (damage)
        return this.health === 0 ? `${this.name} has died in act of combat` : `${this.name} has received ${damage} points of damage`
    }

    battleCry () {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    constructor (health, strength) {
        super (health, strength)
    }

    receiveDamage (damage) {
        super.receiveDamage (damage)
        return this.health === 0 ? `A Saxon has died in combat` : `A Saxon has received ${damage} points of damage`
    }
}

// War
class War {
    constructor () {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking (Viking) {
        this.vikingArmy.push(Viking)
    }

    addSaxon (Saxon) {
        this.saxonArmy.push(Saxon)
    }

    vikingAttack () {
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]

        const vikingAttack = randomSaxon.receiveDamage(randomViking.strength) 

        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxon, 1)
        }

        return vikingAttack // --> should return result of calling receiveDamage() of a Saxon with the strength of a Viking - me lo marca en rojo y no se porque
    }
    

    saxonAttack () {
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]

        const saxonAttack = randomViking.receiveDamage(randomSaxon.strength)

        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomViking, 1)
        }

        return saxonAttack
    }

    showStatus () {
        if (this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`
        } else if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`
        } else {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }

}



