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
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(name, health, strength)
            this.name = name;
            this.health = health;
            this.strength = strength;
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
        return 'Odin Owns You All!';
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
            return 'A Saxon has died in combat';
        }
    }
}

// War
class War {
    constructor () {
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
        if (this.saxonArmy.length === 0) {
            return 0; // There's no damage because all saxons are dead. 
        } 

        const randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        const randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        
        const damage = randomSaxon.receiveDamage(randomViking.strength);

        if (randomSaxon.health <= 0) {
            const indexRandomSaxon = this.saxonArmy.indexOf(randomSaxon);
            this.saxonArmy.splice(indexRandomSaxon, 1);
        }

        return damage;
    }

    saxonAttack() {
        if (this.vikingArmy.length === 0) {
            return 0; // There's no damage because all vikings are dead. 
        }

        const randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        const randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];

        const damage = randomViking.receiveDamage(randomSaxon.strength);

        if (randomViking.health <= 0) {
            const indexRandomViking = this.vikingArmy.indexOf(randomViking);
            this.vikingArmy.splice(indexRandomViking, 1);
        }

        return damage;
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
