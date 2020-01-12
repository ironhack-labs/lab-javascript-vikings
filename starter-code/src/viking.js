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
        return this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
    }
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        return this.health > 0 ? `A Saxon has received ${damage} points of damage` : "A Saxon has died in combat";
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
        const viking = this._getRandomSoldierFromArmy(this.vikingArmy);
        const saxon = this._getRandomSoldierFromArmy(this.saxonArmy);

        const response = saxon.receiveDamage(viking.strength);
        this.saxonArmy = this._clearDeathSoldiersFromArmy(this.saxonArmy);

        return response;
    }
    saxonAttack() {
        const viking = this._getRandomSoldierFromArmy(this.vikingArmy);
        const saxon = this._getRandomSoldierFromArmy(this.saxonArmy);

        const response = viking.receiveDamage(saxon.strength);
        this.vikingArmy = this._clearDeathSoldiersFromArmy(this.vikingArmy);

        return response;
    }
    showStatus() {
        if (!this.saxonArmy.length) return "Vikings have won the war of the century!";
        if (!this.vikingArmy.length) return "Saxons have fought for their lives and survived another day...";

        return "Vikings and Saxons are still in the thick of battle.";
    }
    _getRandomSoldierFromArmy(army) {
        return army[Math.floor(Math.random() * (army.length + 1))];
    }
    _clearDeathSoldiersFromArmy(army) {
        return army.filter(soldier => soldier.health > 0);
    }
}
