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
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    
    receiveDamage(damage) {
        this.health = this.health - damage;

        if(this.health > 0) {
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
    receiveDamage(damage) {
        this.health = this.health - damage;

        if(this.health > 0) {
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

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        // random numbr, between 0 and the array length, for viking and saxon
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);

        // we select a viking and saxon with the random number
        const viking = this.vikingArmy[randomViking];
        const saxon = this.saxonArmy[randomSaxon];  
        
        // we storage the viking damage, with the method of this viking
        const damage = viking.attack();

        // we return the saxon damage
        const saxonDamage = saxon.receiveDamage(damage);

        // if the saxon is died, we need to remove from de array
        if (saxon.health <= 0) {
            this.saxonArmy.splice(randomSaxon, 1);
        }
        return saxonDamage;
    }

    saxonAttack() {
        // random numbr, between 0 and the array length, for viking and saxon
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);

        // we select a viking and saxon with the random number
        const viking = this.vikingArmy[randomViking];
        const saxon = this.saxonArmy[randomSaxon];

        // we storage the saxon damage, with the method of this saxon
        const damage = saxon.attack();

        // we return the viking damage
        const vikingDamage = viking.receiveDamage(damage);

        // if the viking is died, we need to remove from de array
        if (viking.health <= 0) {
            this.vikingArmy.splice(randomViking, 1);
        }

        return vikingDamage;
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
