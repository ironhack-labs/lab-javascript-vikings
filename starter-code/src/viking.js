// Soldier
class Soldier {
    constructor(healthArg, strengthArg) {
        this.health = healthArg;
        this.strength = strengthArg;
    };
    attack() {
        return this.strength;
    };
    receiveDamage(damage) {
        this.health = this.health - damage;
    };
}

// Viking
class Viking extends Soldier {
    constructor(name, healthArg, strengthArg) {
        super(healthArg, strengthArg)
        this.name = name;
    }
    receiveDamage(damage) {
        this.health = this.health - damage;

        if (this.health > 0) {
            return (`${this.name} has received ${damage} points of damage`);

        } else {
            return (`${this.name} has died in act of combat`);
        }
    }
    battleCry() {
        return ("Odin Owns You All!");
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(healthArg, strengthArg) {
        super(healthArg, strengthArg)
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return (`A Saxon has received ${damage} points of damage`);

        } else {
            return (`A Saxon has died in combat`);
        }
    }
}

// War
class War {
    constructor() {
    vikingArmy = [];
    saxonArmy = [];
    }
    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }
    vikingAttack() {
        let currentSaxonIndex = Math.floor(Math.random()) * this.saxonArmy.length;
        let currentSaxonIndex = this.saxonArmy(currentSaxonIndex);

        let currentViking = this.vikingArmy(Math.floor(Math.random())) * this.vikingArmy.length;
    }
 }

