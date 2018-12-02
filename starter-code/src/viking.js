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
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
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
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }

    battleCry() {
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }

    vikingAttack() {
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);

        let resultAttack = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);

        // should remove dead saxons from the army
        let alive = this.saxonArmy.filter(function (saxon) {
            return saxon.health > 0;
        });
        this.saxonArmy = alive;

        // if (this.saxonArmy[randomSaxon].health <= 0) {
        //     this.saxonArmy.splice(randomSaxon, 1);
        // }

        // should return result of calling receiveDamage() of a Saxon with the strength of a Viking
        return resultAttack;
    }

    saxonAttack() {
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);

        let resultAttack = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
        let vikingsAlive = this.vikingArmy.filter(function (viking) {
            return viking.health > 0;
        });
        this.vikingArmy = vikingsAlive;
        return resultAttack;
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`;
        } else if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survive another day...`;
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}


let vikingo1 = new Viking('Vikingo 1', 300, 150);
let vikingo2 = new Viking('Vikingo 2', 400, 200);
let vikingo3 = new Viking('Vikingo 3', 500, 120);

let saxon1 = new Saxon(300, 150);
let saxon2 = new Saxon(400, 200);
let saxon3 = new Saxon(500, 120);

let ejercito = new War();
ejercito.addSaxon(saxon1);
ejercito.addSaxon(saxon2);
ejercito.addSaxon(saxon3);

ejercito.addViking(vikingo1);
ejercito.addViking(vikingo2);
ejercito.addViking(vikingo3);


console.log(ejercito.vikingAttack());
console.log(ejercito.saxonAttack());
console.log(ejercito);


