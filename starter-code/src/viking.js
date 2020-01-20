// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(theDemage){
        this.health -= theDemage;
    }
}


// Viking

class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    receiveDamage(theDemage){
        this.health -= theDemage;
        if (this.health > 0){
            return(`${this.name} has received ${theDemage} points of damage`);
            }
        else {
            return(`${this.name} has died in act of combat`);
            }
        }

    battleCry(){
        return "Odin Owns You All!";
    }
}


// Saxon

class Saxon extends Soldier {
    receiveDamage(theDemage){
        this.health -= theDemage;
        if (this.health > 0){
            return(`A Saxon has received ${theDemage} points of damage`);
            }
        else {
            return(`A Saxon has died in combat`);
        }
    }
}


// War
class War {
    vikingArmy = [];
    saxonArmy = []; 

    addViking(viking){
        this.vikingArmy.unshift(viking);
    }

    addSaxon(saxon){
        this.saxonArmy.unshift(saxon);
    }

    vikingAttack(){
        
    }

    saxonAttack(){

    }
    
}
