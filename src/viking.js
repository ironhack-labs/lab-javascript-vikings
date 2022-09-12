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
        this.health -= damage

    }
};

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(name, health);
        this.strength = strength;
        this.health = health
        this.name = name

    }
    receiveDamage(damage) {
        this.health -= damage
// from the beggining until this part, i collaborate after class with Berkai, Serhii and Martin.
        if (this.health !== 0) {
            return (`${this.name} has received ${damage} points of damage`);
        } else {
            return (`${this.name} has died in act of combat`);
        }
    }
    battleCry() {
        return ("Odin Owns You All!");
    }
};

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(name, health);
        this.health = health
        this.strength = strength

    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage
        if (this.health !== 0) {
            return (`A Saxon has received ${damage} points of damage`);
        } else {
            return ("A Saxon has died in combat");
        }
    }
}

class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }
    vikingAttack() {
       Saxon.receiveDamage() = Viking.this.strength
        if (Saxon.this.health === 0) {
            this.saxonArmy.pop(Saxon)
        }
    }

}