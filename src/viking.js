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
        return `Odin Owns You All!`;
    }
}

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
    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }
    vikingAttack() {
        /*select the one who attack*/
        let randomValue = Math.floor(Math.random() * this.vikingArmy.length);
        const vikingBattle = this.vikingArmy[randomValue];

        /*select the one who defent*/
        randomValue = Math.floor(Math.random() * this.saxonArmy.length);
        const saxonBattle = this.saxonArmy[randomValue];

        const result = saxonBattle.receiveDamage(vikingBattle.strength);
        if (result === 'A Saxon has died in combat') {
            this.saxonArmy.splice(randomValue, 1);
        }
        return result;
    }
    saxonAttack() {
        /*select the one who attack*/
        let randomValue = Math.floor(Math.random() * this.saxonArmy.length);
        const saxonBattle = this.saxonArmy[randomValue];

        /*select the one who defent*/
        randomValue = Math.floor(Math.random() * this.vikingArmy.length);
        const vikingBattle = this.vikingArmy[randomValue];

        const result = vikingBattle.receiveDamage(saxonBattle.strength);
        if (result === `${vikingBattle.name} has died in act of combat`) {
            this.vikingArmy.splice(randomValue, 1);
        }
        return result;
    }
    showStatus() {
        if (this.saxonArmy.length ===0){
            return 'Vikings have won the war of the century!';
        } else if (this.vikingArmy.length ===0){
            return 'Saxons have fought for their lives and survived another day...';
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
