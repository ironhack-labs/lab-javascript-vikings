// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    ReceiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    ReceiveDamage(damage) {
        super.ReceiveDamage(damage);
        if (this.health <= 0) {
            return `${this.name} has dies in act of combat`;
        } else {
            return `${this.name} has received DAMAGE points of damage`;
        }
    }
    battleCry() {
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }
    ReceiveDamage(damage) {
        super.ReceiveDamage(damage);
        if (this.health <= 0) {
            return `A Saxon has died in combat`;
        } else {
            return `A Saxon has received ${damage} points of damage`;
        }
    }
}

// War
class War {
    constructor(health, strength) { }
}


