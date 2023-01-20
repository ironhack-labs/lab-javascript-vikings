// Soldier
class Soldier {
    constructor (healthValue, strengthValue){
        this.health = healthValue
        this.strength = strengthValue
    }
    
    giveValue (healthValue, strengthValue) {
        this.health = healthValue
        this.strength = strengthValue
    }

    attack () {
        return this.strength
    }

    receiveDamage (damageValue) {
        this.health -= damageValue
    }
}


// Viking
class Viking extends Soldier{
    constructor (nameValue, healthValue, strengthValue) {
        super (healthValue, strengthValue)
        this.name = nameValue 
    }

    receiveDamage(damageValue) {
        this.health -= damageValue

        if (this.health > 0) {
            return `${this.name} has received ${damageValue} points of damage`
        }
        else if (this.health <= 0){
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier{

    constructor (healthValue, strengthValue) {
        super (healthValue, strengthValue)
    }

    receiveDamage(damageValue) {
        this.health -= damageValue

        if (this.health > 0) {
            return `A Saxon has received ${damageValue} points of damage`
        }
        else if (this.health <= 0) {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor (){
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking (viking){
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }

    vikingAttack(){
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]

        const vikingAttack = randomSaxon.receiveDamage(randomViking.strength) 


        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxon)
        }

        if (randomSaxon.health > 0) {
            return `A Saxon has received ${damageValue} points of damage`
        }
        else if (randomSaxon.health <= 0) {
            return `A Saxon has died in combat`
        }
    }

    saxonAttack(){
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]

        const saxonAttack = randomViking.receiveDamage(randomSaxon.strength)


        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomViking)
        }

        if (randomViking.health > 0) {
            return `${randomViking.name} has received ${randomSaxon.strength} points of damage`
        }
        else if (randomViking.health <= 0) {
            return `${randomViking.name} has died in act of combat`
        }
    }

    showStatus(){

        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        }
        else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        }
        else if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) {
            return "Vikings and Saxons are still in the thick of battle."
        }

    }
}
