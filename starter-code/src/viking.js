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
        if (this.health <= 0) {
            return this.name + " has died in act of combat"
        }
        return this.name + " has received " + damage + " points of damage";
    }

    battleCry() {
        return 'Odin Owns You All!';
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            return "A Saxon has died in combat";
        }
        return "A Saxon has received " + damage + " points of damage";
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
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        const res = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
        if (this.saxonArmy[randomSaxon].health <= 0) {
            this.saxonArmy.splice(this.saxonArmy[randomSaxon], 1);
        }
        return res;
    }

    saxonAttack() {
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        const res = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
        if (this.vikingArmy[randomViking].health <= 0) {
            this.vikingArmy.splice(this.vikingArmy[randomViking], 1);
        }
        return res;
    }

    showStatus() {
        if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) {
            return "Vikings and Saxons are still in the thick of battle.";
        }
        if (!this.saxonArmy.length) {
            return "Vikings have won the war of the century!";
        }
        if (!this.vikingArmy.length) {
            return "Saxons have fought for their lives and survive another day...";
        }
    }
}