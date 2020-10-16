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
        if (this.health <= 0) return `${this.name} has died in act of combat`;
        return `${this.name} has received ${damage} points of damage`;
    }

    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) return `A Saxon has died in combat`;
        return `A Saxon has received ${damage} points of damage`;
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(obj) {
        this.vikingArmy.push(obj);
    }

    addSaxon(obj) {
        this.saxonArmy.push(obj);
    }

    vikingAttack() {
        const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[saxonIndex];
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

        if ((randomSaxon.health - randomViking.strength) <= 0) this.saxonArmy.splice(saxonIndex, 1);

        return randomSaxon.receiveDamage(randomViking.strength);
    }

    saxonAttack() {
        const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomViking = this.vikingArmy[vikingIndex];
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        console.log(this.vikingArmy);
        if ((randomViking.health - randomSaxon.strength) <= 0) this.vikingArmy.splice(vikingIndex, 1);
        console.log(this.vikingArmy);
        return randomViking.receiveDamage(randomSaxon.strength);
    }

    showStatus() {
        if (!this.saxonArmy.length) { return "Vikings have won the war of the century!"; }
        if (!this.vikingArmy.length) { return "Saxons have fought for their lives and survived another day..."; }
        return "Vikings and Saxons are still in the thick of battle.";
    }
}
