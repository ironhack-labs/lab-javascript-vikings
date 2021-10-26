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
        return this.health > 0
            ? `${this.name} has received ${damage} points of damage`
            : `${this.name} has died in act of combat`;
    }

    battleCry() {
        return 'Odin Owns You All!';
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        return this.health > 0
            ? `A Saxon has received ${damage} points of damage`
            : `A Saxon has died in combat`;
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
        return this.war(this.vikingArmy, this.saxonArmy)
    }

    saxonAttack() {
        return this.war(this.saxonArmy, this.vikingArmy)
    }

    war(attackers, attacked) {
        const soldier1 = this.randomSoldier(attackers);
        const soldier2 = this.randomSoldier(attacked);

        const msg = soldier2.receiveDamage(soldier1.strength);
        this.removeDiedSoldiers();
        return msg;
    }

    showStatus() {
        return this.saxonArmy.length === 0 ? "Vikings have won the war of the century!"
            : this.vikingArmy.length === 0 ? "Saxons have fought for their lives and survived another day..."
                : "Vikings and Saxons are still in the thick of battle.";
    }

    randomSoldier(soldiers) {
        return soldiers[Math.floor(soldiers.length * Math.random())];
    }

    removeDiedSoldiers() {
        this.saxonArmy = this.saxonArmy.filter(soldier => soldier.health > 0);
        this.vikingArmy = this.vikingArmy.filter(soldier => soldier.health > 0);
    }
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = {Soldier, Viking, Saxon, War};
}
