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
        
        const RandomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

        const RandomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]

        RandomSaxon.receiveDamage(RandomViking.strength) 

        /*
        const aliveSaxonArmy = this.saxonArmy.filter((health) => {
            return health !== 0
        })

        this.saxonArmy = this.saxonArmy - aliveSaxonArmy
        */


    }

}



