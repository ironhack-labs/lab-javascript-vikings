// Soldier
class Soldier {
    constructor(health, strength) {
        (this.health = health), (this.strength = strength);
    }
    attack = function () {
        return this.strength;
    }

    receiveDamage = function (damage) {
        this.health -= damage
    };
}

// Viking

class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage = function (damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    };
    battleCry = function () {
        return `Odin Owns You All!`;
    };
}

// Saxon
class Saxon extends Soldier {
    receiveDamage = function (damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    };
}

// War
class War {
    constructor() {
        (this.vikingArmy = []), (this.saxonArmy = []);
    }
    addViking = function (Viking) {
        this.vikingArmy.push(Viking);
    };
    addSaxon = function (Saxon) {
        this.saxonArmy.push(Saxon);
    };
    vikingAttack = function () {

        let randomVik = this.vikingArmy[(Math.floor(Math.random() * this.vikingArmy.length))]
        let randomSax = this.saxonArmy[(Math.floor(Math.random() * this.saxonArmy.length))]

        let result = randomSax.receiveDamage(randomVik.attack())

        if (randomSax.health <= 0) {
            this.saxonArmy.splice(randomSax, 1);
        }

        return result

    };
    saxonAttack = function () {

        let randomVik = this.vikingArmy[(Math.floor(Math.random() * this.vikingArmy.length))]
        let randomSax = this.saxonArmy[(Math.floor(Math.random() * this.saxonArmy.length))]

        let result = randomVik.receiveDamage(randomSax.attack())
        if (randomVik.health <= 0) {
            this.vikingArmy.splice(randomVik, 1);
        }

        return result

    };
    showStatus = function () {
        if (this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`;
        } else if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`;
        } else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
            return `Vikings and Saxons are still in the thick of battle.`;
        }
    };
}