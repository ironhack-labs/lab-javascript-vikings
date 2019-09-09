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
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if(this.health <= 0){
            return `${this.name} has died in act of combat`;
        } else {
            return `${this.name} has received ${damage} points of damage`;
        }
    }

    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength);
    }

    receiveDamage(damage) {
        this.health -= damage;
        if(this.health <= 0){
            return `A Saxon has died in combat`;
        } else {
            return `A Saxon has received ${damage} points of damage`;
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy  = [];
        this.saxonArmy = [];
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }

    vikingAttack() {
        const saxonPosition = Math.floor(Math.random() * this.saxonArmy.length);
        const vikingPosition =  Math.floor(Math.random() * this.vikingArmy.length);
        const viking = this.vikingArmy[vikingPosition];
        const saxon = this.saxonArmy[saxonPosition];
        const result = saxon.receiveDamage(viking.attack());
        if(saxon.health <= 0) {
            this.saxonArmy.splice(saxonPosition, (saxonPosition+1));
        }
        return result;
    }
    saxonAttack() {
        const saxonPosition = Math.floor(Math.random() * this.saxonArmy.length);
        const vikingPosition =  Math.floor(Math.random() * this.vikingArmy.length);
        const viking = this.vikingArmy[vikingPosition];
        const saxon = this.saxonArmy[saxonPosition];
        const result = viking.receiveDamage(saxon.attack());
        if(viking.health <= 0) {
            this.vikingArmy.splice(vikingPosition, (vikingPosition+1));
        }
        return result;
    }
    showStatus() {
        if(this.saxonArmy.length == 0){
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length == 0){
            return "Saxons have fought for their lives and survive another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}