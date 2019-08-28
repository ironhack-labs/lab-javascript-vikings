// Soldier
class Soldier {
    constructor(healthArg, strengthArg) {
        this.health = healthArg,
            this.strength = strengthArg
    }
    attack() {
        return (this.strength);
    }
    receiveDamage(theDamage) {
        this.health = this.health - theDamage
    }
};



// Viking
class Viking extends Soldier {
    constructor(name, healthArg, strengthArg) {
        super(healthArg, strengthArg);
        this.name = name
    }
    attack() {
        return (this.strength);
    }
    receiveDamage(theDamage) {
        this.health = this.health - theDamage
        if (this.health === 0) {
            return `${this.name} has died in act of combat`
        }
        else {
            return `${this.name} has received ${theDamage} points of damage`
        }
    }
    battleCry() {
        return ("Odin Owns You All!")
    }
};

// Saxon
class Saxon extends Soldier {
    constructor(healthArg, strengthArg) {
        super(healthArg, strengthArg)
    }
    attack() {
        return (this.strength)
    }
    receiveDamage(theDamage) {
        this.health = this.health - theDamage
        if (this.health === 0) {
            return `A Saxon has died in combat`
        }
        else {
            return `A Saxon has received ${theDamage} points of damage`
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(vikingArg) {
        this.vikingArmy.push(viking);
    }
    adSaxon(saxonArg) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        let currentSaxonIndex = Math.floor(Math.random()) * this.saxonArmy.length;
        let currentSaxon = shis.saxonArmy[currentSaxonIndex];

        let currentViking = this.vikingArmy[Math.floor(Math.random()) * this.saxonArmy.length];

        let action = currentViking.receiveDamage(currentViking.strength);

        if (action.includes("died")) {
            this.saxonArmy.splice(currentSaxonIndex) {
                this.vikingArmy.splice(currentSaxonIndex);
            }
            return action;


        }
    }

}
