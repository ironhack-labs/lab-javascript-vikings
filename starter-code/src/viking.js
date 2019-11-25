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

class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else if (this.health <= 0) {
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
        } else if (this.health <= 0) {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];
    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }
    vikingAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
            // console.log(randomSaxon)
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
            // console.log(randomViking)
        let oldHealth = randomSaxon.health;
        // console.log(oldHealth)
        randomSaxon.health = (oldHealth - randomViking.strength);

        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxon, 1);
            return `A Saxon has died in combat`
        }
    }

    saxonAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
            // console.log(randomSaxon)
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
            // console.log(randomViking)
        let oldHealth = randomViking.health;
        // console.log(oldHealth)
        randomViking.health = (oldHealth - randomSaxon.strength);

        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomViking, 1);
        }
        return `${randomViking.name} has received ${randomSaxon.strength} points of damage`

    }
    showStatus() {
        if (this.saxonArmy.length == 0) {
            return `Vikings have won the war of the century!`
        } else if (this.vikingArmy.length == 0) {
            return `Saxons have fought for their lives and survived another day...`
        } else if (this.saxonArmy.length > 0 || this.vikingArmy.length > 0)
            return `Vikings and Saxons are still in the thick of battle.`
    };
}