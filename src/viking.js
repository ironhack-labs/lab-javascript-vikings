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
        const res = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength)
        if (this.saxonArmy[0].health <= 0) this.saxonArmy.shift()
        return res
    }
    saxonAttack() {
        const res = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength)
        if (this.vikingArmy[0].health <= 0) this.vikingArmy.shift()
        return res
    }
    showStatus() {}
}