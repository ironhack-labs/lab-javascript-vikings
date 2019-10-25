// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    };
    receiveDamage(damage) {
        this.health -= damage;
    };
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    battleCry() {
        return `Odin Owns You All!`;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            return `${this.name} has died in act of combat`;
        } else {
            return `${this.name} has received ${damage} points of damage`;
        }
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

    addViking(Viking) {
        this.vikingArmy.push(Viking);
    };

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    };

    vikingAttack() {
        let Saxon = Math.floor(Math.random()*this.saxonArmy.length);

        let Viking = Math.floor(Math.random()*this.vikingArmy.length);
        

        let saxonWounded = this.saxonArmy[Saxon].receiveDamage(this.vikingArmy[Viking].strength);

        this.saxonArmy = this.saxonArmy.filter(cSoldier => cSoldier.health > 0);


        return saxonWounded;

    };

    saxonAttack() {
        let Saxon = Math.floor(Math.random()*this.saxonArmy.length);

        let Viking = Math.floor(Math.random()*this.vikingArmy.length);
        

        let vikingWounded = this.vikingArmy[Viking].receiveDamage(this.saxonArmy[Saxon].strength);

        this.vikingArmy = this.vikingArmy.filter(cSoldier => cSoldier.health > 0);

        return vikingWounded;

    };

    showStatus() {
        if (this.saxonArmy.length <= 0) {
            return `Vikings have won the war of the century!`;
        } else if (this.vikingArmy.length <= 0) {
            return `Saxons have fought for their lives and survive another day...`;
        } else {
            return `Vikings and Saxons are still in the thick of battle.`;
        }
    };

}