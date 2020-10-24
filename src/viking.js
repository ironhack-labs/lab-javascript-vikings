// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
     }
    attack(){
         return this.strength;
    }
    receiveDamage(damage){      
     }
    }

// Viking
class Viking extends Soldier {
     constructor(name, health, strength){
         super(health, strength);
         this.name = name;
     }
     attack(){
         return this.strength;
     }
     receiveDamage(damage){
         
    }  
    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
     constructor(health, strength){
         super(health, strength);
     }
    
     attack(){
         return this.strength;
     }

}

// War
class War {
    
}
