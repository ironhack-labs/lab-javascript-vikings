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
        return (this.health > 0) ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`
    }

    battleCry() {
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        return (this.health > 0) ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`
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
    };
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    };

    getRandom(tribeArmy) {
        return tribeArmy[Math.floor(Math.random() * tribeArmy.length)]
    }

    vikingAttack() {
        let randomSaxon = this.getRandom(this.saxonArmy);
        let randomViking = this.getRandom(this.vikingArmy);
        let result = randomSaxon.receiveDamage(randomViking.strength)
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxon, 1);
        }
        return result
    }
    saxonAttack() {
        let randomSaxon = this.getRandom(this.saxonArmy);
        let randomViking = this.getRandom(this.vikingArmy);
        let result = randomViking.receiveDamage(randomSaxon.strength)
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomViking, 1);
        }
        return result
    }

    showStatus() {
        if (this.saxonArmy == '') {
            return 'Vikings have won the war of the century!'
        }
        if (this.vikingArmy == '') {
            return 'Saxons have fought for their lives and survived another day...'
        }
        return 'Vikings and Saxons are still in the thick of battle.'
    }


}




let newViking = new Viking('Chuck', 5, 5);
let newSaxon = new Saxon(100, 5);
let newWar = new War;
newWar.addViking(newViking);
newWar.addSaxon(newSaxon);
newWar.vikingAttack();
newWar.saxonAttack();