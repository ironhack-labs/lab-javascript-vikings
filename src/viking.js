// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health;
        this.strength = strength
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength);
        this.name = name
    }
    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = []
    }
    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }
    vikingAttack() {
        let result = this.saxonArmy[Math.floor(Math.random() * (this.saxonArmy.length))].receiveDamage(this.vikingArmy[Math.floor((Math.random() * (this.vikingArmy.length)))].strength);
        this.saxonArmy = this.saxonArmy.filter(function (saxon) {
            return saxon.health > 0
        });
        return result
    }
    saxonAttack() {
        let result = this.vikingArmy[Math.floor(Math.random() * (this.vikingArmy.length))].receiveDamage(this.saxonArmy[Math.floor((Math.random() * (this.saxonArmy.length)))].strength);
        this.vikingArmy = this.vikingArmy.filter(function (viking) {
            return viking.health > 0
        });
        return result
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!'
        } else if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...'
        } else {
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }
}
