// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        this.strength + this.attack;
        return this.strength;

    }
    receiveDamage(theDamage) {
        this.health = this.health - theDamage;

    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name
    }
    receiveDamage(theDamage) {
        super.receiveDamage(theDamage);
        if (this.health > 0) {
            return `${this.name} has received ${theDamage} points of damage`
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
    receiveDamage(theDamage) {
        super.receiveDamage(theDamage);
        if (this.health > 0) {
            return `A Saxon has received ${theDamage} points of damage`
        } else {
            return `A Saxon has died in combat`
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
    };
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    };

    vikingAttack() {
        let randomNumberSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        var randomSaxon = this.saxonArmy[randomNumberSaxon];
        var randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        if (randomViking.strength >= randomSaxon.health) {
            this.saxonArmy.splice(randomNumberSaxon, 1);
        }
        return randomSaxon.receiveDamage(randomViking.strength);
    }
    saxonAttack() {
        let randomNumberViking = Math.floor(Math.random() * this.vikingArmy.length);
        let randomNumberSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        var randomSaxon = this.saxonArmy[randomNumberSaxon];
        var randomViking = this.vikingArmy[randomNumberViking];
        if (randomSaxon.strength >= randomViking.health) {
            this.vikingArmy.splice(randomNumberViking, 1);
        }
        return randomViking.receiveDamage(randomSaxon.strength);
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        }
        if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survive another day..."
        }
        return "Vikings and Saxons are still in the thick of battle."
    }
}