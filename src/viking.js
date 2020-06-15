// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack = () => {
        return this.strength
    }
    receiveDamage = (damage) => {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name 
        
    }
    receiveDamage = (damage) => {
        this.health -= damage
        if(this.health > 0) return `${this.name} has received ${damage} points of damage`
        if(this.health <= 0) return `${this.name} has died in act of combat`
    }
    battleCry = () => {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage = (damage) => {
        this.health -= damage
        if(this.health > 0) return `A Saxon has received ${damage} points of damage`
        if(this.health <= 0) return `A Saxon has died in combat`
    }
}

// War
class War {
    constructor () {
    this.vikingArmy = []
    this.saxonArmy = []
    }

    addViking (addSoldier) {
       this.vikingArmy.push(addSoldier)
    }
    addSaxon = (addSoldier) => {
       this.saxonArmy.push(addSoldier)
    }
    vikingAttack = () => {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]

        let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
        
       let result = randomSaxon.receiveDamage(randomViking.strength)
       if(randomSaxon.health <= 0) 
        this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1) 
       return result
    }
    saxonAttack = () => {

    }
    showStatus = () => {

    }
}
