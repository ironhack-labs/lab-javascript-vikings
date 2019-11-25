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
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
        return this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`
    }

    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon

class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health = this.health - damage;
        return this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`
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


    randomSoldier(army) {
        var soldierIndex = Math.floor(Math.random() * army.length);
        var selectedSoldier = army[soldierIndex];

        return [selectedSoldier, soldierIndex];
    }

    vikingAttack() {
        var [vikingSoldier] = this.randomSoldier(this.vikingArmy);
        var [saxonSoldier, saxonIndex] = this.randomSoldier(this.saxonArmy);
        var damageTaken = vikingSoldier.strength;

        if (saxonSoldier.health <= vikingSoldier.strength) {
            this.saxonArmy.splice(saxonIndex, 1);
        }
        return saxonSoldier.receiveDamage(damageTaken);
    }

    saxonAttack() {
        var [vikingSoldier, vikingIndex] = this.randomSoldier(this.vikingArmy);
        var [saxonSoldier] = this.randomSoldier(this.saxonArmy);
        var damageTaken = saxonSoldier.strength;

        if (vikingSoldier.health <= saxonSoldier.strength) {
            this.vikingArmy.splice(vikingIndex, 1);
        }
        return vikingSoldier.receiveDamage(damageTaken);
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        }
        if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survive another day...";
        }
        return "Vikings and Saxons are still in the thick of battle.";
    }
}


