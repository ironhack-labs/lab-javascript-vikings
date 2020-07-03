// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health,
            this.strength = strength
    }
}
Soldier.prototype.attack = function () {
    return this.strength
}

Soldier.prototype.receiveDamage = function (damage) {
    this.health -= damage
}

// Viking

class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }
    receiveDamage = function (damage) {
        this.health -= damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry = function () {
        return `Odin Owns You All!`
    }
}


// Saxon
class Saxon extends Soldier {
    receiveDamage = function (damage) {
        this.health -= damage
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [],
            this.saxonArmy = []
    }
    addViking = function (Viking) {
        this.vikingArmy += Viking
    }
    addSaxon = function (Saxon) {
        this.saxonArmy += Saxon
    }
    vikingAttack() = {

        let randomPick = function (array) {
            let num = Math.floor(Math.random() * (array.length))
            return array[num]
        }

        (randomPick(this.saxonArmy)).health -= (randomPick(this.vikingArmy)).strength

        if (this.saxonArmy.health <= 0) {
            (this.saxonArmy.filter(item => item.health <= 0))
        } else {
            return receiveDamage((randomPick(this.vikingArmy)))
        }



    }
    saxonAttack()
    showStatus()


}