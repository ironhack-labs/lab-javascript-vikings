// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(theDamage) {
        this.health = this.health - theDamage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(theDamage) {
        this.health = this.health - theDamage;
        if (this.health > 0) {
            return `${this.name} has received ${theDamage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`
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
    receiveDamage(theDamage) {
        this.health = this.health - theDamage;
        if (this.health > 0) {
            return `A Saxon has received ${theDamage} points of damage`;
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(aViking) {
        this.vikingArmy.push(aViking);
    }
    addSaxon(aSaxon) {
        this.saxonArmy.push(aSaxon);
    }
    vikingAttack() {
        let vi = Math.floor(this.vikingArmy.length * Math.random());
        let si = Math.floor(this.saxonArmy.length * Math.random());
        let vikingAttackResult = this.saxonArmy[si].receiveDamage(this.vikingArmy[vi].strength);
        if (this.saxonArmy[si].health <= 0) {
            this.saxonArmy.splice(si, 1);
        }
        return vikingAttackResult;
    }
    saxonAttack() {
        let vi = Math.floor(this.vikingArmy.length * Math.random());
        let si = Math.floor(this.saxonArmy.length * Math.random());
        let saxonAttackResult = this.vikingArmy[vi].receiveDamage(this.saxonArmy[si].strength);
        if (this.vikingArmy[vi].health <= 0) {
            this.vikingArmy.splice(vi, 1);
        }
        return saxonAttackResult;
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!';
        } else if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...';
        } else {
            return 'Vikings and Saxons are still in the thick of battle.';
        }
    }
}