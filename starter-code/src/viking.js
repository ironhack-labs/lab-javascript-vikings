// Soldier
class Soldier {
    constructor(healthArg, strengthArg) {
        this.health = healthArg;
        this.strength = strengthArg;
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(nameArg, healthArg, strengthArg) {
        super(healthArg, strengthArg)
        this.name = nameArg;
        this.health = healthArg;
        this.strength = strengthArg;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        } else {
            return `${this.name} has received ${damage} points of damage`;
        }
    }

    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(healthArg, strengthArg) {
        super(healthArg, strengthArg)

    }

    receiveDamage(damage) {
        this.health -= damage;
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

    }
    vikingArmy = [];
    saxonArmy = [];

    addViking(newViking) {
        this.vikingArmy.push(newViking);
    }
    addSaxon(newSaxon) {
        this.saxonArmy.push(newSaxon);
    }

    vikingAttack() {
        let saxonChoosen = Math.floor(Math.random() * this.saxonArmy.length);
        let vikingChoosen = Math.floor(Math.random() * this.vikingArmy.length);

        this.saxonArmy[saxonChoosen].receiveDamage(this.vikingArmy[vikingChoosen].strength);
        if (this.saxonArmy[saxonChoosen].health <= 0) {
            this.saxonArmy.splice(saxonChoosen, 1);
            return "A Saxon has died in combat";
        }
    }

    saxonAttack() {
        let saxonChoosen = Math.floor(Math.random() * this.saxonArmy.length);
        let vikingChoosen = Math.floor(Math.random() * this.vikingArmy.length);

        this.vikingArmy[vikingChoosen].receiveDamage(this.saxonArmy[saxonChoosen].strength);
        for (let cont = 0; cont <= this.vikingArmy.length - 1; cont++) {
            if (this.vikingArmy[cont].health <= 0) {
                this.vikingArmy.splice(cont, 1);
            } else {
                return `${this.vikingArmy[cont].name} has received ${this.saxonArmy[cont].strength} points of damage`;
            }
        };
    }

    showStatus() {
        if (!this.saxonArmy.length === true) {
            return "Vikings have won the war of the century!";
        } else {
            if (!this.vikingArmy.length === true) {
                return "Saxons have fought for their lives and survive another day...";
            } else {
                return "Vikings and Saxons are still in the thick of battle.";
            }
        }


    }
}