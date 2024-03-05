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
        super.receiveDamage(damage);
        if (this.health <= 0) {
            return `${this.name} has died in act of combat`;
        } else {
            return `${this.name} has received ${damage} points of damage`;
        }
    }
    battleCry() {
        return `Odin Owns You All!`;
    }
}


// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }
    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health <= 0) {
            return `A Saxon has died in combat`;
        } else {
            return `A Saxon has received ${damage} points of damage`;
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
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[randomSaxonIndex];

        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomViking = this.vikingArmy[randomVikingIndex];
        const damageDealt = randomViking.attack();

        const message = randomSaxon.receiveDamage(damageDealt);

        this.saxonArmy.forEach((saxon, index) => {
            if (saxon.health <= 0) {
                this.saxonArmy.splice(index, 1);
            }
        });

        return message;
    }

    saxonAttack() {
        if (this.saxonArmy.length === 0) {
            return "Saxons have no one to attack!";
        }

        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomViking = this.vikingArmy[randomVikingIndex];
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[randomSaxonIndex];
        const damageDealt = randomSaxon.attack();

        const message = randomViking.receiveDamage(damageDealt);

        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomVikingIndex, 1);
        }

        return message;
    }

    showStatus() {
        let vikingCount = 0;
        let saxonCount = 0;

        this.vikingArmy.forEach(viking => vikingCount++);
        this.saxonArmy.forEach(saxon => saxonCount++);

        if (saxonCount === 0) {
            return "Vikings have won the war of the century!";
        } else if (vikingCount === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}


const viking1 = new Viking("VIKING 01", 100, 20);
const viking2 = new Viking("VIKING 02", 120, 25);
const saxon1 = new Saxon(80, 10);
const saxon2 = new Saxon(120, 20);

const war = new War();
