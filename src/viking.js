// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health,
        this.strength = strength
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
        super.receiveDamage(damage);
        if(this.health <= 0) {
            return `${this.name} has died in act of combat`;
        } else {
            return `${this.name} has received ${damage} points of damage`;
        }
    }

    battleCry() {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }

    receiveDamage(damage) {
        super.receiveDamage(damage);
        if(this.health <= 0) {
            return `A Saxon has died in combat`;
        } else {
            return `A Saxon has received ${damage} points of damage`;
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
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }

    vikingAttack() {
        let randomVIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSIndex = Math.floor(Math.random() * this.saxonArmy.length);

        let saxonDamage = this.saxonArmy[randomSIndex].receiveDamage(this.vikingArmy[randomVIndex].strength);

        if(this.saxonArmy[randomSIndex].health <= 0) {
            this.saxonArmy.splice(randomSIndex, 1);
        }

        return saxonDamage;
    }

    saxonAttack() {
        let randomVIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSIndex = Math.floor(Math.random() * this.saxonArmy.length);

        let vikingDamage = this.vikingArmy[randomVIndex].receiveDamage(this.saxonArmy[randomSIndex].strength);

        if(this.vikingArmy[randomVIndex].health <= 0) {
            this.vikingArmy.splice(randomVIndex, 1);
        }

        return vikingDamage;
    }

    showStatus() {
        if(this.saxonArmy.length <= 0) {
            return `Vikings have won the war of the century!`;
        } else if(this.vikingArmy.length <= 0) {
            return `Saxons have fought for their lives and survived another day...`;
        } else {
            return `Vikings and Saxons are still in the thick of battle.`;
        }
    }
}

