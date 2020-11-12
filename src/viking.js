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

};

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    battleCry() {
        return 'Odin Owns You All!';
    }
    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health > 0) return `${this.name} has received ${damage} points of damage`;
        return `${this.name} has died in act of combat`;
    }
};

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }
    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health > 0) return `A Saxon has received ${damage} points of damage`;
        return `A Saxon has died in combat`;
    }
};

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
        const randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
        const randomViking = Math.floor(Math.random()*this.vikingArmy.length);
        const result = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].attack());
        this.saxonArmy = this.saxonArmy.filter((saxon) => saxon.health > 0);
        return result;
    }

    saxonAttack() {
        const randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
        const randomViking = Math.floor(Math.random()*this.vikingArmy.length);
        const result = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].attack());
        this.vikingArmy = this.vikingArmy.filter((viking) => viking.health > 0);
        return result;
    }

    genericMethod(attackerArmy, attackedArmy) {
        const randomAttacker = Math.floor(Math.random()*this.attackerArmy.length);
        const randomAttacked = Math.floor(Math.random()*this.attackedArmy.length);
        const result = this.attackedArmy[randomAttacked].receiveDamage(this.attackerArmy[randomAttacker].attack());
        this.attackedArmy = this.attackedArmy.filter((soldier) => soldier.health > 0);
        return result;
    }

    showStatus() {
        if (this.saxonArmy.length === 0) return 'Vikings have won the war of the century!';
        else if (this.vikingArmy.length === 0) return 'Saxons have fought for their lives and survived another day...';
        return 'Vikings and Saxons are still in the thick of battle.'
    }

};