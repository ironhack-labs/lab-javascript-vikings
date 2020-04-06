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
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        return `${this.name} has died in act of combat`;
    }

    battleCry() {
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
        return `A Saxon has died in combat`;
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

    armyAttack(attacker) {
        let defender = [];
        if (attacker === this.vikingArmy) {
            defender = this.saxonArmy;
        } else {
            defender = this.vikingArmy;
        }
        let attackerStrength = attacker[Math.floor(Math.random() * (attacker.length - 1))].attack();
        let defenderSoldier = defender[Math.floor(Math.random() * (defender.length - 1))];
        let defenderOutcome = defenderSoldier.receiveDamage(attackerStrength);
        if (defenderOutcome === `${defenderSoldier.name} has died in act of combat` || defenderOutcome === `A Saxon has died in combat`) {
            defender.splice(defenderSoldier);
        }
        return defenderOutcome;
    }

    vikingAttack() {
        return this.armyAttack(this.vikingArmy);
    }

    saxonAttack() {
        return this.armyAttack(this.saxonArmy);
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else
            return "Vikings and Saxons are still in the thick of battle.";
    }
}