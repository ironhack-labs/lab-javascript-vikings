// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength

    }
    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health = this.health - damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }

    receiveDamage(damage) {
        this.health = this.health - damage
        if (this.health > 0) {
            return this.name + " has received " + damage + " points of damage"
        } else {
            return this.name + " has died in act of combat"
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
        this.health = this.health - damage
        if (this.health > 0) {
            return "A Saxon has received " + damage + " points of damage"
        } else {
            return "A Saxon has died in combat"
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
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }

    vikingAttack() {

        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

        let outcome = randomSaxon.receiveDamage(randomViking.strength)

        if (randomSaxon.health <= 0) {
            for (let i = 0; i < this.saxonArmy.length; i++) {
                if (randomSaxon.health === this.saxonArmy[i].health) {
                    this.saxonArmy.splice(i);
                }
            }
        }

        return outcome
    }

    saxonAttack() {
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

        let outcome = randomViking.receiveDamage(randomSaxon.strength)

        if (randomViking.health <= 0) {
            for (let i = 0; i < this.vikingArmy.length; i++) {
                if (randomViking.health === this.vikingArmy[i].health) {
                    this.vikingArmy.splice(i);
                }
            }
        }

        return outcome
    }

    showStatus() {
        return !this.saxonArmy.length ? "Vikings have won the war of the century!" : !this.vikingArmy.length ? "Saxons have fought for their lives and survive another day..." : "Vikings and Saxons are still in the thick of battle."
    }
}