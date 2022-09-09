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
      this.health -= damage;       
    }    
}

// Viking
class Viking extends Soldier {
    constructor(name,health,strength){
        super(helth, strength)
        this.name = name;
    }
    receiveDamage(damage){
        this.receiveDamage(damage);
        if(this.health > 0)
            console.log(`${this.name} has received ${damage} points of damage`);
        else
            console.log(`${this.name} has died in act of combat`);    
    }
    battleCry(){
        return "Odin Owns You All"
    }

    
    
}

// Saxon
class Saxon {}

// War
class War {}
