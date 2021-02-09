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
        damage = 50;
        this.health = this.health - 50;
    }
}


// Viking
class Viking {
    constructor(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        
    }
    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        damage = 50;
        this.health = this.health - 50;
        if (this.health > 0) {
            console.log(`"${this.name} has received ${damage} points of damage"`)
        } else console.log(`"${this.name} has died in act of combat"`);
    }
    battleCry() {
        return "Odin Owns You All!";
    }
       
}


// Saxon
class Saxon {}

// War
class War {}
