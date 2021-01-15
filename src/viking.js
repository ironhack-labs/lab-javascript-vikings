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


    battleCry() {
        return "Odin Owns You All!";
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else
            return `${this.name} has died in act of combat`;
    }

}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }

    receiveDamage(damage) {
        this.health -= damage;
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

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        let saxonRandom = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let vikingRanStregth = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)].strength;
        let outcome = saxonRandom.receiveDamage(vikingRanStregth);
        this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0);
        return outcome;
    }

    saxonAttack() {
        let vikingRandom = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let saxonRanStregth = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].strength;
        let outcome = vikingRandom.receiveDamage(saxonRanStregth);
        this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0);
        return outcome;
    }

    showStatus() {
        if(this.vikingArmy.length>0 && this.saxonArmy.length>0){
            return `Vikings and Saxons are still in the thick of battle.`
        } else if (!this.saxonArmy.length) {
            return `Vikings have won the war of the century!`;
        } else {
            return `Saxons have fought for their lives and survived another day...`
        }
    }


}