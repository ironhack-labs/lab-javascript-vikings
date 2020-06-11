// Soldier

class Soldier {
    constructor(health, strength){
        this.health = health; 
        this.strength = strength;
    }
    attack () {
       return this.strength;
    }; 
    receiveDamage(damage) {
       return this.health -= damage;
    };
}


// Viking
class Viking extends Soldier {
    constructor(name,health, strength){
        super(health, strength);
        this.name = name;
    }

    Viking.attack = function() {
        return this.strength;
    } 

    receiveDamage(damage) {
        return this.health -= damage;
         if (this.health > 0){
            return`${this.name} has recieved ${this.damage} points of damage`;
        } 
        if (this.health <= 0){
            return `${this.name} has died in the act of combat`;
        }
    }
};

battleCry () {
    return ("Odin Owns You All!");
}




// Saxon
class Saxon extends Soldier {
    // constructor (health, strength){
    //     super(heath, strength);
        
}

Saxon.attack = function() {
     console.log(`${this.strength}`);
} 
Saxon.receiveDamage = function(theDamage){
    this.health -= damage;
    if (this.health > 0){
        console.log(`A Saxon has recieved ${this.damage} points of damage`);
    } 
    if (this.health <= 0){
        console.log(`A Saxon has died in combat`)
    }
}

// War
class War {
    constructor();
        vikingArmy = [];
        saxonArmy = [];
        
    addViking(){
        this.vikingArmy.push(viking);
    }  
    addSaxon(){
        this.saxonArmy.push(saxon);
    }
    vikingAttack(){

    }
    saxonAttack(){

    }
    showStatus(){

    }
};
