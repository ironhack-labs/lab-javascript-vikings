// Soldier
class Soldier {
    constructor(healthArg, strengthArg) {
        this.health = healthArg;
        this.strength = strengthArg;
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
    constructor(nameArg, healthArg, strengthArg) {
        super(healthArg, strengthArg);
        this.name = nameArg;
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
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(healthArg, strengthArg) {
        super(healthArg, strengthArg);
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
        return "Odin Owns You All!";
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(vikingObj) {
        this.vikingArmy.push(vikingObj);
    }
    addSaxon(saxonObj) {
        this.saxonArmy.push(saxonObj);
    }
    vikingAttack() {
        let randomV = Math.floor(Math.random() * this.vikingArmy.length);
        let randomS = Math.floor(Math.random() * this.saxonArmy.length);
        let value = this.saxonArmy[randomS].receiveDamage(this.vikingArmy[randomV].attack());
        if (this.saxonArmy[randomS].health <= 0) {
            this.saxonArmy.splice(randomS, 1);
        }
        return value;
    }
    saxonAttack() {
        let randomV = Math.floor(Math.random() * this.vikingArmy.length);
        let randomS = Math.floor(Math.random() * this.saxonArmy.length);
        let value = this.vikingArmy[randomV].receiveDamage(this.saxonArmy[randomS].attack());
        if (this.vikingArmy[randomV].health <= 0) {
            this.vikingArmy.splice(randomV, 1);
        }
        return value;
    }
    showStatus() {
        if (this.saxonArmy == "") {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy == "") {
            return "Saxons have fought for their lives and survive another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
