// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }

    attack(){
        return this.strength
    }

    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health,strength) {
        super(health, strength)
        this.name = name
    }

    receiveDamage(damage) {
        Soldier.prototype.receiveDamage.call(this, damage)

        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        }
        else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength)
    }

    receiveDamage(damage) {
        Soldier.prototype.receiveDamage.call(this, damage)

        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        }
        else {
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
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length)

        let saxon = this.saxonArmy[randomSaxon]
        let viking = this.vikingArmy[randomViking]

        let resultDamage = saxon.receiveDamage(viking.attack()) 

        if (resultDamage === `A Saxon has died in combat`){
            this.saxonArmy.pop(saxon)
        }

        return resultDamage

         
    }

    saxonAttack() {
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length)

        let saxon = this.saxonArmy[randomSaxon]
        let viking = this.vikingArmy[randomViking]

        let resultDamage = viking.receiveDamage(saxon.attack())

        if (resultDamage === `${viking.name} has died in act of combat`) {
            this.vikingArmy.pop(viking)
        }

        return resultDamage
    }

    showStatus() {

        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        }
        else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survive another day..."
        } else if (this.saxonArmy.length === 1 && this.vikingArmy.length === 1) {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }


}
