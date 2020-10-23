// this is the class for Soldier

class Soldier {
    constructor(health, strength) {
        //Those are the properties
        this.health = health;
        this.strength = strength;
    }


    // those are the methods for the Soldier

    // attack is the first method
    attack() {
        return this.strength;
    }

    //recieveDamage is the second method
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return this.name + " has received " + damage + " points of damage";
        } else {
            return this.name + " has died in act of combat";
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
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return "A Saxon has received " + damage + " points of damage";
        } else {
            return "A Saxon has died in act of combat";
        }
    }
}

// War
class War {}


let Soldier1 = new Soldier('100', '50')