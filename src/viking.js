// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    };
    attack() {
        return this.strength;
    };
    receiveDamage(damage) {
        this.health = this.health - damage;
    };
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        return `${this.name} has died in act of combat`;
    }

    battleCry() {
        return ("Odin Owns You All!")
    }
}


// Saxon
class Saxon extends Soldier {
    constrcutor(health, strength) {
        super(health, strength);
    }

    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
        return `A Saxon has died in act of combat`;
    }
}


// War
class War {
    constrcutor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(vikingObject) {
        this.addViking.push(Viking)
    }
    addSaxon(saxonObject) {
        this.addSaxon.push(Saxon)
    }
    vikingAttack() {
        const randomviking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        const randomsaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]

        randomviking.receiveDamage(randomsaxon.strength)
    }

    saxonAttack() {
        const randomviking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        const randomsaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]

        randomsaxon.receiveDamage(randomviking.strength)
    }

}
