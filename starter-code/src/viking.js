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
    constructor(name, healthArg, strenghtArg) {
        super(healthArg, strenghtArg)
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        let output = "";
        if (this.health > 0) {
            output = this.name + " has received " + damage + " points of damage";
        } else {
            output = this.name + " has died in act of combat";
        }
        return output;
    }

    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }

    receiveDamage(damage) {
        this.health -= damage;
        let output = "";
        if (this.health > 0) {
            output = "A Saxon has received " + damage + " points of damage";
        } else {
            output = "A Saxon has died in combat";
        }
        return output;
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
        const randViking = Math.floor(Math.random() * this.vikingArmy.length);
        const randSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        const attackerViking = this.vikingArmy[randViking];
        const defenderSaxon = this.saxonArmy[randSaxon];
        const result = defenderSaxon.receiveDamage(attackerViking.strength);
        if (defenderSaxon.health <= 0) this.saxonArmy.splice(randSaxon, 1);
        return result;
    }
    saxonAttack() {
        const randViking = Math.floor(Math.random() * this.vikingArmy.length);
        const randSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        const defenderViking = this.vikingArmy[randViking];
        const attackerSaxon = this.saxonArmy[randSaxon];
        const result = defenderViking.receiveDamage(attackerSaxon.strength);
        if (defenderViking.health <= 0) this.vikingArmy.splice(randViking, 1);
        return result;
    }
    showStatus() {
        if (!this.saxonArmy.length) return "Vikings have won the war of the century!"
        if (!this.vikingArmy.length) return "Saxons have fought for their lives and survive another day..."
        return "Vikings and Saxons are still in the thick of battle."
    }
}