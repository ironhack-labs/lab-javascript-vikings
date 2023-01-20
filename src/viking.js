// Soldier
class Soldier {
    constructor(health, strength) {
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
        super(health, strength) 
        this.name = name
    }
    receiveDamage(damage) {
        this.health -= damage
        if(this.health > 0){
            return (`${this.name} has received ${damage} points of damage`)
        }else {
            return (`${this.name} has died in act of combat`)
        }
    }
    battleCry(){
        return (`Odin Owns You All!`)
    }
}


// Saxon
class Saxon extends Soldier {

    constructor (health, strength){
        super(health, strength)
    }
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return (`A Saxon has received ${damage} points of damage`)
        } else {
            return (`A Saxon has died in combat`)
        }
    }

}

// War
class War {
    vikingArmy = []
    saxonArmy =[]
    
    addViking(viking ){
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    vikingAttack(){
        //We choose a random viking and a random saxon from each of our armys
        const randomNumber = Math.floor(Math.random() * (this.saxonArmy.length - 1))
        const randomSaxon = this.saxonArmy[randomNumber]
        const randomViking = this.vikingArmy[Math.floor(Math.random() * (this.vikingArmy.length - 1))]
        //We figure out the strength of the chosen viking
        const vikingStrength = randomViking.strength
        // We attack the chosen saxon
        randomSaxon.receiveDamage(vikingStrength)
        // If after the attack the saxon dead we take it out of the Saxon Army    
         if (randomSaxon.health <= 0){
             this.saxonArmy.splice(randomNumber, 1)
            }
        
        return "A Saxon has died in combat"
    }
    saxonAttack() {
        //We choose a random saxon and a random viking from each of our armys
        const randomNumber = Math.floor(Math.random() * (this.vikingArmy.length - 1))
        const randomViking = this.vikingArmy[randomNumber]
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * (this.saxonArmy.length - 1))]
        //We figure out the strength of the chosen viking
        const saxonStrength = randomSaxon.strength
        // We attack the chosen saxon
        randomViking.receiveDamage(saxonStrength)
        // If after the attack the saxon dead we take it out of the Saxon Army

        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomNumber, 1)
        }
        return (`${randomViking.name} has received ${randomSaxon.strength} points of damage`)
    }
    showStatus(){
        if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!"
        }
        if (this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day..."
        }
        if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1){
            return "Vikings and Saxons are still in the thick of battle."
        }
    }

    
}

   
