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
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) return `${this.name} has received ${damage} points of damage`;
        else return `${this.name} has died in act of combat`;
    }
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) return `A Saxon has received ${damage} points of damage`;
        else return 'A Saxon has died in combat';
    }
}

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
        const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const saxson = this.saxonArmy[saxonIndex];
        const viking = this.vikingArmy[vikingIndex];
        const attackResult = saxson.receiveDamage(viking.attack());
        if (attackResult === 'A Saxon has died in combat') {
            this.saxonArmy.splice(saxonIndex, 1);
        }
        return attackResult;
    }
    saxonAttack() {
        const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const saxson = this.saxonArmy[saxonIndex];
        const viking = this.vikingArmy[vikingIndex];
        const attackResult = viking.receiveDamage(saxson.attack());
        if (attackResult === `${viking.name} has died in act of combat`) {
            this.vikingArmy.splice(vikingIndex, 1);
        }
        return attackResult;
    }
    attackAction(attacker) {
        const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const saxson = this.saxonArmy[saxonIndex];
        const viking = this.vikingArmy[vikingIndex];
        let attackResult;
        if (attacker === 'viking') {
            attackResult = saxson.receiveDamage(viking.attack());
            if (attackResult === 'A Saxon has died in combat') {
                this.saxonArmy.splice(saxonIndex, 1);
            }
        }
        else {
            attackResult = viking.receiveDamage(saxson.attack());
            if (attackResult === `${viking.name} has died in act of combat`) {
                this.vikingArmy.splice(vikingIndex, 1);
            }
        }
        return attackResult;
    }
    showStatus() {
        if (!this.saxonArmy.length) {
            return "Vikings have won the war of the century!"
        }
        if (!this.vikingArmy.length) {
            return "Saxons have fought for their lives and survived another day..."
        }
        return "Vikings and Saxons are still in the thick of battle."
    }

}
