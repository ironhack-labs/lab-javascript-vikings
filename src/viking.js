// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    battleCry() {
        return "Odin Owns You All!"
    }
    receiveDamage (damage) {
        this.health -= damage
        if(this.health) {
            return `${this.name} has received ${damage} points of damage`;
        }
        if(!this.health) {
            return `${this.name} has died in act of combat`;
        }
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }
    receiveDamage (damage) {
        this.health -= damage
        if(this.health) {
            return `A Saxon has received ${damage} points of damage`;
        }
        if(!this.health) {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {}
