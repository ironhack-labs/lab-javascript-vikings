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
        return void (this.health -= damage);
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
            return `${this.name} has received ${damage} points of damage`
        }
        
        return `${this.name} has died in act of combat`;
    }

    battleCry() {
        return `Odin Owns You All!`
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
            return `A Saxon has received ${damage} points of damage`
        }
        
        return `A Saxon has died in combat`;
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = this.saxonArmy = [];
    }
    
    _selectFrom(army) {
        return Math.floor(Math.random() * army.length);
    }

    addViking(soldier) {
        if (soldier instanceof Viking) return void this.vikingArmy.push(soldier);
        throw new Error('hey! thats not a viking');
    }

    addSaxon(soldier) {
        if (soldier instanceof Saxon) return void this.saxonArmy.push(soldier);
        throw new Error('hey! thats not a saxon');
    }

    _attack(attackers, defenders) {

        const attackerIndex = this._selectFrom(attackers);
        
        const defenderIndex = this._selectFrom(defenders);
        
        const defender = defenders[defenderIndex];
        
        const damage = attackers[attackerIndex].strength;
        
        const result = defender.receiveDamage(damage);

        console.log(defenders);

        if (defender.health <= 0) {
            defenders.splice(defenderIndex, 1);
        }

        console.log(defenders);
        
        return result;
    }

    vikingAttack() {
        return this._attack(this.vikingArmy, this.saxonArmy);
    }

    saxonAttack() {
        return this._attack(this.saxonArmy, this.vikingArmy);
    }

    showStatus() {

        if (!this.saxonArmy.length && !!this.vikingArmy.length) {
            return `Vikings have won the war of the century!`;
        }

        if (!this.vikingArmy.length && !!this.saxonArmy.length) {
            return `Saxons have fought for their lives and survive another day...`;
        }

        if (!!this.vikingArmy.length && !!this.saxonArmy.length) {
            return `Vikings and Saxons are still in the thick of battle.`
        }

        throw new Error('There is no one left on the battle field!');
    }
}
