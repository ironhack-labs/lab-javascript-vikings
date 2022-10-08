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
        this.health = this.health - theDamage
    }

}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength) {
        super (health, strength)
        this.name = name
    }

    receiveDamage(theDamage) {
        this.health = this.health - theDamage
        if(this.health > 0) return `${this.name} has received ${theDamage} points of damage`
        return `${this.name} has died in act of combat`
    }

    battleCry() {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(theDamage) {
        this.health = this.health - theDamage
        if(this.health > 0) return `A Saxon has received ${theDamage} points of damage`
        return `A Saxon has died in combat`
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
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }
    vikingAttack(){
        let rdmV = Math.floor(this.vikingArmy.length * Math.random())
        let rdmS = Math.floor(this.saxonArmy.length * Math.random())

        let chosenSaxon = this.saxonArmy[rdmS]
        let chosenViking = this.vikingArmy[rdmV]

        let res = chosenSaxon.receiveDamage(chosenViking.strength)

        if(chosenSaxon.health <= 0) {
            this.saxonArmy.splice(chosenSaxon,1)
        }
        return res

    }
    saxonAttack(){
        let rdmV = Math.floor(this.vikingArmy.length * Math.random())
        let rdmS = Math.floor(this.saxonArmy.length * Math.random())

        let chosenSaxon = this.saxonArmy[rdmS]
        let chosenViking = this.vikingArmy[rdmV]

        let res = chosenViking.receiveDamage(chosenSaxon.strength)

        if(chosenViking.health <= 0) {
            this.vikingArmy.splice(chosenViking,1)
        }
        return res
    }

    
    showStatus(){
        if(this.saxonArmy.length === 0) return "Vikings have won the war of the century!"
        if(this.vikingArmy.length === 0) return "Saxons have fought for their lives and survived another day..."
        return "Vikings and Saxons are still in the thick of battle."
      
    }
}
