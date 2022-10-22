// Soldier
class Soldier {
    constructor (health, strength){
        
this.health = health;
this.strength = strength;

}

attack() {
  return this.strength;
    
}

receiveDamage(theDamage) {
    this.health = this.health - theDamage;



}

    }


// Viking
class Viking extends Soldier {
    constructor(health, strength, name){
        super (name);
     
        
        
        
    }
    
    
    
}






// Saxon
class Saxon {}

// War
class War {}
