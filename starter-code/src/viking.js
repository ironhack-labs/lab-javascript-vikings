// Soldier
class Soldier {
    constructor (health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    attack (){
        return this.strength;
    }
    receiveDamage (theDamage){
        this.heath -= theDamage;
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(theDamage){
        if(this.health > 0){
            this.health -= theDamage;
            return `${this.name} has received ${theDamage} points of damage`;
        }else {
            return `${this.name} has died in act of combat`;
        } 
    }
   
    battleCry(){
        return 'Odin owns you all!'

    }

}


// Saxon
class Saxon extends Soldier {
    receiveDamage(theDamage){
        if(this.health < 0){
            this.health -= theDamage;
            return `A Saxon has received ${theDamage} points of damage`;
        }else{
            return `A saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
    }
}
class Soldier {}

// Viking
class Viking {}

// Saxon
class Saxon {}

// War
class War {}
