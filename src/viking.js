// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    };
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage
        // prevent negative numbers because I use a truthy if condition with it later
        // this.health = Math.max(0, this.health) // no because then won't pass spec "should make Saxon receiveDamage() equal to the strength of a Viking"
    }

}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength) // calls the contructor of the parent, it cannot be referenced with super.constructor(), it is implicit
        this.name = name
        //return this // automatic for a constructor
    }
    // js support overriding (last method with the same name) but no native overloading (can be implemented with a generic foo() function and testing the passed arguments with the arguments keyword)
    //attack() // no need to implement, parent method is the same
    receiveDamage(damage) {
        super.receiveDamage(damage)
        // if (this.health) cannot use truthy condition because can be a neg number which are truthy 
        if (this.health > 0)
            return `${this.name} has received ${damage} points of damage`
        else
            return `${this.name} has died in act of combat`
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    /*
    constructor(health, strength) {
        super(health, strength)
    }
    */
   // no need to call the parent constructor in this case
   // JavaScript uses prototype-based inheritance (meaning objects inherit properties and methods from their prototypes)
   // here, the constructor method is not overridden, so the constructor of the parent is called uppon instantiation
    receiveDamage(damage) {
        super.receiveDamage(damage)
        // if (this.health) // same story
        if (this.health > 0)
            return `A Saxon has received ${damage} points of damage`
        else
            return `A Saxon has died in combat`
    }
}

function getRandomInt(min, max) {
    // return Math.random() * (max - min) + min // no because min and max would have half the chance to roll
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min // this gives uniform distribution because Math.random() returns in [0; 1[, it if was [0; 1] then there would be a non-zero chance to get max + 1 (if Math.random() returned 1)
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
    vikingAttack() {
        let randomSaxon = this.saxonArmy[getRandomInt(0, this.saxonArmy.length - 1)]
        let randomViking = this.vikingArmy[getRandomInt(0, this.saxonArmy.length - 1)] 
        let result = randomSaxon.receiveDamage(randomViking.strength)
        // this.saxonArmy.forEach((saxon, index) => { this.saxonArmy.splice(index, saxon.health ? 0 : 1) }) // same story
        this.saxonArmy.forEach((saxon, index) => { this.saxonArmy.splice(index, saxon.health > 0 ? 0 : 1) })
        return result
    }
    saxonAttack() {
        let randomSaxon = this.saxonArmy[getRandomInt(0, this.saxonArmy.length - 1)]
        let randomViking = this.vikingArmy[getRandomInt(0, this.saxonArmy.length - 1)] 
        let result = randomViking.receiveDamage(randomSaxon.strength)
        this.vikingArmy.forEach((viking, index) => { this.vikingArmy.splice(index, viking.health > 0 ? 0 : 1) })
        return result
    }
    showStatus() {
        let vikingsWin = "Vikings have won the war of the century!" 
        let saxonsWin = "Saxons have fought for their lives and survived another day..." 
        let battle = "Vikings and Saxons are still in the thick of battle."
        if (this.saxonArmy.length == 0)
            return vikingsWin
        else if (this.vikingArmy.length == 0)
            return saxonsWin
        else return battle
    }
}

// quick tests
const thor = new Viking("Thor", 100, 100)
console.log(thor.receiveDamage(50))
console.log(thor.receiveDamage(50))

const saxon1 = new Saxon(100, 100)
console.log(saxon1.receiveDamage(50))
console.log(saxon1.health)

// const war = new War()
// war.addViking(thor)
// war.addSaxon(saxon1)
// console.log(war.vikingAttack()) // Thor can kill even when dead!

const harald = new Viking("Harald", 300, 150)
const saxon2 = new Saxon(60, 25)
const war = new War()
war.addViking(harald)
war.addSaxon(saxon2)
console.log(war.vikingAttack()) 