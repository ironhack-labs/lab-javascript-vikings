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
        this.health = health;
        this.strength = strength;
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`
        }
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
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War extends Soldier {

    vikingArmy = [];
    saxonArmy = [];


    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }

    vikingAttack() {
        var randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        console.log("here")
        var chosenViking = this.vikingArmy[randomViking];
        var chosenSaxon = this.saxonArmy[randomSaxon];
        console.log("crashing")
        console.log(chosenSaxon, chosenViking)
        var result = chosenSaxon.receiveDamage(chosenViking.strength);
        if (chosenSaxon.health < 0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon) && result);
        } return result;
    }

    saxonAttack() {
        var randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);

        var chosenViking = this.vikingArmy[randomViking];
        var chosenSaxon = this.saxonArmy[randomSaxon];

        var result = chosenViking.receiveDamage(chosenSaxon.strength);
        if (chosenViking.health < 1) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking) && result);
        } return result;
    }

    showStatus() {
        if (!this.saxonArmy.length) return "Vikings have won the war of the century!";
        if (!this.vikingArmy.length) return "Saxons have fought for their lives and survive another day...";
        if (this.saxonArmy.length !== 0 || this.vikingArmy.length !== 0) return "Vikings and Saxons are still in the thick of battle.";

    }

}
