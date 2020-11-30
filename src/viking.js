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
        super(health, strength)
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

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
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

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(viking) {
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }

    randomViking () { 
        return this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    }

    randomSaxon () {
        return this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    }

    vikingAttack() {
        let theOneSaxon = this.randomSaxon()
        let theOneViking = this.randomViking()

        let damagedSaxon = theOneSaxon.receiveDamage(theOneViking.strength)

        if (theOneSaxon.health <= 0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(theOneSaxon), 1)
            //return `The saxon number ${this.saxonArmy.indexOf(theOneSaxon)} has died. RIP` // (Jasmine wont let me add it)
        }

        return damagedSaxon // + ` by the great Viking whose name is ${theOneViking.name}` // (Jasmine wont let me add it)
    }

    saxonAttack() {
        let theOneSaxon = this.randomSaxon()
        let theOneViking = this.randomViking()

        let damagedViking = theOneViking.receiveDamage(theOneSaxon.strength)

        if (theOneViking.health <= 0) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(theOneViking), 1)
            return `The great Viking ${theOneViking.name} has died` 
        } 

        return damagedViking
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else if (this.vikingArmy.length >= 1 || this.saxonArmy.length >= 1) {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }

}



// CRreation of soldiers
let viking1 = new Viking ('Wakanda', 100, 60)
let viking2 = new Viking ('Kily', 100, 60)
let viking3 = new Viking ('Mucmad', 100, 60)
let viking4 = new Viking ('Wassa', 100, 60)
let saxon1 = new Saxon (200, 30)
let saxon2 = new Saxon (200, 30)
let saxon3 = new Saxon (200, 30)
let saxon4 = new Saxon (200, 30)

// The war beggins
const theWar = new War();

// ARMY OF VIKINGS CALLED TO theWar
theWar.addViking(viking1)
theWar.addViking(viking2)
theWar.addViking(viking3)
theWar.addViking(viking4)

//ARMY OF SAXONS CALLED TO theWar
theWar.addSaxon(saxon1)
theWar.addSaxon(saxon2)
theWar.addSaxon(saxon3)
theWar.addSaxon(saxon4)


// Let the war begin
console.log(theWar)

console.log(theWar.vikingAttack())
console.log(theWar.saxonAttack())
console.log(theWar.vikingAttack())
console.log(theWar.saxonAttack())
console.log(theWar.vikingAttack())
console.log(theWar.saxonAttack())
console.log(theWar.vikingAttack())
console.log(theWar.saxonAttack())
console.log(theWar.vikingAttack())
console.log(theWar.saxonAttack())
console.log(theWar.vikingAttack())
console.log(theWar.saxonAttack())
console.log(theWar.vikingAttack())
console.log(theWar.saxonAttack())
console.log(theWar.vikingAttack())
console.log(theWar.saxonAttack())
console.log(theWar.vikingAttack())
console.log(theWar.saxonAttack())
console.log(theWar.vikingAttack())
console.log(theWar.saxonAttack())
console.log(theWar.vikingAttack())
console.log(theWar.saxonAttack())
console.log(theWar.vikingAttack())
console.log(theWar.saxonAttack())
console.log(theWar.vikingAttack())
console.log(theWar.saxonAttack())
console.log(theWar.vikingAttack())
console.log(theWar.saxonAttack())
console.log(theWar.vikingAttack())

console.log(theWar.vikingArmy)

console.log(theWar.showStatus())




