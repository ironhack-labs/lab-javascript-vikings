// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack () {
        return this.strength;
    }

    receiveDamage (theDamage) {
        this.health -= theDamage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage (theDamage) {
        this.health -= theDamage;
        if (this.health > 0) {
            return `${this.name} has received ${theDamage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry () {
        return "Odin Owns You All!";
    }

}

// Saxon
class Saxon extends Soldier{
    receiveDamage (theDamage) {
        this.health -= theDamage;
        if (this.health > 0) {
            return `A Saxon has received ${theDamage} points of damage`;
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
    
    addViking (vikingObj) {
        this.vikingArmy.push(vikingObj);
    }

    addSaxon (saxonObj) {
        this.saxonArmy.push(saxonObj);
    }

    vikingAttack () {
        let saxonRandom = Math.floor(Math.random() * (this.saxonArmy.length));
        let vikingRandom = Math.floor(Math.random() * (this.vikingArmy.length));
        let vikingAttackRes = this.saxonArmy[saxonRandom].receiveDamage(this.vikingArmy[vikingRandom].strength);
        if (vikingAttackRes === "A Saxon has died in combat") {
            this.saxonArmy.splice(saxonRandom,1);
        }
        return vikingAttackRes;
    }

    saxonAttack () {
        let saxonRandom = Math.floor(Math.random() * (this.saxonArmy.length));
        let vikingRandom = Math.floor(Math.random() * (this.vikingArmy.length));
        let saxonAttackRes = this.vikingArmy[vikingRandom].receiveDamage(this.saxonArmy[saxonRandom].strength);
        if (saxonAttackRes === `${this.vikingArmy[vikingRandom].name} has died in act of combat`) {
            this.vikingArmy.splice(vikingRandom,1);
        }
        return saxonAttackRes;
    }

    showStatus () {
        if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 1 && this.saxonArmy.length === 1) {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
