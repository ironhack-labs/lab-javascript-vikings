class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(strength) {
        this.health = this.health - strength;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(strength) {
        super.receiveDamage(strength)
        if (this.health > 0) {
            return `${this.name} has received ${strength} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(strength) {
        super.receiveDamage(strength)
        if (this.health > 0) {
            return `A Saxon has received ${strength} points of damage`;
        } else {
            return `A Saxon has died in combat`;
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

    launchAttack(attacked, attacker) {
        if (attacked.length > 0) {
            let t = attacked[0].receiveDamage(attacker[0].strength)
            attacked.shift();
            return t;
        } else {
            return `There are no opponents`
        }
    }

    vikingAttack() {
        return this.launchAttack(this.saxonArmy, this.vikingArmy)
    }
    saxonAttack() {
        return this.launchAttack(this.vikingArmy, this.saxonArmy)
    }
    showStatus() {
        if (this.saxonArmy[0] === undefined) {
            return `Vikings have won the war of the century!`;
        } else if (this.vikingArmy[0] === undefined) {
            return `Saxons have fought for their lives and survived another day...`
        } else {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }
}

// let vik = new Viking("Jose", 100, 60)
// let sax = new Saxon("Bert", 66)
// let v = new War
// v.addViking(vik)
// v.addSaxon(sax)
// console.log(v)
// console.log(sax)
// console.log(v.saxonAttack())