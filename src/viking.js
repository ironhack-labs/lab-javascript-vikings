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
        super.receiveDamage(damage);
        if (this.health <= 0) {
            return `${this.name} has died in act of combat`;
        } else {
            return `${this.name} has received ${damage} points of damage`;
        }
    }
    battleCry() {
        return `Odin Owns You All!`;
    }
}


// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }
    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health <= 0) {
            return `A Saxon has died in combat`;
        } else {
            return `A Saxon has received ${damage} points of damage`;
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }
    vikingAttack() {

    const randomSaxon = Math.floor(Math.random(this.saxonArmy.length));
    const damage =
    receiveDamage() 

    }

// should make Saxon receiveDamage() equal to the strength of a Viking
// should remove dead saxons from the army
// should return result of calling receiveDamage() of a Saxon with the strength of a Viking

    saxonAttack() { }

// should make a Viking receiveDamage() equal to the strength of a Saxon
// should remove dead vikings from the army
// should return result of calling receiveDamage() of a Viking with the strength of a Saxon

    showStatus() { }

// should return "Vikings have won the war of the century!", if the Saxons array is empty
// should return "Saxons have fought for their lives and survived another day...", if the Vikings array is empty
// should return "Vikings and Saxons are still in the thick of battle.", if there are still both Vikings and Saxons

}


const viking01 = new Viking(`Viking 01`,100,20);
// name, health, strength
const saxon01 = new Saxon(80,15);
// health, strength

const war = new War();