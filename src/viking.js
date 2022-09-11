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
        super(health, strength)
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

    vikingAttack() {
        let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let oldHealth = saxon.health;
        if (saxon.receiveDamage > 0) {
            saxon.health = oldHealth - viking.attack;
        }
        if (saxon.receiveDamage >= viking.attack) {
            for (let i = 0; i < this.saxonArmy.length; i++) {
                if (this.saxonArmy[i] === saxon) {
                    this.saxonArmy.splice(i, 1);
                    break;
                }
            }
        }
        return saxon.receiveDamage(viking.attack());
    }

    saxonAttack() {
        let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let oldHealth = viking.health;
        if (viking.receiveDamage > 0) {
            viking.health = oldHealth - saxon.attack;
        } 
        if (viking.receiveDamage >= saxon.attack()) {
            for (let i = 0; i < this.vikingArmy.length; i++) {
                if (this.vikingArmy[i] === viking) {
                    this.vikingArmy.splice(i, 1);
                    break;
                }
            }
        }
        return viking.receiveDamage(saxon.attack());
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
