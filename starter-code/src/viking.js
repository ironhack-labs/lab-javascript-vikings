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
    receiveDamage(damage) { // Could have simply used the super. notation to inherit the parent function
        this.health -= damage;
        if (this.health > 0) {
            return this.name + " has received " + damage + " points of damage";
        }
        return this.name + " has died in act of combat";
    }
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }
    receiveDamage(damage) { // Could have simply used the super. notation to inherit the parent function
        this.health -= damage;
        if (this.health > 0) {
            return "A Saxon has received " + damage + " points of damage";
        }
        return "A Saxon has died in combat";
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(newViking) {
        this.vikingArmy.push(newViking);
    }
    addSaxon(newSaxon) {
        this.saxonArmy.push(newSaxon);
    }
    vikingAttack() {
        let indexViking = Math.floor(Math.random() * this.vikingArmy.length);
        let indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let ranViking = this.vikingArmy[indexViking];
        let ranSaxon = this.saxonArmy[indexSaxon];
        let ranVikingStr = ranViking.strength;
        let saxonOutcome = ranSaxon.receiveDamage(ranVikingStr);
        if (ranSaxon.health <= 0) {
            this.saxonArmy.splice(indexSaxon, 1)
        }
        return saxonOutcome;
    }
    saxonAttack() {
        let indexViking = Math.floor(Math.random() * this.vikingArmy.length);
        let indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let ranViking = this.vikingArmy[indexViking];
        let ranSaxon = this.saxonArmy[indexSaxon];
        let ranSaxonStr = ranSaxon.strength;
        let vikingOutcome = ranViking.receiveDamage(ranSaxonStr);
        if (ranViking.health <= 0) {
            this.vikingArmy.splice(indexViking, 1)
        }
        return vikingOutcome;
    }
    showStatus() {
        if (!this.saxonArmy.length && this.vikingArmy.length) {
            return "Vikings have won the war of the century!"
        } else if (!this.vikingArmy.length && this.saxonArmy.length) {
            return "Saxons have fought for their lives and survive another day..."
        }
        return "Vikings and Saxons are still in the thick of battle."
    }
}