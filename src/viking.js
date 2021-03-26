// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(num) {
        this.health -= num;

    }
}

function random(array) {
    return array[Math.floor((Math.random(array) * array.length))];
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
    }
    receiveDamage(num) {
        this.health -= num;
        if (this.health <= 0) {
            return `${this.name} has died in act of combat`;
        } else {
            return `${this.name} has received ${num} points of damage`;
        }
    }
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }
    attack() {
        super.attack();
        return this.strength;
    }
    receiveDamage(num) {
        this.health -= num;
        if (this.health <= 0) {
            return `A Saxon has died in combat`;
        } else {
            return `A Saxon has received ${num} points of damage`;
        }
    }
}

// War
class War {
    constructor() {}
    vikingArmy = [];
    saxonArmy = [];

    addViking(viking) {
        this.vikingArmy.push(viking);
    };

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    };

    vikingAttack() {
        let randomSaxon = random(this.saxonArmy);
        let randomViking = random(this.vikingArmy);
        if (randomSaxon.health <= randomViking.strength) {
            this.saxonArmy.splice(randomSaxon, 1);
            return;
        } else if (randomSaxon.health > randomViking.strength) {
            return randomSaxon.receiveDamage(randomViking.strength);
        }
    };

    // saxonAttack();
    // showStatus();
}