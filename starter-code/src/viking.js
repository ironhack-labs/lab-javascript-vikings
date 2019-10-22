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
    // // not necessary to implement attack-method. It´s already implemented in the superclass!
    // attack() {
    //     super.attack();
    // }
    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health > 0) {
            let damageMsg = this.name + " has received " + damage + " points of damage";
            return damageMsg;
        } else {
            let diedMsg = this.name + " has died in act of combat";
            return diedMsg;
        }
    }
    battleCry() {
        return "Odin Owns You All!";
    }

}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health > 0) {
            let damageMsg = "A Saxon has received " + damage + " points of damage";
            return damageMsg;
        } else {
            let diedMsg = "A Saxon has died in combat";
            return diedMsg;
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
        let randomNr1 = Math.floor(Math.random() * this.saxonArmy.length);
        let randomNr2 = Math.floor(Math.random() * this.vikingArmy.length);
        let result = this.saxonArmy[randomNr1].receiveDamage(this.vikingArmy[randomNr2].strength);
        if (this.saxonArmy[randomNr1].health < 0) {
            this.saxonArmy.splice(randomNr1, 1);
        }
        return result;
    }

    saxonAttack() {
        let randomNr1 = Math.floor(Math.random() * this.vikingArmy.length);
        let randomNr2 = Math.floor(Math.random() * this.saxonArmy.length);
        let result = this.vikingArmy[randomNr1].receiveDamage(this.saxonArmy[randomNr2].strength);
        if (this.vikingArmy[randomNr1].health < 0) {
            this.vikingArmy.splice(randomNr1, 1);
        }
        return result;
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survive another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}