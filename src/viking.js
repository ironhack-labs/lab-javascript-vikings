// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health
        this. strength = strength

    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health = this.health - damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super();
        this.name = name
        this.health = health
        this.strength = strength
    }

    receiveDamage(damage){
        this.health = this.health - damage
        if(this.health <= 0){
            return `${this.name} has died in act of combat`
        }else{
            return `${this.name} has received ${damage} points of damage`
        }
    }
    battleCry(){
        return "Odin Owns You All!"
    }


}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage){
        this.health = this.health - damage
        if(this.health <= 0){
            return `A Saxon has died in combat`
        }else{
            return `A Saxon has received ${damage} points of damage`
        }
    }


}


// War
class War {
    constructor(){
    this.vikingArmy = []
    this.saxonArmy = []
}

    addViking(vikingObject){
        this.vikingArmy.push(vikingObject)

    }
    addSaxon(saxonObject){
        this.saxonArmy.push(saxonObject)

    }

    vikingAttack(){

            let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
            let randomViking = Math.floor(Math.random() * this.vikingArmy.length)
            let saxon = this.saxonArmy[randomSaxon]
            let viking = this.vikingArmy[randomViking]
       
            let saxonHealth = saxon.receiveDamage(viking.strength)

            if(saxon.health <= 0){
                this.saxonArmy.splice(saxon)
            }

            return saxonHealth
        
    }
    saxonAttack(){
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length)
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        let saxon = this.saxonArmy[randomSaxon]
        let viking = this.vikingArmy[randomViking]
   
        let vikingHealth = viking.receiveDamage(saxon.strength)

        if(viking.health <= 0){
            this.vikingArmy.splice(viking)
        }

        return vikingHealth
    

    }
    showStatus(){
        if(!this.vikingArmy.length){
            return 'Saxons have fought for their lives and survived another day...'
        }else if (!this.saxonArmy.length){
            return 'Vikings have won the war of the century!'
        }else {
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }
}
