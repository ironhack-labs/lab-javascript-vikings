// Soldier
class Soldier {
    // Constructor
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    // Method Attack
    attack () {
        return this.strength;
    }

    // Method receiveDamage
    receiveDamage (theDamage) {
        this.health -= theDamage;
    }

}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
     
    receiveDamage (theDamage) {
        super.receiveDamage(theDamage)
        return this.health <= 0 ? `${this.name} has died in act of combat` : `${this.name} has received ${theDamage} points of damage`
    }

    battleCry () {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage (theDamage) {
        super.receiveDamage(theDamage)
        return this.health <= 0 ? `A Saxon has died in combat` : `A Saxon has received ${theDamage} points of damage`
    }

}

// War
class War {}
