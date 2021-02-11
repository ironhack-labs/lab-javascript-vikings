// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        super.receiveDamage(damage);
        if(this.health>0) {
            return  `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    // constructor (health, strength) {
    //     super(health, strength);
    // }

    receiveDamage(damage) {
        super.receiveDamage(damage);
        if(this.health>0) {
            return  `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor () {
        this.vikingArmy=[];
        this.saxonArmy=[];
    }

    addViking(viking) {
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    vikingAttack() {
        const viking=vikingArmy[Math.floor(Math.random()*saxonArmy.length)];
        const saxon=saxonArmy[Math.floor(Math.random()*saxonArmy.length)];
        saxon.receiveDamage(viking.strength);
        this.saxonArmy=[...this.saxonArmy.filter(fighter => fighter.health>0)];
    }
    saxonAttack() {
        const viking=vikingArmy[Math.floor(Math.random()*saxonArmy.length)];
        const saxon=saxonArmy[Math.floor(Math.random()*saxonArmy.length)];
        viking.receiveDamage(saxon.strength);
        this.vikingArmy=[...this.vikingArmy.filter(fighter => fighter.health>0)];
    }
    showStatus() {
        if (this.vikingArmy.length === 0) {
            console.log("Vikings have won the war of the century!");
        } else if (this.saxonArmy.length === 0) {
            console.log("Saxons have fought for their lives and survived another day...");
        } else {
            console.log("Vikings and Saxons are still in the thick of battle.");
        }
        }
    }
}
