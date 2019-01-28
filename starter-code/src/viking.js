// Soldier
class Soldier {

    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() { return this.strength };

    receiveDamage(damage) { return void (this.health -= damage) };
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

    battleCry() { return `Odin Owns You All!` };
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
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    
    _selectFrom(army) { return Math.floor(Math.random() * army.length) };
    
    _attack(attackers, defenders) {
        
        const defenderIndex = this._selectFrom(defenders);
        
        const defender = defenders[defenderIndex];
        
        const result = defender.receiveDamage(attackers[this._selectFrom(attackers)].attack());

        if (defender.health <= 0) {
            defenders.splice(defenderIndex, 1);
        }

        return result;
    }

    addViking(viking) { return void this.vikingArmy.push(viking); }

    addSaxon(saxon) { return void this.saxonArmy.push(saxon); }

    vikingAttack() { return this._attack(this.vikingArmy, this.saxonArmy); }

    saxonAttack() { return this._attack(this.saxonArmy, this.vikingArmy); }

    showStatus() {

        if (!this.saxonArmy.length) {
            return `Vikings have won the war of the century!`;
        }

        if (!this.vikingArmy.length) {
            return `Saxons have fought for their lives and survive another day...`;
        }

        if (!!this.vikingArmy.length && !!this.saxonArmy.length) {
            return `Vikings and Saxons are still in the thick of battle.`
        }

        throw new Error('There is no one left on the battle field!');
    }
}
