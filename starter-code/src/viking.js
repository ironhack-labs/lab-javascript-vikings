// Soldier
// function Soldier() {}
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
        // return "Healt: " + this.health;
    }

}

// Viking
// function Viking() {}
class Viking extends Soldier {

    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        return (this.health > 0) ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
    }

    battleCry() {
        return "Odin Owns You All!";
    }

}

// Saxon
// function Saxon() {}
class Saxon extends Soldier {

    constructor(health, strength) {
        super(health, strength);
    }

    receiveDamage(damage) {
        this.health -= damage;
        return (this.health > 0) ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
    }
}

// War
// function War() {}
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
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomSaxonDamaged = randomSaxon.receiveDamage(randomViking.strength);

        if (randomSaxon.health < 1) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1);
        }

        return randomSaxonDamaged;
    }

    saxonAttack() {
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomVikingDamaged = randomViking.receiveDamage(randomSaxon.strength);

        if (randomViking.health < 1) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1);
        }
        return randomVikingDamaged;
    }

    showStatus() {
        if (this.saxonArmy.length < 1) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length < 1) {
            return "Saxons have fought for their lives and survive another day...";
        }
        return "Vikings and Saxons are still in the thick of battle."
    }

}
