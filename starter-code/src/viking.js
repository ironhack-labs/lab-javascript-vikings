// Soldier
class Soldier {
    constructor(health, strength){
        console.log("Creating a new soldier....")
        //"this" is the generic name you use to REFER TO THE OBJECT
        this.health = health;
        this.strength = strength;
    }
   attack(){
       return this.strength; 
   }
   receiveDamage(damage){
       this.health = this.health - damage;
    }
};

// Viking

class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength)
/*super equivaut à :
        this.health = health;
        this.strength = strength;*/
        this.name = name;
    };

    receiveDamage(damage){
        super.receiveDamage(damage);
        if (this.health > 0){
            return this.name + " has received " + damage + " points of damage";
        } 
         else  
        {
            return this.name + " has died in act of combat";
        }; 
        
    }
    battleCry(){
        return "Odin Owns You All!";
    }
};
//Saxon

class Saxon extends Soldier {
    constructor (health, strength) {
        super(health, strength)
    };

    receiveDamage(damage){
        if (this.health > 0){
            return "A Saxon has received " + damage + " points of damage";
        } 
         else  
        {
            return  + "A Saxon has died in combat";
        }; 
        
    }
};
//function Saxon() {}

// War
//function War() {}
