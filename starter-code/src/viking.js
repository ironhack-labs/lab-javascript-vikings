// Soldier
class Soldier {
    constructor(healthArg, strengthArg) {
        this.health = healthArg;
        this.strength = strengthArg;
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

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        super.receiveDamage(damage);

        return this.health > 0 ?
            `${this.name} has received ${damage} points of damage` :
            `${this.name} has died in act of combat`;
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

        return this.health > 0 ?
            `A Saxon has received ${damage} points of damage` :
            `A Saxon has died in combat`;
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

    _soldierAlive(npc) {
        return npc.health > 0;
    }

    vikingAttack() {
        const result = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);
        this.saxonArmy = this.saxonArmy.filter(this._soldierAlive);

        return result;
    }

    saxonAttack() {
        const result = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);
        this.vikingArmy = this.vikingArmy.filter(this._soldierAlive);

        return result;
    }

    showStatus() {
        let result = "";
        if (!this.saxonArmy.length) {
            result = "Vikings have won the war of the century!";
        } else if (!this.vikingArmy.length) {
            result = "Saxons have fought for their lives and survive another day...";
        } else {
            result = "Vikings and Saxons are still in the thick of battle.";
        }

        return result;
    }
}