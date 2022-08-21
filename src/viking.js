// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }

    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        // should remove the received damage from the health property
        this.health -= damage

    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }

    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        // should return "NAME has received DAMAGE points of damage", if the Viking is still alive
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            // should return "NAME has died in act of combat", if the Viking dies
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [],
            this.saxonArmy = []
    }

    addViking(Viking) {
         this.vikingArmy.push(Viking)
    };
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    };
    
// BONUS: ITERATION 4

    vikingAttack() {};

    saxonAttack() {};
}

