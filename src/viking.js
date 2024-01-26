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
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
        this.health = health;
        this.strength = strength;
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        }
        else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
        this.health = health;
        this.strength = strength;
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        }
        else {
            return `A Saxon has died in combat`
        }
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
        this.addViking(vikingObj);
        this.addSaxon(saxonObj);
        const result = saxonObj.receiveDamage(vikingObj.strength);
        if (saxonObj.health === 0) {
            this.saxonArmy.splice(indexOf(saxonObj), 1);
        }
        return result;

    }

    saxonAttack() {

        this.addViking(vikingObj);
        this.addSaxon(saxonObj);
        const result = vikingObj.receiveDamage(saxonObj.strength);
        if (vikingObj.health === 0) {
            this.vikingArmy.splice(indexOf(vikingObj), 1);
        }
        return result;

    }
    showStatus() {
        console.log(this.vikingArmy)
        if (this.saxonArmy.length === 0) {
            console.log("Vikings have won the war of the century!")
            return "Vikings have won the war of the century!";
        }
        else if (this.vikingArmy.length === 0) {
            console.log("Saxons have won the war of the century!")
            return "Saxons have fought for their lives and survived another day..."
        }
        else {
            console.log("Saxons and viking have won the war of the century!")
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
const vikingObj = new Viking();
const saxonObj = new Saxon();

