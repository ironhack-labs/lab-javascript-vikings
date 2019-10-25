// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    };
    receiveDamage(thedamage) {
        this.health = this.health - thedamage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    };
    receiveDamage(thedamage) {
        this.health = this.health - thedamage;
        if (this.health > 0) {
            return `${this.name} has received ${thedamage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    };
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(thedamage) {
        this.health = this.health - thedamage;
        if (this.health > 0) {
            return `A Saxon has received ${thedamage} points of damage`
        } else {
            return "A Saxon has died in combat";
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    };
    addViking(Viking) {
        this.vikingArmy.push(Viking);
    };
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    };
    vikingAttack() {
        let indexRandomViking = Math.floor(Math.random() * this.vikingArmy.length);
        let indexRandomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let randomViking = this.vikingArmy[indexRandomViking];
        let randomSaxon = this.saxonArmy[indexRandomSaxon];
        let result = randomSaxon.receiveDamage(randomViking.strength);
        if (randomSaxon.health <= 0) { this.saxonArmy.splice(indexRandomSaxon, 1) }
        return result;
        // should return result of calling receiveDamage() of a Saxon with the strength of a Viking
    };
    saxonAttack() {
        let indexRandomViking = Math.floor(Math.random() * this.vikingArmy.length);
        let indexRandomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let randomViking = this.vikingArmy[indexRandomViking];
        let randomSaxon = this.saxonArmy[indexRandomSaxon];
        let result = randomViking.receiveDamage(randomSaxon.strength);
        if (randomViking.health <= 0) { this.vikingArmy.splice(indexRandomViking, 1) }
        return result;
    };

    showStatus () {
        if (!this.saxonArmy.length) {
            return "Vikings have won the war of the century!";
        } else if (!this.vikingArmy.length) {
            return "Saxons have fought for their lives and survive another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
