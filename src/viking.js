// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health
        this.strength = strength
    }

    attack (){
        return this.strength
    }

    receiveDamage (damage){
        this.health = this.health - damage
    }
}

// Viking


class Viking extends Soldier {

    constructor(name, health, strength) {

        super(health, strength)

        this.name = name
    }

    attack(){
        return this.strength
    }

    receiveDamage(damage){
        this.health = this.health - damage

        if(this.health>0){
            return `${this.name} has received ${damage} points of damage`
        
        }else{
            return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return "Odin Owns You All!"
    }

}

// Saxon
class Saxon extends Soldier {

    attack(){
        return this.strength
    }

    receiveDamage(damage){
        this.health = this.health - damage

        if(this.health>0){
            return `A Saxon has received ${damage} points of damage`
        
        }else{
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

    addViking(viking){
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }

    vikingAttack(){

        let randomVikingIndex = Math.random()*this.vikingArmy.length
        randomVikingIndex = Math.floor(randomVikingIndex)
        const randomViking = this.vikingArmy[randomVikingIndex]

        let randomSaxonIndex = Math.random()*this.saxonArmy.length
        randomSaxonIndex = Math.floor(randomSaxonIndex)
        const randomSaxon = this.saxonArmy[randomSaxonIndex]

        const damage = randomSaxon.receiveDamage(randomViking.strength)

        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonIndex, 1)
        }

        return damage

    }

    saxonAttack(){

        let randomVikingIndex = Math.random()*this.vikingArmy.length
        randomVikingIndex = Math.floor(randomVikingIndex)
        const randomViking = this.vikingArmy[randomVikingIndex]

        let randomSaxonIndex = Math.random()*this.saxonArmy.length
        randomSaxonIndex = Math.floor(randomSaxonIndex)
        const randomSaxon = this.saxonArmy[randomSaxonIndex]

        const damage = randomViking.receiveDamage(randomSaxon.strength)

        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomVikingIndex, 1)
        }

        return damage
    }

    showStatus(){

        if (this.vikingArmy.length == 0){
            
            return "Saxons have fought for their lives and survived another day..."

        }else if (this.saxonArmy.length == 0){

            return "Vikings have won the war of the century!"

        }else {

            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}

