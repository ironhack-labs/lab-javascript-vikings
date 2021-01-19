// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
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
        super.receiveDamage(damage)
        if(this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } 
        return `${this.name} has died in act of combat`
    }
    battleCry() {
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        super.receiveDamage(damage)
        if(this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } 
        return `A Saxon has died in combat`
    }
}

// War
class War {
    constructor() {
    this.vikingArmy = [],
    this.saxonArmy = []
    }

    addViking(viking) {
        // viking = new Viking()
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
        // saxon = new Saxon()
        this.saxonArmy.push(saxon)
    }
    vikingAttack() {
        let attackingViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length) 
        let attackedSaxon = this.saxonArmy[saxonIndex]
        let result = attackedSaxon.receiveDamage(attackingViking.attack())

        if (attackedSaxon.health <= 0) {
            this.saxonArmy.splice(saxonIndex, 1)
        }
        return result
    }
    saxonAttack() {
        let attackingSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length) 
        let attackedViking = this.vikingArmy[vikingIndex]
        let result = attackedViking.receiveDamage(attackingSaxon.attack())

        if (attackedViking.health <= 0) {
            this.vikingArmy.splice(vikingIndex, 1)
        }
        return result
    }
    showStatus() {
        if (this.saxonArmy.length === 0) { return "Vikings have won the war of the century!" }
        if ( this.vikingArmy.length === 0){ return "Saxons have fought for their lives and survived another day..." }
        if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0){ return "Vikings and Saxons are still in the thick of battle." }
    }
}
