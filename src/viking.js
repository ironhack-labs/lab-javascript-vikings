// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    };
    receiveDamage(damage) {   
        this.health-=damage; 
    }
}

const newSoldier = new Soldier (2, 4);


// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health-=damage; 
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return "Odin Owns You All!";
    }
}

const viking = new Viking ("Ansgar", 3, 7);

// Saxon
class Saxon extends Soldier {
    constructor (health, strength) {
        super(health, strength);
    }
    receiveDamage(damage) {
        this.health-=damage; 
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
        else {
            return `A Saxon has died in combat`;
        }
    }
}

