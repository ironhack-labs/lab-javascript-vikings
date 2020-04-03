// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage (damage) {
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    // does this work???????????
    receiveDamage (damage) {
        this.health = this.health - damage;
        if (this.health <= 0) {
            console.log(`${this.name} has died in act of combat`);
        }
        else {
            console.log(`${this.name} has received ${this.damage} points of damage`); //NAMEDAMAGE

        }
    }
    battleCry() {
        return "Valhallaaaaaaaa!" // not gonna use the given one, this is better
    }
}
/*
// Saxon
class Saxon extends Soldier {
    super(health, strength);
    receiveDamage(damage) {
        this.health = this.health - damage;
        // prints for if saxon alive/dead
    }
}

// War
class War {}
*/