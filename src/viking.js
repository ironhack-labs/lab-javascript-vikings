// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack () {
        return this.strength;
    }

    receiveDamage (damage) {
        this.health -= damage;
    }
}


// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super (health, strength);
        this.name = name; 
    }

    receiveDamage (damage) {
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry () {
        return 'Odin Owns You All!';
    }
}
    

// Saxon
class Saxon extends Soldier {
    receiveDamage (damage) {
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return 'A Saxon has died in combat';
        }
    }
}


// War
class War {
    constructor () {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking (newViking) {
        this.vikingArmy.push(newViking);
    }

    addSaxon (newSaxon) {
        this.saxonArmy.push(newSaxon);
    }

    armyAttack (defendingArmy, attackingArmy) {
        const randomDefender = defendingArmy[Math.floor(Math.random() * defendingArmy.length)];

        const randomAttacker = attackingArmy[Math.floor(Math.random() * attackingArmy.length)];

        const result = randomDefender.receiveDamage(randomAttacker.strength);

        if (randomDefender.health <= 0) {
            const defenderIndex = defendingArmy.indexOf(randomDefender);
            if (defenderIndex > -1) {
                defendingArmy.splice(defenderIndex, 1);
            }
        }

        return result;
    }

    vikingAttack () {
        return this.armyAttack(this.saxonArmy, this.vikingArmy);
    }

    saxonAttack () {
        return this.armyAttack(this.vikingArmy, this.saxonArmy);
    }

    showStatus () {
        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!';
        } else if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...';
        } else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
            return 'Vikings and Saxons are still in the thick of battle.';
        }
    }  
}
