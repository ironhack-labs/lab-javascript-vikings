// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(theDamage){
        this.theDamage = theDamage
        this.health += (this.health - theDamage)
            }
};

// Viking
class Viking extends Soldier{
    constructor(name, health, strength,) {
        super(health, strength);
    this.name = name;
    }
    receiveDamage(theDamage){
    this.health += this.health - theDamage
        if (this.health > 0) {
    console.log(`${this.name} has received ${this.theDamage} points of damage`)
    } else (this.health === 0){
    console.log(`${this.name} has died in act of combat`) 
    } 
    }
    battleCry(){
        return 'Odin Owns You All!'
    }
    };
    
// Saxon
class Saxon {}

// War
class War {}
