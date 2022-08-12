// Soldier
class Soldier {

    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {

        return this.strength;
    }

    receiveDamage(damage) {

        this.health = this.health - damage
    }

}




// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength, name)
        this.name = name
    }


    receiveDamage(damage) {

        this.health = this.health - damage

        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }

}

let vikingo1 = new Viking('nasdnas', 200, 100)
let vikingo2 = new Viking('nasdnas', 200, 100)


// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }
    attack() {

        return this.strength;
    }


    receiveDamage(damage) {

        this.health = this.health - damage

        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else if (this.health <= 0) {
            return `A Saxon has died in combat`
        }
    }
}

let saxon1 = new Saxon('Pepe', 200, 100)
let saxon2 = new Saxon('Pepe', 200, 100)

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(name) {
        this.vikingArmy.push(name)
    }

    addSaxon(name) {
        this.saxonArmy.push(name)
    }

    vikingAttack() {

        let random = Math.floor(Math.random() * 1) + 1

        let saxonRandom = this.saxonArmy[random]
        let vikingRandomStrength = this.vikingArmy[random].strength

        let msg = saxonRandom.receiveDamage(vikingRandomStrength)

        if (saxonRandom.health <= 0) {
            this.saxonArmy.pop(saxonRandom)
        }

        return msg
    }


    saxonAttack() {



    }

    showStatus() {

        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!'
        }

        if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...'
        } else {
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }

}


let random = Math.floor(Math.random() * 1) + 1
console.log(random)
console.log(random)
console.log(random)
console.log(random)






