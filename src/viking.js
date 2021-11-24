// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}

const soldier1 = new Soldier(30, 1)
soldier1.receiveDamage(20)

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(name, health, strength)
        this.name = name;
    }
    receiveDamage(damage) {
        if (this.health > 0) {
            return `${ths.name} has received ${this.damage} points of damage`;
        } else {
            return `${this.name} has died in combat!`
        }
    }
    battlecry() {
        return "Odin AllFather!!!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage!`
        } else {
            return `A saxon has died in combat!!`
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
        let saxonArmyRandom = Math.floor(this.saxonArmy.length * Math.random())
        let randomSaxon = this.saxonArmy[saxonArmyRandom];


        let vikingArmyRandom = Math.floor(this.vikingArmy.length * Math.random())
        let randomViking = this.vikingArmy[vikingArmyRandom]

        let attack = randomSaxon.receiveDamage(randomViking.strength)

        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(saxonArmyRandom, 1)
        }
        return attack;
    }
    saxonAttack() {
        let saxonArmyRandom = Math.floor(this.saxonArmy.length * Math.random())
        let randomSaxon = this.saxonArmy[saxonArmyRandom];

        let vikingArmyRandom = Math.floor(this.vikingArmy.length * Math.random())
        let randomViking = this.vikingArmy[vikingArmyRandom];

        let attack = randomViking.receiveDamage(randomSaxon.strength)

        if (randomViking.health <= 0) {
            this.vikingArmy.splice(vikingArmyRandom, 1);
        }
        return attack;
    }
    showStatus() {
        if (this.saxonArmyRandom === 0) {
            return "Vikings have won the war!"
        } else if (this.vikingArmyRandom === 0) {
            return "Saxons have fought for their lives and they get to see another day"
        } else {
            return "Vikings and Saxons are still fighting!"
        }

    }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = { Soldier, Viking, Saxon, War };
}