// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    
    attack() {
        return this.strength
    }

    receiveDamage(dmg) {
        this.health -= dmg
    }
}

// Viking
class Viking extends Soldier {
    constructor(name,health,strength) {
        super(health,strength)
        this.name = name
    }

    receiveDamage(dmg) {
        super.receiveDamage(dmg)
        if (this.health>0) {
            return `${this.name} has received ${dmg} points of damage`
        }
        else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(dmg) {
        super.receiveDamage(dmg)
        if (this.health>0) {
            return `A Saxon has received ${dmg} points of damage`
        }
        else {
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

    addViking(myViking) {
        this.vikingArmy.push(myViking)
    }

    addSaxon(mySaxon) {
        this.saxonArmy.push(mySaxon)
    }

    vikingAttack() {
        const randomVikingNumber = Math.floor(Math.random() * this.vikingArmy.length)
        const randomSaxonNumber = Math.floor(Math.random() * this.saxonArmy.length)
        const combatResult = this.saxonArmy[randomSaxonNumber].receiveDamage(this.vikingArmy[randomVikingNumber].attack())
				console.log(combatResult)
        
        //remove dead saxons
        this.saxonArmy = this.saxonArmy.filter(entity => entity.health>0)
        return combatResult
    }

    saxonAttack() {
        const randomVikingNumber = Math.floor(Math.random() * this.vikingArmy.length)
        const randomSaxonNumber = Math.floor(Math.random() * this.saxonArmy.length)
        const combatResult = this.vikingArmy[randomVikingNumber].receiveDamage(this.saxonArmy[randomSaxonNumber].attack())
				console.log(combatResult)
        
        //remove dead saxons
        this.vikingArmy = this.vikingArmy.filter(entity => entity.health>0)
        return combatResult

    }

    showStatus() {}

}
