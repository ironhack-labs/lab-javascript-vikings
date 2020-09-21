// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack(){
        return this.strength
    }
    receiveDamage(dmg){
        this.health -= dmg
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength)
        this.name = name
    }
    receiveDamage(dmg){
        this.health -= dmg
        if (this.health > 0) {
            return `${this.name} has received ${dmg} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return 'Odin Owns You All!'
    }

}

// Saxon
class Saxon extends Soldier {
    receiveDamage(dmg){
        this.health -= dmg
        if (this.health > 0) {
            return `A Saxon has received ${dmg} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War

class War {
    constructor(){
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
        let rng = Math.floor(Math.random())
        let rndSaxon = this.saxonArmy[rng]
        let rndViking = this.vikingArmy[rng].strength
        if (rndSaxon.health > 0) {
            this.saxonArmy.splice(rng,1) 
        }
        return rndSaxon.receiveDamage(rndViking)

        // return 
    }
    saxonAttack() {
        let rng = Math.floor(Math.random())
        let rndViking = this.vikingArmy[rng]
        let rndSaxon = this.saxonArmy[rng].strength
        if (rndViking.health < 0) {
            this.vikingArmy.splice(rng, 1)
        }
        return rndViking.receiveDamage(rndSaxon)
    }
    showStatus() {
        
    }
}

