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

    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
}

const viking1 = new Viking();

// Saxon
class Saxon {}

// War
class War {}
