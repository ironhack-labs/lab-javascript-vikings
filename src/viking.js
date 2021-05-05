// Soldier
class Soldier {
    constructor (health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack () {
       return this.strength = 150;
    }
    receiveDamage (theDamage){
         this.health -= theDamage;
             
    }   
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    receiveDamage(theDamage){
        this.health -= theDamage;
        if (this.health > 0){
            return `${this.name} has received ${theDamage} points of damage`;
        }
        else ( this.health <= 0)
            return `${this.name} has died in act of combat`;
        
        
    }
}

// Saxon
class Saxon {}

// War
class War {}
