// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack() {
        return this.strength
    }
    receiveDamage(theDamage) {
        this.health -= theDamage 
    }
}

// Viking

class Viking extends Soldier {
    constructor(name, health, strength) {

        super(health, strength) 
        this.name = name

    }
    attack() {
        return this.strength
    }
    receiveDamage(theDamage) {
        this.health -= theDamage
        if (this.health > 0) {
            const strAlive = `${this.name} has received ${theDamage} points of damage`
            return strAlive
        }
        else {
            const strDie = `${this.name} has died in act of combat`
            return strDie
        }
    }
    battleCry() {
        const strOdin = `Odin Owns You All!`
        return strOdin
    }
}

// Saxon

class Saxon extends Soldier {
    constructor(health, strength) {
        
        super(health, strength)
    }
    receiveDamage(theDamage) {
        this.health -= theDamage
        if (this.health > 0) {
            const strAlive = `A Saxon has received ${theDamage} points of damage`
            return strAlive
        }
        else {
            const strDie = `A Saxon has died in combat`
            return strDie
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

        const randomnumber1 = Math.floor(Math.random() * this.saxonArmy.length)
        const saxon = this.saxonArmy[randomnumber1]
        const randomnumber2 = Math.floor(Math.random() * this.vikingArmy.length)
        const viking = this.vikingArmy[randomnumber2]
        
        const result = saxon.receiveDamage(viking.strength)

        for (let i = 0; i < this.saxonArmy.length; i++){
            if (this.saxonArmy[i].health <= 0)
                this.saxonArmy.splice(i, 1)
        }

       return result
    }

    saxonAttack() {
        const randomnumber1 = Math.floor(Math.random() * this.saxonArmy.length)
        const saxon = this.saxonArmy[randomnumber1]
        const randomnumber2 = Math.floor(Math.random() * this.vikingArmy.length)
        const viking = this.vikingArmy[randomnumber2]

        const result =viking.receiveDamage(saxon.strength)
        
        for (let i = 0; i < this.vikingArmy.length; i++){
            if (this.vikingArmy[i].health <= 0)
                this.vikingArmy.splice(i, 1)
        }

       return result
    }
    showStatus() {
        if (this.saxonArmy.length === 0)
            return (`Vikings have won the war of the century!`)
        else if (this.vikingArmy.length === 0)
            return (`Saxons have fought for their lives and survived another day...`)
        else
            return (`Vikings and Saxons are still in the thick of battle.`)
    }
}
