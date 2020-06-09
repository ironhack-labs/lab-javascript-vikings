// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength; 
    }
    attack() {
        return this.strength;
    }
    receiveDamage (damage) {
        this.health -= damage;   
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    attack() {
        console.log(`attack`)
    }
    battleCry() {
        return (`Odin Owns You All!`);
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
    if (this.health > 0) {
        return (`${this.name} has received ${this.damage} points of damage`);
    }
    else {
        return (`${this.name} has died in act of combat`);
    }
}

// Saxon
class Saxon extends Soldier {
    
    receiveDamage(damage) {
        this.health -= damage;
    }
    attack() {
        console.log(`attack`);

    }
    receiveDamage(damage) {
        this.health -= damage;
    

    if (this.health > 0) {
        return (`A Saxon has received DAMAGE points of damage`);
    }
    else {
        return (`A Saxon has died in combat`);
    }

}
}
