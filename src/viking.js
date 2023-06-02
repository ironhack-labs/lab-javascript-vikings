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
        super (health, strength);
        this.name = name;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`;
        }

        else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor (health, strength) {
        super (health, strength);
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`;
        }

        else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
    };
    addViking (Viking) {
        this.vikingArmy.push(Viking);
    }
    addSaxon (Saxon) {
        this.saxonArmy.push(Saxon);
    }
    vikingAttack() {
        const randomViking = this.vikingArmy[Math.floor(Math.random() * (this.vikingArmy.length))];

        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * (this.saxonArmy.length))];

    let attackAction = randomSaxon.receiveDamage(randomViking.attack());

    if (randomSaxon.health <= 0) {
        this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1);
    }

    return attackAction;

    }

    saxonAttack () {
        const randomViking = this.vikingArmy[Math.floor(Math.random() * (this.vikingArmy.length))];

        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * (this.saxonArmy.length))];

    let attackAction = randomViking.receiveDamage(randomSaxon.attack());

    if (randomViking.health <= 0) {
        this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1);
    }

    return attackAction;
    }

    showStatus(){
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        }
        else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        }
        else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
    }
