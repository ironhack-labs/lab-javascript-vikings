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
        super.receiveDamage(damage);
        return (this.health > 0) ?
            `${this.name} has received ${damage} points of damage` :
            `${this.name} has died in act of combat`;
    }
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        super.receiveDamage(damage);
        return (this.health > 0) ?
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
    vikingAttack() {
        return this.attack(true);
    }
    saxonAttack() {
        return this.attack(false);
    }
    attack(isVikings) {
        let attackerArmy, defenderArmy;
        if(isVikings) {
            attackerArmy = this.vikingArmy;
            defenderArmy = this.saxonArmy;
        }
        else {
            attackerArmy = this.saxonArmy;
            defenderArmy = this.vikingArmy;
        }
        const attacker = attackerArmy[Math.floor(Math.random() * attackerArmy.length)];
        const defenderIndex = Math.floor(Math.random() * defenderArmy.length);
        const defender = defenderArmy[defenderIndex];
        if (attacker.strength >= defender.health) defenderArmy.splice(defenderIndex, 1);
        return defender.receiveDamage(attacker.strength);
    }
    showStatus() {
        if (this.saxonArmy.length === 0) return "Vikings have won the war of the century!";
        if (this.vikingArmy.length === 0) return "Saxons have fought for their lives and survived another day...";
        return "Vikings and Saxons are still in the thick of battle.";
    }
}
