// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(theDamage) {
        this.health -= theDamage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(theDamage) {
        this.health -= theDamage;
        if (this.health > 0) {
            return `${this.name} has received ${theDamage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry() {
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier {
    attack() {
        return this.strength;
    }
    receiveDamage(theDamage) {
        this.health -= theDamage;
        if (this.health > 0) {
            return `A Saxon has received ${theDamage} points of damage`;
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
        let randomVi =
            this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let randomSa =
            this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let vAttack = randomSa.receiveDamage(randomVi.strength);
        if (randomSa.health <= 0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(randomSa), 1);
        }
        return vAttack;
    }
    saxonAttack() {
        let randomVi =
            this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let randomSa =
            this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let sAttack = randomVi.receiveDamage(randomSa.strength);
        if (randomVi.health <= 0) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(randomVi), 1);
        }
        return sAttack;
    }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = { Soldier, Viking, Saxon, War };
}