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
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(health, strength, name) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
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
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
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
        let saxonRandom = Math.floor(Math.random() * this.saxonArmy.length);
        let vikingRandom = Math.floor(Math.random() * this.vikingArmy.length);

        this.Saxon[saxonRandom].receiveDamage(
            this.Viking[vikingRandom].strength
        );
        if (this.Saxon[saxonRandom].health <= 0) {
            Saxon.slice(saxonRandom, 1);
        }
        return receiveDamage(this.Viking[vikingRandom].strength);
    }
    saxonAttack() {
        let saxonRandom = Math.floor(Math.random() * this.saxonArmy.length);
        let vikingRandom = Math.floor(Math.random() * this.vikingArmy.length);

        this.Viking[vikingRandom].receiveDamage(
            this.Saxon[saxonRandom].strength
        );
        if (this.Viking[vikingRandom].health <= 0) {
            Viking.slice(vikingRandom, 1);
        }
        return receiveDamage(this.Viking[vikingRandom].strength);
    }
    showStatus() {}
}
