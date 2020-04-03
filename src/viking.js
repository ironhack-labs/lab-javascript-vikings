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
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

War
class War {

    constructor () {
    vikingArmy = [];
    saxonArmy = [];
    }

    addViking(Viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        let randomSaxonIndex = getRandomInt(this.saxonArmy.length)
        let randomVikingIndex = getRandomInt(this.vikingArmy.length);
        let randomSaxon = this.saxonArmy[randomSaxonIndex];
        let randomViking = this.vikingArmy[randomVikingIndex];
        let damage= randomViking.attack();
        randomSaxon.receiveDamage(damage);
        }
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
