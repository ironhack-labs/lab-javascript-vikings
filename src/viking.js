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
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends (Soldier) {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health = this.health - damage;
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
        return this.generalAttack("viking");
    }
    saxonAttack() {
        return this.generalAttack("saxon");
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`;
        } else if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`;
        } else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
            return `Vikings and Saxons are still in the thick of battle.`;
        }
    }
    generalAttack(who) {
        // console.log(Math.random()*5);
        // console.log(this.saxonArmy[Math.round(Math.random()*this.saxonArmy.length * 10)]);
        const indexOfSaxon = Math.floor(Math.random() * (this.saxonArmy.length));
        const Saxon = this.saxonArmy[indexOfSaxon];
        console.log(Saxon);
        const indexOfViking = Math.floor(Math.random() * this.vikingArmy.length);
        const Viking = this.vikingArmy[indexOfViking];
        console.log(Viking);
        // console.log(Viking.strength);
        if (who === "viking") {
            const result = Saxon.receiveDamage(Viking.strength);
            console.log(result);
    
            if (Saxon.health <= 0) {
                this.saxonArmy.splice(indexOfSaxon, 1);
            }
            return result;
        } else if (who === "saxon") {
            const result = Viking.receiveDamage(Saxon.strength);
            console.log(result);
    
            if (Viking.health <= 0) {
                this.vikingArmy.splice(indexOfViking, 1);
            }
            return result;
        }
    }
}
