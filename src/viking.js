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

// Viking extends soldier and also has its own name.
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    //receiveDamage extends from soldier but add two returns according viking health.
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        return `${this.name} has died in act of combat`;
    }
    //Add the battleCry method
    battleCry() {
        return 'Odin Owns You All!'
    }
}

// Saxon extends soldier too, but don't have name like viking
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }
    //Here , receiveDamage it's like in the viking method, with only changes the name returned.
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
        return `A Saxon has died in combat`
    }

}

class War {
    // Create two empty array for put the new soldiers
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
        // newAttack stores the attack method of a random Viking
        let newAttack = this.vikingArmy[this.getRandomSoldier('viking')].attack();
        // saxon stores only a random Saxon
        let saxon = this.saxonArmy[this.getRandomSoldier('saxon')];
        // We evaluate if the hit kills the Saxon. If return true, remove this Saxon from the array.
        if (saxon.health - newAttack <= 0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(saxon), 1);
            return saxon.receiveDamage(newAttack);
        } // If the hit return false, only return the action.
        return saxon.receiveDamage(newAttack);
    }
    saxonAttack() {
        // Works like vikingAttack but changing the army
        let newAttack = this.saxonArmy[this.getRandomSoldier('saxon')].attack();
        let viking = this.vikingArmy[this.getRandomSoldier('viking')];
        //* If the saxon is dead, we remove from the array.
        if (viking.health - newAttack <= 0) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(viking), 1);
            return viking.receiveDamage(newAttack);
        } else {
            return viking.receiveDamage(newAttack);
        }
    }
    showStatus() {
        // showStatus evaluates the status of war. Evaluates different scenaries and return a string in consecuence
        if (!this.saxonArmy.length) {
            return 'Vikings have won the war of the century!';
        }
        if (!this.vikingArmy.length) {
            return 'Saxons have fought for their lives and survived another day...';
        }
        if (this.vikingArmy.length === 1 && this.saxonArmy.length === 1) {
            return 'Vikings and Saxons are still in the thick of battle.';
        }
    }
    getRandomSoldier(army) {
        // This method it's used to select a random soldier from army depends of the input valor.
        if (army == 'viking') {
            return Math.floor(Math.random() * Math.floor(this.vikingArmy.length));
        } else {
            return Math.floor(Math.random() * Math.floor(this.saxonArmy.length));
        }

    }
}

