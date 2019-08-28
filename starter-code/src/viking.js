// Soldier
class Soldier {
    constructor(health,strength) {
        this.health = health
        this.strength = strength
    }

    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health  -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health,strength) {
        super(health,strength)
        this.name = name
 
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health -= damage

        if (this.health <= 0 ) {
            return `${this.name} has died in act of combat`
        }

        else if (this.health > 0 ) {
            return `${this.name} has received ${damage} points of damage`
        }

    }

    battleCry(){
        return 'Odin Owns You All!'
    }

}

// Saxon
class Saxon extends Soldier {
    constructor(health,strength) {
        super(health,strength)
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health -= damage

        if (this.health <= 0 ) {
            return `A Saxon has died in combat`
        }

        else if (this.health > 0 ) {
            return `A Saxon has received ${damage} points of damage`
        }

    }
}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking)
        
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }
    vikingAttack() {
        this.randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        this.randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        this.randomSaxon.receiveDamage(this.randomViking.strength)

        this.randomSaxonIndex = this.saxonArmy.indexOf(this.randomSaxon)

        if (this.randomSaxon.health <= 0) {
            this.saxonArmy.splice(this.randomSaxonIndex,1)
            return 'A Saxon has died in combat'
        }

    }

    saxonAttack() {
        this.randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        this.randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        this.randomViking.receiveDamage(this.randomSaxon.strength)

        this.randomVikingIndex = this.vikingArmy.indexOf(this.randomViking)

        if (this.randomViking.health <= 0) {
            this.vikingArmy.splice(this.randomVikingIndex,1)
        }

        else if (this.randomViking.health > 0) {
            return `${this.randomViking.name} has received ${this.randomSaxon.strength} points of damage`
        }
    }

    showStatus() {

        if (this.saxonArmy.length == 0) {
            return 'Vikings have won the war of the century!'
        }
        
        else if (this.vikingArmy.length == 0) {
            return 'Saxons have fought for their lives and survive another day...'
        }

        else if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }

}
