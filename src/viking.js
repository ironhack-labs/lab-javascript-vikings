// Soldier
class Soldier {
    // Constructor
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    // Method Attack
    attack () {
        return this.strength;
    }

    // Method receiveDamage
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
        super.receiveDamage(theDamage)
        return this.health <= 0 ? `${this.name} has died in act of combat` : `${this.name} has received ${theDamage} points of damage`
    }

    battleCry () {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage (theDamage) {
        super.receiveDamage(theDamage)
        return this.health <= 0 ? `A Saxon has died in combat` : `A Saxon has received ${theDamage} points of damage`
    }
}

// War
class War {
    constructor () {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking (viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon (saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack () {
        let attackedSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        let attackingViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        let vikingAttack = attackedSaxon.receiveDamage(attackingViking.strength);
        this.saxonArmy.forEach((saxon, idx) => {
            if(saxon.health <= 0) { this.saxonArmy.shift(idx,idx+1) };
        });
        return vikingAttack;
    }

    saxonAttack () {
        let attackedViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        let attackingSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        let saxonAttack = attackedViking.receiveDamage(attackingSaxon.strength);
        this.vikingArmy.forEach((viking, idx) => {
            if(viking.health <= 0) { this.vikingArmy.shift(idx,idx+1) };
        });
        return saxonAttack;
    }

    showStatus () {
        if (this.saxonArmy.length === 0) { return "Vikings have won the war of the century!" }
        else if (this.vikingArmy.length === 0) { return "Saxons have fought for their lives and survived another day..." }
        else if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) { return "Vikings and Saxons are still in the thick of battle." };
    }
}
