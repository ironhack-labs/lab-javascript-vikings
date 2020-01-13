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

        if (this.health <= 0) {
            return `${this.name} has died in act of combat`;
        }
        else {
            return `${this.name} has received ${damage} points of damage`;
        }
    }

    battleCry() {
        return 'Odin Owns You All!';
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;

        if (this.health <= 0) {
            return 'A Saxon has died in combat';
        }
        else {
            return `A Saxon has received ${damage} points of damage`;
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
        this.saxonArmy.push(saxon);
    }

    randomPosition(army) {
        return Math.floor(Math.random() * army.length);
    }

    vikingAttack() {
        const randomVikingPos = this.randomPosition(this.vikingArmy);
        const randomSaxonPos = this.randomPosition(this.saxonArmy);
        const damage = this.vikingArmy[randomVikingPos].attack();
        const saxon = this.saxonArmy[randomSaxonPos];
        const result = saxon.receiveDamage(damage);

        if (saxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonPos, 1);
        }

        return result;
    }

    saxonAttack() {
        const randomSaxonPos = this.randomPosition(this.saxonArmy);
        const randomVikingPos = this.randomPosition(this.vikingArmy);
        const damage = this.saxonArmy[randomSaxonPos].attack();
        const viking = this.vikingArmy[randomVikingPos];
        const result = viking.receiveDamage(damage);

        if (viking.health <= 0) {
            this.vikingArmy.splice(randomVikingPos, 1);
        }

        return result;
    }

    // Method to unify methods 'vikingAttack' and 'saxonAttack'
    armyAttack(attackerIsViking) {
        let attackingArmy;
        let defendingArmy;

        if (attackerIsViking) {
            attackingArmy = this.vikingArmy;
            defendingArmy = this.saxonArmy;
        }
        else {
            attackingArmy = this.saxonArmy;
            defendingArmy = this.vikingArmy;
        }

        const randomAttackerPos = this.randomPosition(attackingArmy);
        const randomDefenderPos = this.randomPosition(defendingArmy);
        const damage = attackingArmy[randomAttackerPos].attack();
        const defender = defendingArmy[randomDefenderPos];
        const result = defender.receiveDamage(damage);

        if (defender.health <= 0) {
            defendingArmy.splice(randomDefenderPos, 1);
        }

        return result;
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!';
        }
        else if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...'
        }
        else {
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }
}