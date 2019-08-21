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
        // ! needs to be the same number of amount from upper class
        super(health, strength);

        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;

        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
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
        let randomIndexNumSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let randomIndexNumViking = Math.floor(Math.random() * this.vikingArmy.length);

        let saxon = this.saxonArmy[randomIndexNumSaxon];
        let viking = this.vikingArmy[randomIndexNumViking];

        // Saxon gets damage from viking through strength (number) and minimizes health
        let attack = saxon.receiveDamage(viking.strength);
        if (saxon.health <= 0) {
            // remove 1 saxon out of the saxonArmy at randomIndexNum
            this.saxonArmy.splice(randomIndexNumSaxon, 1);
        }
        return attack;
    }

    saxonAttack() {
        let randomIndexNumSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let randomIndexNumViking = Math.floor(Math.random() * this.vikingArmy.length);

        let saxon = this.saxonArmy[randomIndexNumSaxon];
        let viking = this.vikingArmy[randomIndexNumViking];

        // Viking gets damage from saxon through strength (number) and minimizes health
        let attack = viking.receiveDamage(saxon.strength);

        // If viking's health is less or equal than 0
        if (viking.health <= 0) {
            // remove 1 viking out of the vikingArmy at randomIndexNum
            this.vikingArmy.splice(randomIndexNumViking, 1);
        }
        return attack;
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survive another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}

const viking = new Soldier();