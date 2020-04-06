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
        this.health -= damage;
    }

}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        return `${this.name} has died in act of combat`;
    }
    battleCry() {
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
        return `A Saxon has died in combat`
    }

}

class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking) {
        let newViking = new Viking('Harald', 300, 150);
        this.vikingArmy.push(newViking);
    }
    addSaxon(saxon) {
        let newSaxon = new Saxon(60, 25);
        this.saxonArmy.push(newSaxon);
    }
    vikingAttack() {
        let newAttack = this.vikingArmy[this.getRandomViking()].attack();
        let saxon = this.saxonArmy[this.getRandomSaxon()];
        saxon.receiveDamage(newAttack);
        //* If the saxon is dead, we remove from the array.
        if (saxon.health < 0) {
            this.saxonArmy.splice(saxon, 1);
        }
        return saxon.receiveDamage(newAttack);
    }
    saxonAttack() {

    }
    showStatus() {

    }
    getRandomViking() {
        return Math.floor(Math.random() * Math.floor(this.vikingArmy.length));
    }
    getRandomSaxon() {
        return Math.floor(Math.random() * Math.floor(this.saxonArmy.length));
    }
}

