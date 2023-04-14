// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }

    receiveDamage(theDamage){
        this.health -= theDamage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    

    }

    receiveDamage(theDamage){
        this.health -= theDamage;
        if(this.health <= 0) return  `${this.name} has died in act of combat`;
        return `${this.name} has received ${theDamage} points of damage`;
    }

    battleCry(){
        return ("Odin Owns You All!");
    }
}

// Saxon
class Saxon extends Soldier {

    receiveDamage(theDamage){
        this.health -= theDamage;
        if(this.health <= 0) return  ("A Saxon has died in combat");
        return `A Saxon has received ${theDamage} points of damage`;
    }}

// War
class War {}
