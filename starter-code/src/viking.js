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

        if(this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }

        return `${this.name} has died in act of combat`;
    }

    battleCry() {
       return 'Odin Owns You All!'
    }

}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;

        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }

        return 'A Saxon has died in combat';
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

    attack(who) {
        let vikingIndex = Math.floor(this.vikingArmy.length - 1 * Math.random());
        let viking = this.vikingArmy[vikingIndex];

        let saxonIndex = Math.floor(this.saxonArmy.length - 1 * Math.random());
        let saxon = this.saxonArmy[saxonIndex];

        if (who === 'viking') {
            if (saxon.health - viking.strength <= 0) {
                this.saxonArmy.splice(saxonIndex, 1);
            }

            return saxon.receiveDamage(viking.strength);

        } else {
            if (viking.health - saxon.strength <= 0) {
                this.vikingArmy.splice(vikingIndex, 1);
            }

            return viking.receiveDamage(saxon.strength);
        }
    }

    vikingAttack() {
        return this.attack('viking');
    }

    saxonAttack() {
        return this.attack('saxon');
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!';
        }

        if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...'
        }

        if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
            return 'Vikings and Saxons are still in the thick of battle.';
        }
    }
}
