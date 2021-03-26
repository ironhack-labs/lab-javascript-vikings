// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(arr) {
        this.health = this.health - arr;
    }
}


// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
    }

    receiveDamage(arr) {
        this.health = this.health - arr;
        if (this.health > 0) {
            return `${this.name} has received ${arr} points of damage`
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
    receiveDamage(arr) {
        this.health = this.health - arr;
        if (this.health > 0) {
            return `A Saxon has received ${arr} points of damage`
        } else {
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

    addViking(vikingObj) {
        this.vikingArmy.push(vikingObj)
    }

    addSaxon(saxonObj) {
        this.saxonArmy.push(saxonObj)
    }

    vikingAttack() {
        let saxonRandom = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let vikingRandom = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

        let saxonDamage = saxonRandom.receiveDamage(vikingRandom.strength)
        if (saxonRandom.health <= 0) {
            this.saxonArmy.pop(saxonRandom)
        }

        return saxonDamage
    }

    saxonAttack() {
        let saxonRandom = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let vikingRandom = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

        let vikingDamage = vikingRandom.receiveDamage(saxonRandom.strength)
        if (vikingRandom.health <= 0) {
            this.vikingArmy.pop(vikingRandom)
        }
        return vikingDamage
    }

    showStatus() {
        if (this.saxonArmy.length <= 0)
            return "Vikings have won the war of the century!"
        if (this.vikingArmy.length <= 0)
            return "Saxons have fought for their lives and survived another day..."
        if ((this.vikingArmy.length >= 1) && (this.saxonArmy.length >= 1))
            return "Vikings and Saxons are still in the thick of battle."
    }
}