// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;

    }

    attack() {
        return this.strength;
    }

    receiveDamage(dmg) {
        this.health = this.health - dmg;
    }

}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(dmg) {
        this.health = this.health - dmg;
        if (this.health <= 0) return `${this.name} has died in act of combat`;

        return `${this.name} has received ${dmg} points of damage`;
    }

    battleCry() {
        return `Odin Owns You All!`;
    }
}

// Saxon
/*Don't have to include a constructor method since this class will inherit perfectly 
from the parents class, both the health and the strength (it extends Soldier class :wink: )*/
class Saxon extends Soldier {

    receiveDamage(dmg) {
        this.health = this.health - dmg;
        if (this.health <= 0) return `A Saxon has died in combat`;

        return `A Saxon has received ${dmg} points of damage`;
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(obj) {
        this.vikingArmy.push(obj);
    }

    addSaxon(obj) {
        this.saxonArmy.push(obj);
    }

    vikingAttack() {
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        const cry = randomSaxon.receiveDamage(randomViking.strength);

        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxon, 1);
        }

        return cry;
    }

    saxonAttack() {
        const randomSaxon = this.saxonArmy[Math.floor(Math.random(this.saxonArmy.length))];
        const randomViking = this.vikingArmy[Math.floor(Math.random(this.vikingArmy.length))];
        const cry = randomViking.receiveDamage(randomSaxon.strength);

        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomViking, 1);
        }

        return cry;
    }

    showStatus() {
        switch (true) {
            case this.vikingArmy.length === 0:
                return "Saxons have fought for their lives and survived another day...";
            case this.saxonArmy.length === 0:
                return "Vikings have won the war of the century!";

            default:
                return "Vikings and Saxons are still in the thick of battle.";
        }
    }

}
