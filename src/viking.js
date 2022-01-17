// Soldier
class Soldier {
    constructor(healthValue, strengthValue) {
        this.health = healthValue;
        this.strength = strengthValue;
    }  
    
    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}

const soldier = new Soldier(100, 100);


// Viking
class Viking extends Soldier {
    constructor (nameValue, healthValue, strengthValue) {
        super(healthValue, strengthValue);
        this.name = nameValue;
    }

    battleCry() {
        return `Odin Owns You All!`;
    }

    receiveDamage(damage) {
        const died = this.health -= damage;
        if (died) {
          return `${this.name} has received ${damage} points of damage`;
        } else {
          return `${this.name} has died in act of combat`;
        }
    }
}

const viking = new Viking('Thor', 90, 90);

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        const died = this.health -= damage;
        if (died) {
          return `A Saxon has received ${damage} points of damage`;
        } else {
          return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        let attackViking = this.vikingArmy.length;
        attackViking = Math.random(Math.round()) * Viking.length;
        return attackViking;
    }

    saxonAttack() {
        let saxonAttack = this.saxonArmy.length;
        saxonAttack = Math.random(Math.round()) * Saxon.length;
        return saxonAttack;
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`;
        } else if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`;
        } else {
            return `Vikings and Saxons are still in the thick of battle.`;
        }
    }
}

const war = new War();



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = { Soldier, Viking, Saxon, War };
}
