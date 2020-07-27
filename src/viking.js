// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack () {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super (health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if(this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
            return `${this.name} has died in act of combat`;
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
        }
            return `A Saxon has died in combat`;
    }
}

// War
class War {
    constructor () {
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
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    let viking = this.vikingArmy[randomViking];
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let saxon = this.saxonArmy[randomSaxon];
    // for (let i=0; i<this.saxonArmy.length; i++) {
    //     if (this.saxonArmy[i].health <= 0) {
    //     this.saxonArmy.splice(i, 1);
    // }
    // }
    if(saxon.health <= 0) {
        this.saxonArmy.splice(randomSaxon, 1);
    }
    return saxon.receiveDamage(viking.strength);
    }

    saxonAttack() {
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        let viking = this.vikingArmy[randomViking];
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let saxon = this.saxonArmy[randomSaxon];
        // for (let i=0; i<this.vikingArmy.length; i++) {
        //     if (this.vikingArmy[i].health <= 0) {
        //     this.vikingArmy.splice(i, 1);
        // }
        // }
        if (viking.health <= 0) {
            this.vikingArmy.splice(randomViking, 1);
        }
        return viking.receiveDamage(saxon.strength);
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`;
        }
        if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`;
        }
        if (this.saxonArmy.length !== 0 && this.vikingArmy.length !== 0) {
            return `Vikings and Saxons are still in the thick of battle.`;
        }
    }

}
