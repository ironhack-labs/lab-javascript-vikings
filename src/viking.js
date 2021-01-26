// Soldier
class Soldier {
    constructor(health, strength) {
        

        this.health = health;
        this.strength = strength;

        
    }

    attack (){
        return this.strength
    }
    
    receiveDamage (theDamage){
        this.health -= theDamage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength)
        this.name = name;
    }

    receiveDamage (theDamage){
        super.receiveDamage()
        if(this.health > 0){
          return  "${this.name} has received ${this.TheDamage} points of damage"
        }
    }

    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon {}

// War
class War {}
