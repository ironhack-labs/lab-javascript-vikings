// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
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
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name

    }
    battleCry() { return (`Odin Owns You All!`) }
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) return (`${this.name} has received ${damage} points of damage`);
        return (`${this.name} has died in act of combat`)
    }



}

Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);

    }
}


class War { }
