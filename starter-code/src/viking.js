// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    };

    attack() {
       return this.strength;
    };

    receiveDamage(theDamage) {
        this.health = this.health - theDamage;
    };
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength) {
        this.name = name;
        super(health, strength);
    };

    receiveDamage(theDamage) {
        this.health = this.health - theDamage;
        if (this.health > 0){
            return `${this.name} has received ${theDamage} points of damage`
        }
        else {
            return `${this.name} has died in act of combat`
        }
        
    }    

    battleCry () {
        return "Odin Owns You All!!!"
    }
}

// Saxon
class Saxon {}

// War
class War {}