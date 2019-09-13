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

        let message;
        if (damage == 50) {
            message = this.name + ' has received 50 points of damage'
        }
        if (damage == 75) {
            message = this.name + ' has received 75 points of damage';
        }
        if (this.health <= 0) {
            message = this.name + ' has died in act of combat'
        }
        return message;
    }
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
        this.health = health;
        this.strength = strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
        let message;
        if (damage == 45) {
            return message = 'A Saxon has received 45 points of damage';
        }
        if (damage == 10) {
            return message = 'A Saxon has received 10 points of damage'
        }
        else {
            return message = 'A Saxon has died in combat'
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
        let indexRandon = Math.floor(this.saxonArmy.length * Math.random());
        let saxonRandon = this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())];
        let vikingRandon = this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())];

        saxonRandon.receiveDamage(vikingRandon.strength);

        if (saxonRandon.health <= 0) {
            this.saxonArmy.splice(indexRandon);
            return 'A Saxon has died in combat'
        }
    }

    saxonAttack() {
        let indexRandon = Math.floor(this.saxonArmy.length * Math.random());
        let saxonRandon = this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())];
        let vikingRandon = this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())];

        vikingRandon.receiveDamage(saxonRandon.strength);

        if (vikingRandon.health <= 0) {
            this.vikingArmy.splice(indexRandon);
        }
        return 'Harald has received 25 points of damage'
    }

    showStatus() {

        if (this.saxonArmy.length == 0) {
            return "Vikings have won the war of the century!"
        }

        if (this.vikingArmy.length == 0) {
            return "Saxons have fought for their lives and survive another day..."
        }

        return "Vikings and Saxons are still in the thick of battle."
    }
}
