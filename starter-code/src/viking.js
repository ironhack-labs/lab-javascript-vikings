// Soldier
class Soldier {
    constructor (healthArg, strengthArg ) {
        this.health = healthArg;
        this.strength = strengthArg;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(d){
        this.health -= d;
    }
}

// Viking
class Viking extends Soldier {
    constructor (nameArg, health, strength) {
        super(health, strength);
        this.name = nameArg;
    }
    receiveDamage(d){
        if ((this.health - d) > 0) {
            this.health -= d;
             return `${this.name} has received ${d} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
        
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength);
    }
    receiveDamage(d){
        if ((this.health - d) > 0) {
            this.health -= d;
             return `A Saxon has received ${d} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {}
