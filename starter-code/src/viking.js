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
        this.health = this.health - damage
    }
}


// Viking
//receiveDAMAGE
// receiveDamage() method
// should be a function
// should receive 1 argument (the damage)
// should remove the received damage from the health property
// should return "NAME has received DAMAGE points of damage", if the Viking is still alive
// should return "NAME has died in act of combat", if the Viking dies
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return (`${this.name} has received ${this.health} points of damage`);
        }
        else if (this.health < 0) {
            return (`${this.name} has died in act of combat`)
        }

    }
    battleCry() {
        return "Odin Owns You All!"

    }
}


// Saxon
// should inherit from Soldier
// constructor function
// should receive 2 arguments (health & strength)
// should receive the health property as its 1st argument
// should receive the strength property as its 2nd argument
//should return "A Saxon has received DAMAGE points of damage", if the Saxon is still alive
//should return "A Saxon has died in combat", if the Saxon dies
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }
    attack() {

    }
    receiveDamage() {
        if (this.health > 0) {
            return `A Saxon has received DAMAGE points of damage`;

        }
    }
}

// War
class War { }
