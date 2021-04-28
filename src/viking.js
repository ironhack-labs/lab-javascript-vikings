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
        this.health = this.health - damage
        return 
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength){
        super (health, strength);
        this.name = name
    }
    
    receiveDamage(damage){
        this.health = this.health - damage
        if (this.health > 0){
            return (`${this.name} has received ${damage} points of damage`)
        } else {
            return (`${this.name} has died in act of combat`)
        }  
    }
    battleCry(){
        return (`Odin Owns You All!`)
    }

}

// Saxon
class Saxon extends Soldier {
    
    receiveDamage(damage){
        this.health = this.health - damage
        if (this.health > 0){
            return (`A Saxon has received ${damage} points of damage`)
        } else {
            return (`A Saxon has died in combat`)
        }  
    }
}

// War
class War {
    constructor (){
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking (viking){
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }
    vikingAttack(){

        const positionSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        const positionViking = Math.floor(Math.random() * this.vikingArmy.length) 
        const randomSaxon = this.saxonArmy[positionSaxon]
        const randomViking = this.vikingArmy[positionViking]

        let result = randomSaxon.receiveDamage(randomViking.strength)

        if(randomSaxon.health<=0){
            this.saxonArmy.splice(positionSaxon , 1)
        }
        return result
        
    }
    saxonAttack(){

        const positionSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        const positionViking = Math.floor(Math.random() * this.vikingArmy.length) 
        const randomSaxon = this.saxonArmy[positionSaxon]
        const randomViking = this.vikingArmy[positionViking]

        let result = randomViking.receiveDamage(randomSaxon.strength)

        if(randomViking.health<=0){
            this.vikingArmy.splice(positionViking , 1)
        }
        return result
        
    }

    /* Intentando el BONUS

    warAttack(){
        function getRandomPosition (arr){
            return Math.floor(Math.random() * arr.length)
        }

        function getRandomSoldier (element){
            return element.getRandomPosition()
        }

        const randomSaxon = getRandomSoldier(this.saxonArmy);
        const randomViking = getRandomSoldier(this.VikingArmy);
    }

    
    */ 

    showStatus(){
        if (this.saxonArmy.length === 0){
            return `Vikings have won the war of the century!`
        } else if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`
        } else if (this.vikingArmy.length >= 1 || this.saxonArmy.length >= 1) { 
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }
}
