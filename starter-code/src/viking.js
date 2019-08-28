/** */




//Soldier is assigned a health and strength from given paramaters
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

        let randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
        let randomViking = Math.floor(Math.random()*this.vikingArmy.length);
        let vikingAttack = this.vikingArmy[randomViking].attack();
        let newSaxonHealth = this.saxonArmy[randomSaxon].receiveDamage(vikingAttack);
        if (this.saxonArmy[randomSaxon].health <= 0) {
            this.saxonArmy.splice(randomSaxon, 1);
        }
        return newSaxonHealth;

    }

    saxonAttack() {

        let randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
        let randomViking = Math.floor(Math.random()*this.vikingArmy.length);
        let saxonAttack = this.saxonArmy[randomSaxon].attack();
        let newVikingHealth = this.vikingArmy[randomViking].receiveDamage(saxonAttack);
        if (this.vikingArmy[randomViking].health <= 0) {
            this.vikingArmy.splice(randomViking, 1);
        }
        return newVikingHealth;

    }

    showStatus() {

        let saxonArmySize = this.saxonArmy.length;
        let vikingArmySize = this.vikingArmy.length
        if (saxonArmySize == 0) {
            return `Vikings have won the war of the century!`;
        } else if (vikingArmySize == 0) {
            return `Saxons have fought for their lives and survive another day...`
        } else if (saxonArmySize == 1 && vikingArmySize == 1) {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }

}

