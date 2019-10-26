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
    }
    receiveDamage(damage) {
        this.health -= damage
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
    constructor(health, strength) {
        super(health, strength)
    }
    receiveDamage(damage) {
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
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length)
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        let saxonDie = this.saxonArmy[randomSaxon]
        let saxonDamage = saxonDie.receiveDamage(this.vikingArmy[randomViking].strength)



        for (let i = 0; i < this.saxonArmy.length; i++) {
            if (this.saxonArmy[i].health <= 0) {
                //console.log(this.saxonArmy[i])
                this.saxonArmy.splice(this.saxonArmy[i], 1)
            }
        }
        //if (saxonDie.health <= 0) {
        //  this.saxonArmy = this.saxonArmy.splice(saxonDie, 1)
        //}
        return saxonDamage
        //function randomSelector(arr) {
        //return arr[Math.floor(Math.random() * arr.length)]
    }
    saxonAttack() {
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length)
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        //let vikingDamage = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength)
        let vikingDie = this.vikingArmy[randomViking]
        let vikingDamage = vikingDie.receiveDamage(this.saxonArmy[randomSaxon].strength)
        console.log(vikingDie, vikingDie.strength, vikingDamage, vikingDie.health)
        for (let i = 0; i < this.vikingArmy.length; i++) {
            if (this.vikingArmy[i].health <= 0) {
                console.log(this.vikingArmy[i])
                this.vikingArmy.splice(this.vikingArmy[i], 1)
            }
        }

        /*if (vikingDie.health <= 0) {
            this.vikingArmy = this.vikingArmy.splice(vikingDie, 1)
        }*/
        return vikingDamage
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