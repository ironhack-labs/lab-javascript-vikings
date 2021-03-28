// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health
        this.strength = strength
    }
    attack(){
        return this.strength
    }
    receiveDamage(dam){
       this.health -= dam
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength) // Parent constructor
    this.name = name;
    }
   
    receiveDamage(dam){
        this.health -= dam
        if(this.health >= 1){
            return (`${this.name} has received ${dam} points of damage`)
        }
        if(this.health === 0){
            return (`${this.name} has died in act of combat`)
        }
    }
    battleCry(){
        return ('Odin Owns You All!');
    }

}

// Saxon
class Saxon extends Soldier{
    //no need of constructor because it inherite exactly the same from Soldier
    receiveDamage(dam){
        this.health -= dam
        if(this.health >= 1){
            return (`A Saxon has received ${dam} points of damage`)
        }
        if(this.health === 0){
            return (`A Saxon has died in combat`)
        }
    }
}

// War


 class War {
    constructor() { //WTH we dont need parameters???
        this.vikingArmy = [];
        this.saxonArmy =[];
    }

    addViking(vik){
        const viking = new Viking (vik.name, vik.health, vik.strength)
        this.vikingArmy.push(viking)
     }

    addSaxon(sax){
        const saxon = new Saxon (sax.health, sax.strength)
        this.saxonArmy.push(sax)

    }
    vikingAttack(){

    }
    saxonAttack(){

    }
    showStatus(){

    } 
} 