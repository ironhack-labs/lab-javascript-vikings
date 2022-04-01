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
        this.damage = damage;
        this.health -= this.damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, healthV, strengthV) {
        super(healthV, strengthV);
        this.name = name;
    }

    receiveDamage(damage) {
        this.damage = damage;
        this.health -= this.damage;
        if (this.health > 0) {
            return `${this.name} has received ${this.damage} points of damage`;
        } else { return `${this.name} has died in act of combat`; }
    }

    battleCry() {
        return 'Odin Owns You All!';
    }
}

// Saxon
class Saxon extends Soldier {


    receiveDamage(damage) {
        this.damage = damage;
        this.health -= this.damage;
        if (this.health > 0) {
            return `A Saxon has received ${this.damage} points of damage`;
        } else { return `A Saxon has died in combat` };
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
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);

        const saxonSoldier = this.saxonArmy[randomSaxon];
        const vikingSoldier = this.vikingArmy[randomViking];

        const attack = saxonSoldier.receiveDamage(vikingSoldier.strength);

        if (attack === `A Saxon has died in combat`) { return this.saxonArmy.splice(randomSaxon, 1); }

        return attack;

    }

    saxonAttack() {

    }


    showStatus() {
        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!';
        } else if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...';
        } else return 'Vikings and Saxons are still in the thick of battle.';
    }


}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = { Soldier, Viking, Saxon, War };
}