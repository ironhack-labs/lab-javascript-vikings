// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength
    };
    attack() {
        return this.strength
    };
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {

        super(health, strength);
        this.name = name
    };
    receiveDamage(damage) {

        super.receiveDamage;
        if (this.health > 0) 
        return name + " has received" + damage + " points of damage"
    };
    battleCry() {
        return "Odin Owns You All!"
    }


}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {

        super(health, strength);
    };
    receiveDamage(damage) {

        super.receiveDamage;
        if (this.health > 0) 
        return name + " has received" + damage + " points of damage"
    };
    


}

// War
class War { }


class Animal {
    constructor(name, mainColor, sound) {
        this.name = name;
        this.mainColor = mainColor;
        this.sound = sound;
    }
    scream(intensity) {
        console.log(`${this.sound} ${'!'.repeat(intensity)}`);
    }
}

class Cat extends Animal {
    constructor(name, mainColor, sound, nbOfLegs) {

        super(name, mainColor, sound);
        this.nbOfLegs = nbOfLegs; // <== a new attribute, just for cats
    }
}

