// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
let Viking = class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
    }
    battleCry() {
        return `Odin Owns You All!`
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
}

const vikingUnit = new Viking("Ragnar", 300, 500);

// Saxon
let Saxon = class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

const saxonUnit = new Saxon("Smith", 100, 50);

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
        var random = Math.floor(Math.random() * this.saxonArmy.length)
        var randomSaxon = this.saxonArmy[random];
        var damage = this.vikingArmy[random].strength;
        var damageToSaxon = randomSaxon.receiveDamage(damage);
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(random);
        }
        return damageToSaxon;
    }

    saxonAttack() {
        var random = Math.floor(Math.random() * this.saxonArmy.length)
        var randomViking = this.vikingArmy[random];
        var damage = this.saxonArmy[random].strength;
        var damageToViking = randomViking.receiveDamage(damage);
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(random);
        }
        return damageToViking;
    }

    showStatus() {
        if (this.saxonArmy.length == 0) {
            return `Vikings have won the war of the century!`
        } else if (this.vikingArmy.length == 0) {
            return `Saxons have fought for their lives and survive another day...`
        } else {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }
}


const war1 = new War()
war1.addSaxon(saxonUnit)
war1.addViking(vikingUnit)
console.log(war1)