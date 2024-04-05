
// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength; // return Soldier.strength
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
}

// Viking
class Viking extends Soldier {
   constructor(name, health, strength) {
       super(health, strength);
        this.name = name;
    }
     battleCry = function(){
        return `Odin Owns You All!`
     }
}

// Saxon Por qué este si lo acepta todo y vikings no?
class Saxon extends Soldier {}

// War
class War {}

