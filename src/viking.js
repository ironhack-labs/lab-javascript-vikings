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

    receiveDamage(damage) {

        super.receiveDamage(damage);

        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }

        return `${this.name} has died in act of combat`;
    }

    battleCry() {
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier {

    constructor(health, strength) {
        super(health, strength);
    }

    receiveDamage(damage) {

        super.receiveDamage(damage);

        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }

        return `A Saxon has died in combat`;
    }
}

// War
class War {

    vikingArmy = [];
    saxonArmy = [];

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {

        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length);

        const result = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);

        if (this.saxonArmy[randomSaxon].health <= 0) {
            this.saxonArmy.splice(randomSaxon, 1);
        }

        return result;
    }

    saxonAttack() {

        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length);

        const result = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);

        if (this.vikingArmy[randomViking].health <= 0) {
            this.vikingArmy.splice(randomViking, 1);
        }

        return result;

    }

    showStatus() {

    }
}