// Soldier
class Soldier {
    constructor(health,strength){
        this.health= health
        this.strength= strength
    }

    attack(){
        return this.strength
    }


    receiveDamage(damage){
        this.health-=damage
    }   

}


class Viking extends Soldier {
    constructor (name,health,strength){
        super (health, strength)
        this.name = name
    }


    receiveDamage(damage){
        this.health-=damage
        
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        } else {return `${this.name} has died in act of combat`
    }

    }
 
    battleCry() {
        return "Odin Owns You All!"
    }

}


class Saxon extends Soldier{
    constructor (health,strength){
      super(health,strength)
     }

    
    
    receiveDamage(damage){
        this.health-=damage
    
    
    if (this.health>0){
        return `A Saxon has received ${damage} points of damage`
    } else {return `A Saxon has died in combat` }

}

}

class War {
    constructor(){
        this.vikingArmy=[]
        this.saxonArmy=[]
    }
   

    addViking(viking){
        this.vikingArmy.push(viking)}

    
    addSaxon(saxon){
       this.saxonArmy.push(saxon)}

    
    vikingAttack(){
        let iSaxRan = Math.floor(Math.random(0,this.saxonArmy.length)*this.saxonArmy.length)
        let iVikRan = Math.floor(Math.random(0,this.vikingArmy.length)*this.vikingArmy.length)

        let ranSaxon = this.saxonArmy[iSaxRan];
        let ranViking = this.vikingArmy[iVikRan];
        
        let resultado= ranSaxon.receiveDamage(ranViking.strength)

        if (ranSaxon.health <= 0 ) {
             resultado = "A Saxon has died in combat";
             this.saxonArmy.splice(iSaxRan,1)
        }
        return resultado
    }


    saxonAttack() {

        let iSaxRan = Math.floor(Math.random(0,this.saxonArmy.length)*this.saxonArmy.length)
        let iVikRan = Math.floor(Math.random(0,this.vikingArmy.length)*this.vikingArmy.length)

        let ranSaxon = this.saxonArmy[iSaxRan];
        let ranViking = this.vikingArmy[iVikRan];
        
        let resultado= ranViking.receiveDamage(ranSaxon.strength)

        if (ranViking.health <= 0 ) {
             resultado = "A Viking has died in combat";
             this.vikingArmy.splice(iVikRan,1)
        }
        return resultado
    }


    showStatus() {

        if (this.saxonArmy.length===0) {

            return "Vikings have won the war of the century!"
        
        } else if (this.vikingArmy.length===0) {

            return "Saxons have fought for their lives and survived another day..."

        } else if (this.saxonArmy.length===this.vikingArmy.length) {

            return "Vikings and Saxons are still in the thick of battle."
        
        }



    }


















}




    

