// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health
        this.strength = strength
    }

    attack(){
        return this.strength
    }

    receiveDamage(damage){
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health,strength)
        this.name = name
    }

    receiveDamage (damage){
        if ((this.health -= damage) > 0){
            return `${this.name} has received ${damage} points of damage`
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
    receiveDamage(damage){
        if ((this.health -= damage) > 0){
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {

    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(vikingSoldier){
        this.vikingArmy.push(vikingSoldier)

    }
    addSaxon(saxonSoldier){
        this.saxonArmy.push(saxonSoldier)
    }
    vikingAttack(){

        const randomVikingIndex =  Math.floor(Math.random() * this.vikingArmy.length)
        let randomViking = this.vikingArmy[randomVikingIndex]

        const randomSaxonIndex =  Math.floor(Math.random() * this.saxonArmy.length)
        let randomSaxon = this.saxonArmy[randomVikingIndex]

        if((randomSaxon.health -= randomViking.strength) > 0){
            return randomSaxon.receiveDamage(randomViking.strength)
        } else{
            this.saxonArmy.splice(randomSaxonIndex,1)
        }
    }
    saxonAttack(){

    }
    showStatus(){

    }
}


