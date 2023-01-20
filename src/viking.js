// Soldier
class Soldier {
    constructor(health, strength) {
        this.health= health;
        this.strength =strength;
    }
    attack() {
    return  this.strength;
    }
    receiveDamage(theDamage){
        this.health -= theDamage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }
    attack() {
    return  this.strength;
    }
    receiveDamage(theDamage){
        this.health -= theDamage;
        if (this.health> 0){
            return `${this.name} has received ${theDamage} points of damage`
        }
        else {
            return `${this.name} has died in act of combat`
        }
    } battleCry(){
        return "Odin Owns You All!"
    }
}



// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }
    receiveDamage(theDamage){
        this.health -= theDamage;
        if (this.health> 0){
            return `A Saxon has received ${theDamage} points of damage`
        }
        else {
            return `A Saxon has died in combat`
        }
} }

class War {
    constructor()
}

/* class
should receive 0 arguments
should assign an empty array to the vikingArmy property
should assign an empty array to the saxonArmy property
addViking() method
should be a declared
should receive 1 argument (a Viking object)
should add the received Viking to the army
shouldn't return anything
addSaxon() method
should be a declared
should receive 1 argument (a Saxon object)
should add the received Saxon to the army
shouldn't return anything */