// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
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
    // start of constructor
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;

    }



    // end of constructor
    receiveDamage(damage) {
        super.receiveDamage(damage)
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}
// end of viking class

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)

        super.attack


    }
    receiveDamage(damage) {
        super.receiveDamage(damage)
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
        else return `A Saxon has died in combat`;

    }

}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];

    }
    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }
    vikingAttack() {
        let rand = Math.floor(Math.random() * this.saxonArmy.length);
        let result = this.saxonArmy[rand].receiveDamage(this.vikingArmy[rand].strength);
        let updatedSaxonArmy = this.saxonArmy.filter(x => x.health > 0)
        this.saxonArmy = updatedSaxonArmy;
        return result;

    }
    saxonAttack() {
        let rand = Math.floor(Math.random() * this.vikingArmy.length);
        let result = this.vikingArmy[rand].receiveDamage(this.saxonArmy[rand].strength)
        let updatedVikingArmy = this.vikingArmy.filter(x => x.health > 0)
        this.vikingArmy = updatedVikingArmy;
        return result;


    }
    showStatus() {
        let numSaxons = this.saxonArmy.length;
        let numVikings = this.vikingArmy.length;
        if (numSaxons > 0 && numVikings > 0) { return "Vikings and Saxons are still in the thick of battle." }
        else if (numSaxons === 0) { return "Vikings have won the war of the century!" }
        return "Saxons have fought for their lives and survive another day...";
    }
}

