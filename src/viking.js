// Soldier
class Soldier {
    constructor (health, strength){
        this.health = health;
        this.strength = strength;

    };

    attack() {
        return this.strength;
    }

    receiveDamage(theDamage) {
       this.health -= theDamage;

    }

}



// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(name, health, strength);
        this.name = name;
        this.health = health;
        this.strength = strength;
    }

   receiveDamage(theDamage){


    super.receiveDamage(theDamage);
    
    if(this.health > 0){
        return  `${this.name} has received ${theDamage} points of damage`;
    }else{
        return `${this.name} has died in act of combat`;
    }
   }

   battleCry (){
       let odin = "Odin Owns You All!";
       return odin;
   }
}

// Saxon
class Saxon extends Soldier{
    
    receiveDamage(theDamage){

        super.receiveDamage(theDamage);

        if(this.health > 0){
            return `A Saxon has received ${theDamage} points of damage`;
        
        }else{
            return "A Saxon has died in combat";
        }

    }
}

// War
class War {
    addViking(viking){
        this.vikingArmy.push(viking);
    };
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    };
    vikingAttack(){
       if(attack(this.viking) === true){
           this.saxon.receiveDamage(theDamage);
       
       }
       
    };
    saxonAttack(){
       
    };
    showStatus(){};

    vikingArmy = [];
    saxonArmy = [];
}
