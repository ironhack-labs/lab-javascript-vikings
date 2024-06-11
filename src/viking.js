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
        super(health, strength)
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
        else {
            return "A Saxon has died in combat";
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

    // generic attack method,
    attack(isVikingAttack) {
        
        if (isVikingAttack) {
            attackingArmy = this.vikingArmy;
            defendingArmy = this.saxonArmy;
        }
        else {
            attackingArmy = this.saxonArmy;
            defendingArmy = this.vikingArmy;
        }
        // select random individual element from each army array
        const attacker = attackingArmy[Math.floor(Math.random() * attackingArmy.length)];
        const defender = defendingArmy[Math.floor(Math.random() * defendingArmy.length)];
        
        // store the result of calling receiveDamage
        const attack = defender.receiveDamage(attacker.strength);

        // remove any dead soldiers from defending army
        defendingArmy.forEach((soldier, index) => {
            if (soldier.health <= 0) {
                defendingArmy.splice(index, 1);
            }
        });
        return attack;
    }

    // call attack for either army
    vikingAttack() {
        return this.attack(true);
    }

    saxonAttack() {
        return this.attack(false);
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        }
        else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        }
        else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
