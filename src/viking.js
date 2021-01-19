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
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;

        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry() {
        return 'Odin Owns You All!';
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;

        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
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
    vikingAttack() {
        const viking1 = Math.floor(Math.random() * this.vikingArmy.length);
        const saxon1 = Math.floor(Math.random() * this.vikingArmy.length);
        const damageViking = this.saxonArmy[saxon1].receiveDamage(this.vikingArmy[viking1].attack());

        if (this.saxonArmy[saxon1].health <= 0) {
            this.saxonArmy.pop(saxon1);
        }
        return damageViking;
    }
    saxonAttack() {
        const viking1 = Math.floor(Math.random() * this.vikingArmy.length);
        const saxon1 = Math.floor(Math.random() * this.vikingArmy.length);
        const damageSaxon = this.vikingArmy[viking1].receiveDamage(this.saxonArmy[saxon1].attack());

        if (this.vikingArmy[viking1].health <= 0) {
            this.vikingArmy.pop(viking1);
        }
        return damageSaxon;
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!';
        } else if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...';
        } else {
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }
}
