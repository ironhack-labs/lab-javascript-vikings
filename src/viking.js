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
        this.health = this.health - damage
        return
    }
   
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }
    attack () {
        return this.strength
    }
    receiveDamage(damage) {
        this.health = this.health - damage
        if(this.health > 0) {
        let txt =  `${this.name} has received ${damage} points of damage`
        return txt
        } else if(this.health <= 0) {
            let txt1 = `${this.name} has died in act of combat`
            return txt1
        }
    }
    battleCry() {
        let vikingCry = 'Odin Owns You All!'
        return vikingCry
    }

    
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }

    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health = this.health - damage
        if(this.health > 0) {
            let txt =  `A Saxon has received ${damage} points of damage`
            return txt
            } else if(this.health <= 0) {
                let txt1 = `A Saxon has died in combat`
                return txt1
            }
    }
}

// War
class War {
    constructor() {
        this.saxonArmy = []
        this.vikingArmy = []

    }
    addViking(viking) {
        this.vikingArmy.push(viking)
        return
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
        return
    }
    vikingAttack() {
        let saxonArmyLength = this.saxonArmy.length
        let vikingArmyLength = this.vikingArmy.length
        let randomSaxon = this.saxonArmy[Math.round(Math.random()*saxonArmyLength)]
        let randomViking = this.vikingArmy[Math.round(Math.random()*vikingArmyLength)]
          randomSaxon.receiveDamage(randomViking.strength)

   
    
    }
}
