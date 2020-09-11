// Soldier
class Soldier {

    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    };

    attack() {
        return this.strength;
    };

    receiveDamage(damage) {
        this.health -= damage;
    };

};

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength);
        this.name = name;
    };

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    };

    battleCry() {
        return "Odin Owns You All!";
    };
};

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
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
        this.saxonArmy.push(saxon)
    }

    vikingAttack1() {
        let randomNumber1 = Math.floor(Math.random()*this.saxonArmy.length)
        let chosenSaxon = this.saxonArmy[randomNumber1];
        let randomNumber2 = Math.floor(Math.random()*this.saxonArmy.length)
        let chosenViking = this.vikingArmy[randomNumber2];

        let result = chosenSaxon.receiveDamage(chosenViking.strength)

        if (chosenSaxon.health <= 0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(chosenSaxon), 1);
        }

        return result
    }

    saxonAttack1() {
        let randomNumber1 = Math.floor(Math.random()*this.saxonArmy.length)
        let chosenSaxon = this.saxonArmy[randomNumber1];
        let randomNumber2 = Math.floor(Math.random()*this.saxonArmy.length)
        let chosenViking = this.vikingArmy[randomNumber2];

        let result = chosenViking.receiveDamage(chosenSaxon.strength)

        if (chosenViking.health <= 0) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(chosenViking), 1);
        }

        return result
    
    }

    saxonAttack() {
       return this.attack(this.vikingArmy, this.saxonArmy);
    }

    vikingAttack() {
        return this.attack(this.saxonArmy, this.vikingArmy);
    }

    // generic attack method

    attack(defenderArmy, attackerArmy) {
        let randomNumber1 = Math.floor(Math.random()*attackerArmy.length)
        let attacker = attackerArmy[randomNumber1];
        let randomNumber2 = Math.floor(Math.random()*defenderArmy.length)
        let defender = defenderArmy[randomNumber2];

        let result = defender.receiveDamage(attacker.strength)

        if (defender.health <= 0) {
            defenderArmy.splice(defenderArmy.indexOf(defender), 1);
        }

        return result

    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }

}
