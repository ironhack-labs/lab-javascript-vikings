// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage (damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength)  {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        super.receiveDamage(damage);

        return this.health > 0
            ? `${this.name} has received ${damage} points of damage`
            : `${this.name} has died in act of combat`;
    }

    battleCry = () => {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        super.receiveDamage(damage);

        return this.health > 0
            ? `A Saxon has received ${damage} points of damage`
            : `A Saxon has died in combat`;
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
    };
    addSaxon(saxon) {
      this.saxonArmy.push(saxon);
    };

    getRandom(maxLimit) {
        return Math.floor(Math.random() * (maxLimit));
    }

    getRandomWarriorFromArmy(army) {
        const iWarrior = this.getRandom(army.length);
        return { index: iWarrior, warrior: army[iWarrior] };
    }

    attack(attackerArmy, defenserArmy) {
        const selectedAttacker = this.getRandomWarriorFromArmy(attackerArmy);
        const selectedDefender = this.getRandomWarriorFromArmy(defenserArmy);
        const state = selectedDefender.warrior.receiveDamage(selectedAttacker.warrior.strength);
        
        if (selectedDefender.warrior.health <= 0) {
            defenserArmy.splice(selectedDefender.index, 1);
        }

        return state;
    }

    saxonAttack() {
        return this.attack(this.saxonArmy, this.vikingArmy);
    }

    vikingAttack() {
        return this.attack(this.vikingArmy, this.saxonArmy);
    }

    showStatus() {
        if (this.vikingArmy.length !== 0 && this.saxonArmy.length !== 0) {
            return "Vikings and Saxons are still in the thick of battle.";
        }
        
        if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } 
        
        return "Vikings have won the war of the century!";
    };
}
