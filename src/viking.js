// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    };
    receiveDamage(damage) {
        this.damage = damage;
        this.health -= this.damage;

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
            return `${this.name} has received ${this.damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `A Saxon has received ${this.damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
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
        this.saxonArmy.push(saxon);
    }
    vikingAttack() {
        const randomViking = this.vikingArmy[getRandom(this.vikingArmy.length)];
        const randomSaxon = this.saxonArmy[getRandom(this.saxonArmy.length)];
        const damage = randomViking.strength;

        const message = randomSaxon.receiveDamage(damage);
        if (randomSaxon.health <= 0) {
            this.saxonArmy.pop(randomSaxon);
        }
        return message;
    }

    saxonAttack() {
        const randomViking = this.vikingArmy[getRandom(this.vikingArmy.length)];
        const randomSaxon = this.saxonArmy[getRandom(this.saxonArmy.length)];
        const damage = randomSaxon.strength;

        const message = randomViking.receiveDamage(damage);
        if (randomViking.health <= 0) {
            this.vikingArmy.pop(randomViking);
        }
        return message;
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        }
        else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        }
        else if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}

function getRandom(max) {
    return Math.floor(Math.random() * max);
}

