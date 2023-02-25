// Soldier
class Soldier {
    
    constructor(health, strength){
        this.health = health;
        this.strength = strength
    
        }
    attack(){
       return this.strength
    }

    receiveDamage(damage){
        this.health -= damage
        }   
    };
  

    
  


// Viking
class Viking extends Soldier {
    constructor(name,health,strength){
        super(health,strength)
        this.name = name


    }
    receiveDamage(damage){
        this.health -= damage
        }
        if(health = 0){
            return `${Viking.name} has died in act of combat`
        }
        
        }
    

// Saxon
class Saxon {}

// War
class War {}
