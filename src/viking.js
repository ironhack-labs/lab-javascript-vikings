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
        if (this.health <= 0) {
            return `${this.name} has died in act of combat`;
        } else {
            return `${this.name} has received ${damage} points of damage`;
        }
    }

    battleCry() {
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            return `A Saxon has died in combat`;
        } else {
            return `A Saxon has received ${damage} points of damage`;
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

    attack(attackerArmy, defenderArmy) {
        const randomAttackerIndex = Math.floor(Math.random() * attackerArmy.length);
        const randomDefenderIndex = Math.floor(Math.random() * defenderArmy.length);
        const randomAttacker = attackerArmy[randomAttackerIndex];
        const randomDefender = defenderArmy[randomDefenderIndex];

        const damageDealt = randomAttacker.attack();
        const result = randomDefender.receiveDamage(damageDealt);

        if (randomDefender.health <= 0) {
            defenderArmy.splice(randomDefenderIndex, 1);
        }

        return result;
    }

    vikingAttack() {
        return this.attack(this.vikingArmy, this.saxonArmy);
    }

    saxonAttack() {
        return this.attack(this.saxonArmy, this.vikingArmy);
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
}
