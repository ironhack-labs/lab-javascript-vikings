//Soldier
class Soldier {
    constructor(health,strength) {
        this.health = health;
        this.strength = strength;
    };
    attack () {
        return this.strength;
    };
    receiveDamage (damage) {
        this.health -= damage;
    };
}

//Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength);
        this.name = name;
    };
    receiveDamage (damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        };
    };
    battleCry() {
        return "Odin Owns You All!";
    };
}

//Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        };
    };
}

//War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    };
    addViking(viking) {
        this.vikingArmy.push(viking);
    };
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    };
    vikingAttack() {
        let saxonRandomIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let saxonRandom = this.saxonArmy[saxonRandomIndex];

        let vikingRandomIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let vikingRandom = this.vikingArmy[vikingRandomIndex];

        let resultVikingAttack = saxonRandom.receiveDamage(vikingRandom.strength);

        if (saxonRandom.health <= 0) {
            this.saxonArmy.splice(saxonRandomIndex, 1);
        };

        return resultVikingAttack;
    };

    saxonAttack() {
        let saxonRandomIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let saxonRandom = this.saxonArmy[saxonRandomIndex];

        let vikingRandomIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let vikingRandom = this.vikingArmy[vikingRandomIndex];

        let resultSaxonAttack = vikingRandom.receiveDamage(saxonRandom.strength);

        if (vikingRandom.health <= 0) {
            this.vikingArmy.splice(vikingRandomIndex, 1);
        };

        return resultSaxonAttack;
    };

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    };
};