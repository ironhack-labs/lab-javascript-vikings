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
            return (`${this.name} has received ${damage} points of damage`);
        } else {
            return (`${this.name} has died in act of combat`)
        }

    }
    battleCry() {
        return "Odin Owns You All!";
    }

}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return (`A Saxon has received ${damage} points of damage`);
        } else {
            return ("A Saxon has died in combat");
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
        return this.attackFromVikingOrSaxon('Viking');
    }

    saxonAttack() {
        return this.attackFromVikingOrSaxon('Saxon');
    }

    attackFromVikingOrSaxon(vikingOrSaxonString) {
        let result = '';
        let randomVikingSaxon = this.chooseRandomVikingAndSaxon()
        let randomViking;
        let randomSaxon;
        if (randomVikingSaxon) {
            randomViking = randomVikingSaxon[0];
            randomSaxon = randomVikingSaxon[1];
        }
        if (vikingOrSaxonString == 'Viking') {
            result = randomSaxon.receiveDamage(randomViking.strength)
        } else if (vikingOrSaxonString == 'Saxon') {
            result = randomViking.receiveDamage(randomSaxon.strength)
        } else {
            throw new Error('Provided parameter is neither a Viking nor a Saxon');;
        }
        this.removeDeadVikingsAndSaxons();
        return result;
    }

    removeDeadVikingsAndSaxons() {
        if (this.vikingArmy != []) {
            for (let i = 0; i < this.vikingArmy.length; i++) {
                if (this.vikingArmy[i].health <= 0) {
                    this.vikingArmy.splice(i, 1);
                }
            }
        }
        if (this.saxonArmy != []) {
            for (let i = 0; i < this.saxonArmy.length; i++) {
                if (this.saxonArmy[i].health <= 0) {
                    this.saxonArmy.splice(i, 1);
                }
            }
        }
    }

    chooseRandomVikingAndSaxon() {
        if (this.saxonArmy != [] && this.vikingArmy != []) {
            const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
            const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
            const randomSaxon = this.saxonArmy[randomSaxonIndex];
            const randomViking = this.vikingArmy[randomVikingIndex];
            return [randomViking, randomSaxon];
        }
        return false;
    }

    showStatus() {
        if (this.saxonArmy.length == 0) {
            return "Vikings have won the war of the century!";
        }
        if (this.vikingArmy.length == 0) {
            return "Saxons have fought for their lives and survived another day...";
        }
        if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
