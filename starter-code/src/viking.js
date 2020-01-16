/* jshint esversion: 6 */

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
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
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
    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }
    selectSoldier(army) {
        return Math.floor(Math.random() * army.length);
    }
    vikingAttack() {
        const viking = this.selectSoldier(this.vikingArmy);
        const saxon = this.selectSoldier(this.saxonArmy);
        const battleResult = this.saxonArmy[saxon].receiveDamage(this.vikingArmy[viking].strength);
        if (this.saxonArmy[saxon].health <= 0) {
            this.saxonArmy.splice(saxon, 1);
        }
        return battleResult;
    }
    saxonAttack() {
        const viking = this.selectSoldier(this.vikingArmy);
        const saxon = this.selectSoldier(this.saxonArmy);
        const battleResult = this.vikingArmy[viking].receiveDamage(this.saxonArmy[saxon].strength);
        if (this.vikingArmy[viking].health <= 0) {
            this.vikingArmy.splice(viking, 1);
        }
        return battleResult;
    }
    attack() {
        if (Math.floor(Math.random() * 2) === 1) {
            console.log("\nVikings attack!");
            this.attackingArmy = this.vikingArmy;
            this.defendingArmy = this.saxonArmy;            
        } else {
            console.log("\nSaxons attack!");
            this.attackingArmy = this.saxonArmy;
            this.defendingArmy = this.vikingArmy;  
        }
        const attacker = this.selectSoldier(this.attackingArmy);
        const defender = this.selectSoldier(this.defendingArmy);
        const battleResult = this.defendingArmy[defender].receiveDamage(this.attackingArmy[attacker].strength);
        if (this.defendingArmy[defender].health <= 0) {
            this.defendingArmy.splice(defender, 1);
        }
        return battleResult;
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            console.log("-----------------------------------------------------------");
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            console.log("-----------------------------------------------------------");
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}

const war = new War();

for (i = 1; i < 10; i++) {
    war.vikingArmy.push(new Viking('Thor' + i, 2 * i, 3 * i));
    war.saxonArmy.push(new Saxon(3 * i, 2 * i));
}

// do {
//     war.vikingAttack();
//     console.log(war.showStatus());
//     if (war.saxonArmy.length > 0) {
//         war.saxonAttack();
//         console.log(war.showStatus());
//     }
// } while (war.vikingArmy.length > 0 && war.saxonArmy.length > 0);

do {
    console.log(war.attack());
    console.log(war.showStatus());
} while (war.vikingArmy.length > 0 && war.saxonArmy.length > 0);