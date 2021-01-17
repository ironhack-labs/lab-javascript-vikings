// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength
    };
    receiveDamage(damage) {
        this.health -= damage;
    };
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        super.receiveDamage(damage);
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
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    vikingAttack() {
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        const indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        const attackedSaxon = this.saxonArmy[indexSaxon];

        const result = attackedSaxon.receiveDamage(randomViking.attack());

        if (attackedSaxon.health <= 0) {
            this.saxonArmy.splice(indexSaxon, 1)
        }

        return result;
    }
    saxonAttack() {
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        const indexViking = Math.floor(Math.random() * this.vikingArmy.length);
        const attackedSaxon = this.vikingArmy[indexViking];

        const result = attackedSaxon.receiveDamage(randomSaxon.attack());

        if (attackedSaxon.health <= 0) {
            this.vikingArmy.splice(indexViking, 1)
        }

        return result;
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        }
        if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        }
        if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
