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
        this.health = this.health - damage;
    }
}

// Viking
//by default has all the same attributes than Soldier but with one more property (name) but one more method (battleCry())
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength); // 'super' MUST BE in FIRST POSITION and is calling the function of soldier
        // we could either write super(20, 9) = means : all the viking are initialized with 20 of health and 9 of strength
        // with 'super', Viking gets all the attributes and methods of the Soldiers class
        this.name = name;
    }
    // no need to re-implement attack() method: already acquired from Soldier by 'extends'
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else return `${this.name} has died in act of combat`;
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
    // no need to re-implement attack() method: already acquired from Soldier by 'extends'
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else return `A Saxon has died in combat`;
    }
}

// War
class War {}