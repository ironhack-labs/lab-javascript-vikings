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
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) return `${this.name} has received ${damage} points of damage`
        return `${this.name} has died in act of combat`
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) return `A Saxon has received ${damage} points of damage`
        return "A Saxon has died in combat";
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(vikingObj) {
        this.vikingArmy.push(vikingObj)
    }
    addSaxon(saxonObj) {
        this.saxonArmy.push(saxonObj)
    }
    vikingAttack() {
        return this.attack(this.vikingArmy, this.saxonArmy)
    }
    saxonAttack() {
        return this.attack(this.saxonArmy, this.vikingArmy)
    }

    attack(attackingArmy, defendingArmy) {
        const res = defendingArmy[0].receiveDamage(attackingArmy[0].strength)
        if (defendingArmy[0].health <= 0) defendingArmy.shift()
        return res
    }

    showStatus() {
        if (!this.saxonArmy.length) return "Vikings have won the war of the century!";
        if (!this.vikingArmy.length) return "Saxons have fought for their lives and survived another day...";
        return "Vikings and Saxons are still in the thick of battle.";
    }
}