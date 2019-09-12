// Soldier
class Soldier {
    constructor(healtArg, strenghtArg) {
        this.health = healtArg
        this.strength = strenghtArg
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super()
        this.name = name
        this.health = health
        this.strength = strength
    }

    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return this.name + ' has received ' + damage + ' points of damage'
        }
        return this.name + ' has died in act of combat'
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor (health, strength) {
        super()
        this.health = health
        this.strength = strength
    }
    
    receiveDamage(damage){
        this.health -= damage
        if (this.health > 0) {
            return 'A Saxon has received ' + damage + ' points of damage'
        }
        return 'A Saxon has died in combat'
    }
}

// War
class War {
    constructor() {
       this.vikingArmy = [] 
       this.saxonArmy = []
    }

    addViking(viking){
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    /*vikingAttack() {
        let indexRandomSaxon = Math.floor(Math.random * this.saxonArmy.length)
        let randomSaxon = this.saxonArmy[indexRandomSaxon]

        let indexRandomViking = Math.floor(Math.random * this.vikingArmy.length)
        let randomViking = this.vikingArmy[indexRandomViking]
        
        return randomSaxon.receiveDamage(randomViking.attack())

    }*/

    _randomViking() {
        return this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    }
    
    _randomSaxon() {
        return this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    }
    
    vikingAttack() {
        const randomSaxon = this._randomSaxon()
        const randomViking = this._randomViking()
        const attack = randomSaxon.receiveDamage(randomViking.attack())
        if (randomSaxon.health < 1) {
            this.saxonArmy = this.saxonArmy.filter(saxon => saxon !== randomSaxon)
        }
        return attack
    }

    saxonAttack() {
         const randomSaxon = this._randomSaxon()
         const randomViking = this._randomViking()
         const attack = randomViking.receiveDamage(randomSaxon.attack())
         if (randomViking.health < 1) {
           this.vikingArmy = this.vikingArmy.filter(viking => viking !== randomViking)
         }
         return attack
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        } else if(this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survive another day..."
        }
        return "Vikings and Saxons are still in the thick of battle."
    }

}


Soldier.damage