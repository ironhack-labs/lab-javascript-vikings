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
        super.receiveDamage(damage);
        return (this.health > 0) ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
    }
    battleCry() {
        return "Odin Owns You All!";
    }
}


class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }
    receiveDamage(damage) {
        super.receiveDamage(damage);
        return (this.health > 0) ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
    }
}

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

    random(number) {
        return Math.floor(Math.random() * number);
    }

    vikingAttack() {
        let numberOfSaxon = this.random(this.saxonArmy.length);
        let saxon = this.saxonArmy[numberOfSaxon];
        let numberOfViking = this.random(this.saxonArmy.length);
        let viking = this.vikingArmy[numberOfViking];
        let result = saxon.receiveDamage(viking.strength);
        if (saxon.health <= 0) {
            this.saxonArmy.splice(numberOfSaxon, 1);
        }
        return result;
    }
    saxonAttack() {
        let numberOfSaxon = this.random(this.saxonArmy.length);
        let saxon = this.saxonArmy[numberOfSaxon];
        let numberOfViking = this.random(this.saxonArmy.length);
        let viking = this.vikingArmy[numberOfViking];
        let result = viking.receiveDamage(saxon.strength);
        if (viking.health <= 0) {
            this.vikingArmy.splice(numberOfViking, 1);
        }
        return result;
    }

    showStatus() {
        if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survive another day...`;
        }
        if (this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`;
        }
        if (this.vikingArmy.length === 1 && this.saxonArmy.length === 1) {
            return `Vikings and Saxons are still in the thick of battle.`;
        }

    }

}