// Soldier
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
    constructor(nameArg, healthArg, strengthArg) {
        super(healthArg, strengthArg);
        this.name = nameArg;
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

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        // Get number of Saxons in Saxon army
        let numberOfSaxons = this.saxonArmy.length;
        // Pick one random Saxon from Saxon army
        let randomSaxon = this.saxonArmy[Math.floor(Math.random()*numberOfSaxons)];
        // Pick random viking
        let numberOfVikings = this.vikingArmy.length;
        let randomViking = this.vikingArmy[Math.floor(Math.random()*numberOfVikings)];

        let message = randomSaxon.receiveDamage(randomViking.strength);

        // Remove dead saxons from army
        for (let saxon of this.saxonArmy) {
            if (saxon.health <= 0) {
                let index = this.saxonArmy.indexOf(saxon); // Get position of dead saxon in array
                this.saxonArmy.splice(index, 1); // Remove dead saxon
            }
        }

        return message;
    }

    saxonAttack() {
        // Get number of Saxons in Saxon army
        let numberOfSaxons = this.saxonArmy.length;
        // Pick one random Saxon from Saxon army
        let randomSaxon = this.saxonArmy[Math.floor(Math.random()*numberOfSaxons)];
        // Pick random viking
        let numberOfVikings = this.vikingArmy.length;
        let randomViking = this.vikingArmy[Math.floor(Math.random()*numberOfVikings)];

        let message = randomViking.receiveDamage(randomSaxon.strength);

        // Remove dead viking from army
        for (let viking of this.vikingArmy) {
            if (viking.health <= 0) {
                let index = this.vikingArmy.indexOf(viking); // Get position of dead vikings in array
                this.vikingArmy.splice(index, 1); // Remove dead viking
            }
        }

        return message;
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survive another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
