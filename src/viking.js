// Soldier
class Soldier {

    constructor(theHealth, theStrength) {

        this.health = theHealth;
        this.strength = theStrength;
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

    constructor(theName, theHealth, theStrength) {
        super(theHealth, theStrength)
        this.name = theName;
    } 

    receiveDamage(damage) {

        this.health -= damage;

        if (this.health <= 0) {
            return `${this.name} has died in act of combat`;
        } else {
            return `${this.name} has received ${damage} points of damage`;
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

        if (this.health <= 0) {
            return "A Saxon has died in combat";
        } else {
            return `A Saxon has received ${damage} points of damage`;
        }

    }

}

// War
class War {}
