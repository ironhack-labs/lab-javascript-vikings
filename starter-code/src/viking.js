// Soldier

class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
       return this.strength; 
    }   

    receiveDamage(damage) {
        this.health = this.health - damage;  
    }
};


// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage){
        this.health = this.health - damage; 
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        else {
            return `${this.name} has died in act of combat`;
        }
    };
    
    battleCry(){
        return "Odin Owns You All!";

    }
}



class Saxon extends Soldier {
    constructor(health, strength) {
    super (health, strength);
}




receiveDamage(damage){
    this.health = this.health - damage; 
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
        else {
            return "A Saxon has died in combat";
        }
    };
}

// War
class War {
    constructor (){
        this.vikingArmy = [];
        this.saxonArmy = [];
            };
        
            

    addViking(viking) {
        this.vikingArmy.push(viking);
    }


    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        let x=[Math.floor(Math.random() * this.saxonArmy.length)];
        let y=[Math.floor(Math.random() * this.vikingArmy.length)];
         let test = this.saxonArmy[x].receiveDamage(this.vikingArmy[y].strength);
        if(this.saxonArmy[x].health<=0){
            this.saxonArmy.splice(x,1);
        }
      return test;
 
    };

   


    saxonAttack() {
        let x=[Math.floor(Math.random() * this.saxonArmy.length)];
        let y=[Math.floor(Math.random() * this.vikingArmy.length)];
         let test = this.vikingArmy[x].receiveDamage(this.saxonArmy[y].strength);
        if(this.vikingArmy[x].health<=0){
            this.vikingArmy.splice(x,1);
        }
      return test;
    }


    showStatus() {
        if(this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        }
        else if(this.vikingArmy.length === 0) {
            return  "Saxons have fought for their lives and survive another day..." 
        }
        else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}

