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
        super(health, strength, name)
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return this.name + " has received " + damage + " points of damage";
        } else {
            return this.name + " has died in act of combat";
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return "A Saxon has received " + damage + " points of damage";
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
        // select random number from arrays
        let indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let indexViking = Math.floor(Math.random() * this.vikingArmy.length);

        // use it to choose random saxon and viking
        let randomSaxon = this.saxonArmy[indexSaxon];
        let randomViking = this.vikingArmy[indexViking];

        // attack saxon
        let hurtSaxon = randomSaxon.receiveDamage(randomViking.strength);

        // remove dead saxons from army
        if (hurtSaxon = "A Saxon has died in combat") {
            this.saxonArmy.splice(indexSaxon, 1);
        }
        return hurtSaxon;
    }
    saxonAttack() {
        // select random number from arrays
        let indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let indexViking = Math.floor(Math.random() * this.vikingArmy.length);

        // use it to choose random saxon and viking
        let randomSaxon = this.saxonArmy[indexSaxon];
        let randomViking = this.vikingArmy[indexViking];

        // attack viking
        let hurtViking = randomViking.receiveDamage(randomSaxon.strength);

        // remove dead vikings from army
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(indexViking, 1);
        }
        return hurtViking;
    }
    showStatus() {
        // shows war status
        // if all saxons are dead
        if (this.saxonArmy == 0) {
            return "Vikings have won the war of the century!";
            // if all vikings are dead
        } else if (this.vikingArmy == 0) {
            return "Saxons have fought for their lives and survive another day...";
            // if they are still fighting
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}