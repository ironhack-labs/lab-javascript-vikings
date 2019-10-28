// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength
    }
    receiveDamage(theDamage) {
        this.health -= theDamage
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
    battleCry() {
        (`Odin Owns You All!`)
    }
    receiveDamage(theDamage) {
        this.health -= theDamage
        if (this.health > 0) {
            return `${this.name} has received ${theDamage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
        this.health = health;
        this.strength = strength;
    }
    receiveDamage(theDamage) {
        this.health -= theDamage
        if (this.health > 0) {
            return ` A saxon has received ${theDamage} points of damage`;
        } else {
            return `A saxon has died in combat`;
        }
    }
}


// War
class war {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }
    addSaxon(saxon) {
        this.saxonArmy.push(Saxon)
    }
}
