// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health,
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
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }

    receiveDamage(damage){
        this.health -= damage

        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry(){
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health -= damage

        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
}
}

// War
class War {
    constructor () {
        this.vikingArmy = [],
        this.saxonArmy = []
    }

    addViking(viking){
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }

    // --------------------------------------------------------------------------

    getRandomViking(){
        const randomIndex = Math.floor(Math.random() * this.vikingArmy.length)
        return this.vikingArmy[randomIndex]
    }
    
    getRandomSaxon(){
        const randomIndex = Math.floor(Math.random() * this.saxonArmy.length)
        return this.saxonArmy[randomIndex]
    }
    
     // --------------------------------------------------------------------------
    
    vikingAttack(){


    /*  let randomViking = getRandomViking();
        let randomSaxon = getRandomSaxon();

        randomSaxon.receiveDamage(randomViking.strength)

        if (randomSaxon.health < 0) {
            return this.saxonArmy.pop(randomSaxon)
        } else {
            return `${randomViking.strength}`
        } */
    }

    saxonAttack(){

    }

    showStatus(){

    }


}
