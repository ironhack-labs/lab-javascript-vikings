// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    
    attack() {
        return this.strength
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
        if(this.health <= 0) {
            return `${this.name} has died in act of combat`;
        }
        return `${this.name} has received ${damage} points of damage`;
    }

    battleCry() {
        return 'Odin Owns You All!';
    }
}

// Saxon
class Saxon extends Soldier{

    constructor(health, strength) {
        super(health, strength);
    }

    receiveDamage(damage) {
        this.health -= damage;
        if(this.health <= 0) {
            return `A Saxon has died in combat`;
        }
        return `A Saxon has received ${damage} points of damage`;
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
        return this.armyAttack(this.vikingArmy, this.saxonArmy);
    }

    saxonAttack() {
        return this.armyAttack(this.saxonArmy, this.vikingArmy);
    }

    armyAttack(attackingArmy, defendingArmy) {
        let attacker = attackingArmy[Math.floor(Math.random() * attackingArmy.length)];
        let defender = defendingArmy[Math.floor(Math.random() * defendingArmy.length)];
        let result = defender.receiveDamage(attacker.strength);
        this.clearDead(defendingArmy);
        return result;
    }

    clearDead(army) {
        let deadIndex;
        do {
            deadIndex = army.findIndex(function(soldier) {return soldier.health <= 0;});
            if(deadIndex > -1) {army.splice(deadIndex, 1);}
        } while (deadIndex != -1);
    }

    showStatus() {

        let livingSaxons = this.saxonArmy.length;
        let livingVikings = this.vikingArmy.length;

        if (livingSaxons <= 0 && livingVikings > 0) {
            return "Vikings have won the war of the century!";
        } else if (livingSaxons > 0 && livingVikings <= 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else if(livingSaxons > 0 && livingVikings > 0) {
            return "Vikings and Saxons are still in the thick of battle.";
        }

    }

}
