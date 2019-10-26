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

class Viking extends Soldier {
    constructor(name, health, strength) {
        super(name, health, strength)
        this.name = name
        this.health = health
        this.strength = strength
    }
    battleCry() {
        return `Odin Owns You All!`
    }
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        else return `${this.name} has died in act of combat`;
    }
}

class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
        this.health = health
        this.strength = strength
    }

    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
        else return `A Saxon has died in combat`;
    }
}
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
        this.Viking = Viking
        this.Saxon = Saxon

    }
    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }


    vikingAttack() {
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length)
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        let saxonReceivedDamage = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength)

        for (let i = 0; i < this.saxonArmy.length; i++) {
            if (this.saxonArmy[i].health <= 0) {
                this.saxonArmy.pop()
            }
            return saxonReceivedDamage
        }
    }



    saxonAttack() {
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length)
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        let vikingReceivedDamage = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength)

        for (let i = 0; i < this.vikingArmy.length; i++) {
            if (this.vikingArmy[i].health <= 0) {
                this.vikingArmy.pop()
            }
            return vikingReceivedDamage
        }
    }


    showStatus() {
        if (this.saxonArmy.length <= 0) {
            return `Vikings have won the war of the century!`
        } else if (this.vikingArmy.length <= 0) {
            return `Saxons have fought for their lives and survive another day...`
        } else {
            return `Vikings and Saxons are still in the thick of battle.`

        }
    }
}
