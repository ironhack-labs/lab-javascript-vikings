// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    };
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
        if (this.health > 0) {
            return (`${this.name} has received ${damage} points of damage`);
        } else {
            return (`${this.name} has died in act of combat`);
        }
    }

    battleCry() {
        return (`Odin Owns You All!`);
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return (`A Saxon has received ${damage} points of damage`);
        } else {
            return (`A Saxon has died in combat`);
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
        const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let viking2 = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let saxon2 = this.saxonArmy[saxonIndex];
        const response = saxon2.receiveDamage(viking2.strength);
        if (this.saxonArmy[saxonIndex].health <= 0) {
            this.saxonArmy.splice(saxonIndex, 1);
        }
        return response;
    }

    saxonAttack() {
        const vikingIndex = Math.floor((Math.random() * this.vikingArmy.length));
        let viking2 = this.vikingArmy[Math.floor((Math.random() * this.vikingArmy.length))];
        let saxon2 = this.saxonArmy[saxonIndex2];
        const response2 = viking2.receiveDamage(saxon2.strength);
        if (this.vikingArmy[saxonIndex2].health <= 0) {
            this.vikingArmy.splice(vikingIndex, 1);
        }
        return response2;
    }

}