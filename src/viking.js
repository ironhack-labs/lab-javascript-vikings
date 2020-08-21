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
class Viking extends Soldier{

    constructor(name,health,strength){

        super(health, strength)
        this.name = name

    }

    receiveDamage(damage){
        let vickingDamage = (this.health -= damage) 

        let messageDamage = ""

        if(vickingDamage > 0){

            messageDamage = (`${this.name} has received ${damage} points of damage`)

        }else{
            messageDamage = (`${this.name} has died in act of combat`)
        }   
        return messageDamage
    

    }

    battleCry(){

    return "Odin Owns You All!"
    
    }

}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage){

        let saxonDamage = (this.health -= damage) 

        let messageDamage = ""

        if(saxonDamage > 0){

            messageDamage = (`A Saxon has received ${damage} points of damage`)

        }else{
            messageDamage = (`A Saxon has died in combat`)
        }   
        return messageDamage

    }

}

// War
class War {

    constructor (){

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

        let randomNumberViking = Math.floor(Math.random() * this.vikingArmy.length)
        let randomNumberSaxon = Math.floor(Math.random() * this.saxonArmy.length)


        let randomViking = this.vikingArmy[randomNumberViking]
        let randomSaxon = this.saxonArmy[randomNumberSaxon]
        
        let message = randomSaxon.receiveDamage(randomViking.strength)
        
        if(randomSaxon.health <= 0){
        
            let index=randomSaxon[randomNumberSaxon]
            this.saxonArmy.splice(index,1)
            
        } 

        return message
    }    

    saxonAttack(){

        let randomNumberViking = Math.floor(Math.random() * this.vikingArmy.length)
        let randomNumberSaxon = Math.floor(Math.random() * this.saxonArmy.length)

        let randomViking = this.vikingArmy[randomNumberViking]
        let randomSaxon = this.saxonArmy[randomNumberSaxon]
        
        let message = randomViking.receiveDamage(randomSaxon.strength)
        
        if(randomViking.health <= 0){
        
            let index=randomViking[randomNumberViking]   
            this.vikingArmy.splice(index,1)
            
        } 

        return message

    }

    showStatus(){
    
        if(this.saxonArmy.length === 0){
        
            return "Vikings have won the war of the century!"

        }else if (this.vikingArmy.length === 0){

            return "Saxons have fought for their lives and survived another day..."

        }else{
            
            return "Vikings and Saxons are still in the thick of battle."

        }



    }









}
