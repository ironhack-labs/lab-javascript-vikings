// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() { return this.strength; }

    receiveDamage(damage) { this.health -= this.health - damage; }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) { return `${this.name} has received ${damage} points of damage`; }
        if (this.health <= 0) { return `${this.name} has died in act of combat`; }
    }

    battleCry() { return 'Odin Owns You All!'; }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) { return `A Saxon has received ${damage} points of damage`; }
        return 'A Saxon has died in combat';
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) { this.vikingArmy.push(viking); }

    addSaxon(saxon) { this.saxonArmy.push(saxon); }

    vikingAttack() {
        this.attackTurn('Viking');
        /* let attacker = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let attacked = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let result = attacked.receiveDamage(attacker.strength);
        if (result.includes('died')) {
            let ind = this.saxonArmy.indexOf(attacked);
            this.saxonArmy.splice(ind, 1);
        }
        return result; */
    }

    saxonAttack() {
        this.attackTurn('Saxon');
        /* let attacker = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let attacked = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let result = attacked.receiveDamage(attacker.strength);
        if (result.includes('died')) {
            let ind = this.vikingArmy.indexOf(attacked);
            this.vikingArmy.splice(ind, 1);
        }
        return result; */
    }

    showStatus() {
        if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) { return 'Vikings and Saxons are still in the thick of battle.'; }
        if (this.vikingArmy.length === 0) { return 'Saxons have fought for their lives and survived another day...'; }
        if (this.saxonArmy.length === 0) { return 'Vikings have won the war of the century!'; }
    }

    attackTurn(soldier) {
        if (soldier === 'Viking') {
            const attacker = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
            const attacked = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
            const result = attacked.receiveDamage(attacker.strength);
            if (result.includes('died')) {
                const ind = this.saxonArmy.indexOf(attacked);
                this.saxonArmy.splice(ind, 1);
            }
            return result;
        }
        if (soldier === 'Saxon') {
            const attacker = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
            const attacked = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
            const result = attacked.receiveDamage(attacker.strength);
            if (result.includes('died')) {
                const ind = this.vikingArmy.indexOf(attacked);
                this.vikingArmy.splice(ind, 1);
            }
            return result;
        }
        // Added this method to use inside the viking/saxonAttack method, but it isn't abstracted enough, more work is needed
    }
}
