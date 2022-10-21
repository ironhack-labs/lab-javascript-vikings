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
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
        return this.health > 0
            ? `${this.name} has received ${damage} points of damage`
            : `${this.name} has died in act of combat`;
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
        this.health = this.health - damage;
        return this.health > 0
            ? `A Saxon has received ${damage} points of damage`
            : `A Saxon has died in combat`;
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
        const randViking =
            this.vikingArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        const randSaxon =
            this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

        const message = randSaxon.receiveDamage(randViking.strength);

        if (message.includes('died')) this.saxonArmy.splice(randSaxon, 1);
        return message;
    }

    saxonAttack() {
        const randViking =
            this.vikingArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        const randSaxon =
            this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

        const message = randViking.receiveDamage(randSaxon.strength);

        if (message.includes('died')) this.vikingArmy.splice(randViking, 1);
        return message;
    }

    showStatus() {
        if (!this.saxonArmy.length) {
            return 'Vikings have won the war of the century!';
        } else if (!this.vikingArmy.length) {
            return 'Saxons have fought for their lives and survived another day...';
        }

        return 'Vikings and Saxons are still in the thick of battle.';
    }
}
