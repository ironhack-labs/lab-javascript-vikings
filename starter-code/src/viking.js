// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health
        this.strength = strength
    }

    attack(){
        return this.strength
    }

    receiveDamage(damage){
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }

    receiveDamage(damage){
        super.receiveDamage(damage)
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        }else{
            return `${this.name} has died in act of combat`
        }
    }

    battleCry(){
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }

    receiveDamage(damage){
        super.receiveDamage(damage)
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        }else{
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

    vikingAttack(){
        const positionSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        const positionViking = Math.floor(Math.random() * this.vikingArmy.length)
        const message =  this.saxonArmy[positionSaxon].receiveDamage(this.vikingArmy[positionViking].strength)
        if (this.saxonArmy[positionSaxon].health <= 0){
            this.saxonArmy.splice(positionSaxon)
        }
        return message

    }
    saxonAttack(){
        const positionSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        const positionViking = Math.floor(Math.random() * this.vikingArmy.length)
        const message =  this.vikingArmy[positionViking].receiveDamage(this.saxonArmy[positionSaxon].strength)
        if (this.vikingArmy[positionViking].health <= 0){
            this.vikingArmy.splice(positionViking)
        }
        return message

    }

    showStatus() {
        if (this.vikingArmy.length === 0){
            return `Saxons have fought for their lives and survive another day...`
        }else if (this.saxonArmy.length === 0){
            return 'Vikings have won the war of the century!'
        }else{
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }
}
