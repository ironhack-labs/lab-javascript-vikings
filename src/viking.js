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
    }
}

// Viking
class Viking extends Soldier{

    constructor(name, health, strength) {
        
        super(health, strength)
        this.name = name
    }

    receiveDamage(damage) {

        this.health = this.health - damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
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
class Saxon extends Soldier{

    receiveDamage(damage) {

        this.health = this.health - damage

        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        }
        else {
            return `A Saxon has died in combat`
        }
    }

}

// War
class War{

    constructor() {
        this.saxonArmy = []
        this.vikingArmy = []
    }

    addViking(viking) {
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }

    vikingAttack() {


        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
        let randomSaxon = this.saxonArmy[randomSaxonIndex]

        let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        let randomViking = this.vikingArmy[randomVikingIndex]
        
        let hitToSaxons = randomSaxon.receiveDamage(randomViking.attack())

        if(randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonIndex, 1)
        }

        return hitToSaxons
    }

    saxonAttack() {

        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
        let randomSaxon = this.saxonArmy[randomSaxonIndex]

        let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        let randomViking = this.vikingArmy[randomVikingIndex]

        let hitToVikings = randomViking.receiveDamage(randomSaxon.attack())

        if(randomViking.health <= 0) {
            this.vikingArmy.splice(randomVikingIndex, 1)
        }

        return hitToVikings
    }

    showStatus() {

        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        }
        if(this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        }
        if (this.vikingArmy.length !== 0 && this.saxonArmy.length !== 0) {
            return "Vikings and Saxons are still in the thick of battle."
        }

    }



}
