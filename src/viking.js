// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    };

    attack() {
        return this.strength;
    };

    receiveDamage(damage) {
        this.health -= damage;
    };
};

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    };

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        };
    };

    battleCry() {
        return 'Odin Owns You All!'
    };
};

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    };

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    };
};

// War
class War {
    vikingArmy = [];
    saxonArmy = [];

    addViking(vikingObject) {
        this.vikingArmy.push(vikingObject);
    };

    addSaxon(saxonObject) {
        this.saxonArmy.push(saxonObject);
    };

    vikingAttack() {
        if (this.vikingArmy.length !== 0) {
            const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
            const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
            const result = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
            if (this.saxonArmy[randomSaxon].health <= 0) {
                this.saxonArmy.splice(randomSaxon, 1);
            };
            return result;
        };
    };

    saxonAttack() {
        if (this.saxonArmy.length !== 0) {
            const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
            const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
            const result = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
            if (this.vikingArmy[randomViking].health <= 0) {
                this.vikingArmy.splice(randomViking, 1);
            };
            return result;
        };
    };

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`;
        } else if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`;
        } else {
            return `Vikings and Saxons are still in the thick of battle.`
        };
    };
};
/* 
const viking1 = new Viking("Freya", Math.floor(Math.random(0) * 200) + 1, Math.floor(Math.random(0) * 20) + 1);
const viking2 = new Viking("Thor", Math.floor(Math.random(0) * 200) + 1, Math.floor(Math.random(0) * 20) + 1);
const viking3 = new Viking("Bjorn", Math.floor(Math.random(0) * 200) + 1, Math.floor(Math.random(0) * 20) + 1);
const viking4 = new Viking("Ragnar", Math.floor(Math.random(0) * 200) + 1, Math.floor(Math.random(0) * 20) + 1);
const viking5 = new Viking("Astrid", Math.floor(Math.random(0) * 200) + 1, Math.floor(Math.random(0) * 20) + 1);
const saxon1 = new Saxon(Math.floor(Math.random(0) * 100) + 1, Math.floor(Math.random(0) * 10) + 1);
const saxon2 = new Saxon(Math.floor(Math.random(0) * 100) + 1, Math.floor(Math.random(0) * 10) + 1);
const saxon3 = new Saxon(Math.floor(Math.random(0) * 100) + 1, Math.floor(Math.random(0) * 10) + 1);
const saxon4 = new Saxon(Math.floor(Math.random(0) * 100) + 1, Math.floor(Math.random(0) * 10) + 1);
const saxon5 = new Saxon(Math.floor(Math.random(0) * 100) + 1, Math.floor(Math.random(0) * 10) + 1);
const saxon6 = new Saxon(Math.floor(Math.random(0) * 100) + 1, Math.floor(Math.random(0) * 10) + 1);
const saxon7 = new Saxon(Math.floor(Math.random(0) * 100) + 1, Math.floor(Math.random(0) * 10) + 1);
const saxon8 = new Saxon(Math.floor(Math.random(0) * 100) + 1, Math.floor(Math.random(0) * 10) + 1);
const saxon9 = new Saxon(Math.floor(Math.random(0) * 100) + 1, Math.floor(Math.random(0) * 10) + 1);
const saxon10 = new Saxon(Math.floor(Math.random(0) * 100) + 1, Math.floor(Math.random(0) * 10) + 1);

const war = new War();

war.addViking(viking1);
war.addViking(viking2);
war.addViking(viking3);
war.addViking(viking4);
war.addViking(viking5);
war.addSaxon(saxon1);
war.addSaxon(saxon2);
war.addSaxon(saxon3);
war.addSaxon(saxon4);
war.addSaxon(saxon5);
war.addSaxon(saxon6);
war.addSaxon(saxon7);
war.addSaxon(saxon8);
war.addSaxon(saxon9);
war.addSaxon(saxon10);

console.log(war);

while (war.saxonArmy.length !== 0 && war.vikingArmy.length !== 0) {
    console.log(war.vikingAttack());
    console.log(war.saxonAttack());
    console.log(war.showStatus());
    console.log("-------");
}; */