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
        this.damage = damage;
        this.health -= this.damage;
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
        this.damage = damage;
        this.health -= this.damage;
        if (this.health > 0) {
            return `${this.name} has received ${this.damage} points of damage`;
        }
        return `${this.name} has died in act of combat`;
    }

    battleCry() {
        return "Odin Owns You All!";
    }
}
// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.damage = damage;
        this.health -= this.damage;
        if (this.health > 0) {
            return `A Saxon has received ${this.damage} points of damage`;
        }
        return `A Saxon has died in combat`;
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }

    vikingAttack() {
        let healthSaxon = this.saxonArmy[0].receiveDamage(
            this.vikingArmy[0].strength
        );
        if (this.saxonArmy[0].health <= 0) {
            this.saxonArmy.splice(this.saxonArmy[0], 1);
        }
        return healthSaxon;
    }
    saxonAttack() {
        let healthViking = this.vikingArmy[0].receiveDamage(
            this.saxonArmy[0].strength
        );
        if (this.vikingArmy[0].health <= 0) {
            this.vikingArmy.splice(0, 1);
        }
        return healthViking;
    }
    showStatus() {
        if (this.saxonArmy.length == 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length == 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
            return "Vikings and Saxons are still in the thick of battle."

        }
    }
}