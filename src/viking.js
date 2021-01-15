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
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return "A Saxon has died in combat";
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
        let someVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let someSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let someViking = this.vikingArmy[someVikingIndex];
        let someSaxon = this.saxonArmy[someSaxonIndex];

        let attackResult = someSaxon.receiveDamage(someViking.strength);

        if (someSaxon.health <= 0) {
            this.saxonArmy.splice(someSaxonIndex, 1);
        }

        return attackResult;
    }
    saxonAttack() {
        let someVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let someSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let someViking = this.vikingArmy[someVikingIndex];
        let someSaxon = this.saxonArmy[someSaxonIndex];

        let attackResult = someViking.receiveDamage(someSaxon.strength);

        if (someViking.health <= 0) {
            this.vikingArmy.splice(someVikingIndex, 1);
        }

        return attackResult;
    }

    showStatus() {
        if (this.vikingArmy.length && this.saxonArmy.length) {
            return "Vikings and Saxons are still in the thick of battle.";
        } else if (!this.saxonArmy.length) {
            return "Vikings have won the war of the century!";
        } else if (!this.vikingArmy.length) {
            return "Saxons have fought for their lives and survived another day...";
        }
    }
}