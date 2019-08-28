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
        return `Odin Owns You All!`;
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

        let currentSaxonIndex = Math.floor(Math.random()) * this.saxonArmy.length;
        let currentSaxon = this.saxonArmy[currentSaxonIndex];

        let currentViking = this.vikingArmy[Math.floor(Math.random()) * this.vikingArmy.length];

        let action = currentSaxon.receiveDamage(currentViking.strength);

        if (action.includes("died")) {
            this.saxonArmy.splice(currentSaxonIndex);
        };

        return action;

    }

    saxonAttack() {

        let currentVikingIndex = Math.floor(Math.random()) * this.vikingArmy.length;
        let currentViking = this.vikingArmy[currentVikingIndex];

        let currentSaxon = this.saxonArmy[Math.floor(Math.random()) * this.saxonArmy.length];

        let action = currentViking.receiveDamage(currentSaxon.strength);

        if (action.includes("died")) {
            this.vikingArmy.splice(currentVikingIndex);
        };

        return action;

    }
    showStatus() {


        if (this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`;
        }

        if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survive another day...`;
        }

        if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) {
            return `Vikings and Saxons are still in the thick of battle.`;
        }

    }

}
