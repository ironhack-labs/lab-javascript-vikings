// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    };

    attack = () => {
        return this.strength;
    };

    receiveDamage = (damage) => {
        this.health -= damage;
    };
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    };

    receiveDamage = (damage) => {
        this.health -= damage;
        if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        }
        else {
            return `${this.name} has received ${damage} points of damage`
        }
    }

    battleCry = () => {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength) {
        super(health, strength);
    }

    receiveDamage = (damage) => {
        this.health -= damage;
        return this.health <= 0 ? `A Saxon has died in combat`: `A Saxon has received ${damage} points of damage`;
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking = (viking) => {
        this.vikingArmy.push(viking);
    }

    addSaxon = (saxon) => {
        this.saxonArmy.push(saxon);
    }

    vikingAttack = () => {
        let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

        let saxon = this.saxonArmy[saxonIndex];
        let viking = this.vikingArmy[vikingIndex];

        let returnValue = saxon.receiveDamage(viking.strength);

        if (saxon.health <= 0) {
            this.saxonArmy.splice(saxonIndex, 1)
        }

        return returnValue;
    }

    saxonAttack = () => {
        let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

        let saxon = this.saxonArmy[saxonIndex];
        let viking = this.vikingArmy[vikingIndex];

        let returnValue = viking.receiveDamage(saxon.strength);

        if (viking["health"] <= 0) {
            this.vikingArmy.splice(vikingIndex, 1);
        }

        return returnValue;
    }

    showStatus = () => {
        if (!this.vikingArmy.length) {
            return `Saxons have fought for their lives and survive another day...`
        }
        else if (this.saxonArmy.length <= 0) {
            return `Vikings have won the war of the century!`
        }
        else {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }
}