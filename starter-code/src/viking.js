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

    constructor(name, healthArg, strengthArg) {
        super(healthArg, strengthArg);
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
        let randomSaxon = Math.floor(Math.random*this.saxonArmy.length);
        let randomViking = Math.floor(Math.random*this.vikingArmy.length);
        let damage = vikingArmy[randomViking].attack();
        let currentHealth = damage;
        if (currentHealth == 0) {
            this.saxonArmy.splice(randomSaxon, 1);
        }
        return this.vikingArmy[randomViking].receiveDamage() == this.saxonArmy[randomSaxon].attack();
    }

    saxonAttack() {
        let randomViking = Math.floor(Math.random*this.vikingArmy.length);
        let randomSaxon = Math.floor(Math.random*this.saxonArmy.length);
        let damage = this.saxonArmy[randomSaxon].attack();
        let currentHealth = damage;
        if (currentHealth == 0) {
            this.vikingArmy.splice(randomViking, 1);
        }
        return this.saxonArmy[randomSaxon].receiveDamage() == this.vikingArmy[randomViking].attack();
    }

    showStatus() {
        if (this.saxonArmy.length == 0) {
            return `Vikings have won the war of the century!`;
        } else if (this.vikingArmy.length == 0) {
            return `Saxons have fought for their lives and survive another day...`
        } else if (((this.saxonArmy.length) && (this.vikingArmy.length)) == 1) {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }

}

