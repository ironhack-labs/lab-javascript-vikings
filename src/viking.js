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
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return (`${this.name} has received ${damage} points of damage`);
        } else {
            return (`${this.name} has died in act of combat`);
        }
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return (`A Saxon has received ${damage} points of damage`);
        } else {
            return (`A Saxon has died in combat`);
        }
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
        this.randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        this.randomSaxon = this.saxonArmy[this.randomSaxonIndex];
        this.damageDealt = this.vikingArmy[0].strength;
        this.result = this.randomSaxon.receiveDamage(this.damageDealt);
        if (this.randomSaxon.health <= 0) {
            this.saxonArmy.splice(this.randomSaxonIndex, [1]);
        }

        return this.result;
    }
    saxonAttack() {
        this.randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        this.randomViking = this.vikingArmy[this.randomVikingIndex];
        this.damageDealt = this.saxonArmy[0].strength;
        this.result = this.randomViking.receiveDamage(this.damageDealt);
        if (this.randomViking.health <= 0) {
            this.vikingArmy.splice(this.randomVikingIndex, [1]);
        }
        return this.result;
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`
        } else if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`
        } else {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }
}
