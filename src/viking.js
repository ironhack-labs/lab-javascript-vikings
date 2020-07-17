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
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }

    receiveDamage(damage) {
        super.receiveDamage(damage)
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return 'Odin Owns You All!'
    }
}
    
// Saxon
class Saxon extends Soldier {
    
    receiveDamage(damage){
        super.receiveDamage(damage)
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// // War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(vikingObj){
        this.vikingArmy.push(vikingObj)
    }

    addSaxon(saxonObj) {
        this.saxonArmy.push(saxonObj)
    }

    vikingAttack() {
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        const saxonDamage = randomSaxon.receiveDamage(randomViking.attack())
       
        if (randomSaxon.health <= 0 ) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1)
        }
        return saxonDamage
    }

    saxonAttack() {
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        const vikingDamage = randomViking.receiveDamage(randomSaxon.attack())

        if(randomViking.health <= 0 ) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1)
        }
        return vikingDamage
    }

    showStatus () {
        if(this.saxonArmy.length === 0){
            return 'Vikings have won the war of the century!'
        } else if(this.vikingArmy.length === 0){
            return 'Saxons have fought for their lives and survived another day...'
        } else {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }

}