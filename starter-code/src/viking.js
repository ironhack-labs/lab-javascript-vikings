// Soldier
class Soldier {
    constructor(healthArg, strengthArg){
        this.health = healthArg;
        this.strength = strengthArg;
       
    } 
     attack(){
    return this.strength;}

    receiveDamage(damage){
        
        this.health = this.health - damage
    
    }
 }
    


// Vikings
class Viking {}

// Saxon
class Saxon {}

// War
class War {}
