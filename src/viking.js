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
class Viking extends Soldier{
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        super.receiveDamage(damage);
        return (this.health > 0) ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
    }
    
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        super.receiveDamage(damage);
        return (this.health > 0) ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
    }
}


// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        if (viking instanceof Viking) {
            this.#addSoldier(viking, this.vikingArmy);
        }
    }

    addSaxon(saxon) {
        if (saxon instanceof Saxon) {
            this.#addSoldier(saxon, this.saxonArmy);
        }
    }

    vikingAttack() {
        return this.#soldierAttack(this.vikingArmy, this.saxonArmy);
    }

    saxonAttack() {
        return this.#soldierAttack(this.saxonArmy, this.vikingArmy);
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }

    }

    #addSoldier(soldier, army) {
        army.push(soldier);
    }

    #soldierAttack(attackerArmy, defenderArmy) {
        const attacker = attackerArmy[Math.floor(Math.random() * attackerArmy.length)];
        const defenderIndex = Math.floor(Math.random() * defenderArmy.length);
        const defender = defenderArmy[defenderIndex];

        const result = defender.receiveDamage(attacker.strength);
        if (defender.health <= 0) {
            defenderArmy.splice(defenderIndex, 1);
        }
        return result;
    }
}
