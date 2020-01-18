// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(strength) {
        this.health -= strength;
    }
}

// Viking
class Viking extends Soldier{
    constructor (name, health, strength) {
        super (health, strength);

        this.name = name;
    }

    receiveDamage(strength) {
        this.health -= strength

       return (this.health > 0) ? `${this.name} has received ${strength} points of damage` : `${this.name} has died in act of combat`;
    }

    battleCry() {
        return `Odin Owns You All!`;
    }


}

// Saxon
class Saxon extends Soldier{
    constructor (health, strength) {
        super (health, strength);
    }


    receiveDamage(strength) {
        this.health -= strength

       return (this.health > 0) ? `A Saxon has received ${strength} points of damage` : `A Saxon has died in combat`;
    }
}


// War
class War {}
