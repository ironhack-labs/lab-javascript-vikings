// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
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
    name;
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return 'Odin Owns You All!'
    }

}

// Saxon
class Saxon extends Soldier {
    // super(name, health, strength)
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        super.receiveDamage(damage);
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
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }

    pickARandomViking() {
        return this.vikingArmy[randomNumber(this.vikingArmy.length)];
    }
    pickARandomSaxon() {
        return this.saxonArmy[randomNumber(this.saxonArmy.length)];
    }


    vikingAttack() {
        //choose a random saxon army
        let randomSaxonArmy = this.pickARandomSaxon();
        //choose a random viking army
        let randomVikingArmy = this.pickARandomViking();

        if (typeof randomSaxonArmy === "undefined" || typeof randomVikingArmy === "undefined") {
            return 0
        }
        //should make a Saxon receiveDamage() equal to the strength of a Viking
        let damagedSaxonArmy = randomSaxonArmy.receiveDamage(randomVikingArmy.attack());
        //should remove dead saxons from the army
        this.saxonArmy.pop(randomSaxonArmy)

        //should make Saxon receiveDamage() equal to the strength of a Viking
        // should return result of calling receiveDamage() of a Saxon with the strength of a Viking.
        return damagedSaxonArmy;
    }
    saxonAttack() {
        //choose a random saxon army
        let randomSaxonArmy = this.pickARandomSaxon();
        //choose a random viking army
        let randomVikingArmy = this.pickARandomViking();

        if (typeof randomSaxonArmy === "undefined" || typeof randomVikingArmy === "undefined") {
            return 0
        }

        //should make a Viking receiveDamage() equal to the strength of a Saxon
        let damagedVikingArmy = randomVikingArmy.receiveDamage(randomSaxonArmy.attack());
        //should remove dead vikings from the army
        this.vikingArmy.pop(randomVikingArmy)
            // should return result of calling receiveDamage() of a Viking with the strength of a Saxon.
        return damagedVikingArmy;

    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!';
        }
        if (this.vikingArmy.length == 0) {
            return 'Saxons have fought for their lives and survived another day...';
        }
        return 'Vikings and Saxons are still in the thick of battle.'
    }
}

function randomNumber(max) {
    return Math.floor(Math.random() * max)
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = { Soldier, Viking, Saxon, War };
}