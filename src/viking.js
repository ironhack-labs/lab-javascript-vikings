// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.health;
    }

    receiveDamage(damage) {
        this.health =- damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health >= 1) {
            return `${this.name} has received DAMAGE points of damage`;
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health >= 1) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {}
