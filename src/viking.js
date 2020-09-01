// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(theDamage) {
        this.health = this.health - theDamage;
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(theDamage) {
        this.health = this.health - theDamage;
        if (this.health <= 0) 
        return `${this.name} has died in act of combat`;
        else return`${this.name} has received ${theDamage} points of damage`;
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(theDamage) {
        this.health = this.health - theDamage;
        if (this.health <= 0) 
        return `A Saxon has died in combat`;
        else return `A Saxon has received ${theDamage} points of damage`;
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
        let iSaxon = [Math.floor(Math.random() * this.saxonArmy.length)];
        let iViking = [Math.floor(Math.random() * this.vikingArmy.length)];
        var randomSaxon = this.saxonArmy[iSaxon];
        var randomViking = this.vikingArmy[iViking];
        let vikingAtt = randomSaxon.receiveDamage(randomViking.strength);
        if (this.saxonArmy[iSaxon].health <= 0)
        this.saxonArmy.splice(iSaxon,1);
        return vikingAtt;
    }

    saxonAttack() {
        let iSaxon = [Math.floor(Math.random() * this.saxonArmy.length)];
        let iViking = [Math.floor(Math.random() * this.vikingArmy.length)];
        var randomSaxon = this.saxonArmy[iSaxon];
        var randomViking = this.vikingArmy[iViking];
        let saxonAtt = randomViking.receiveDamage(randomSaxon.strength);
        if (this.vikingArmy[iViking].health <= 0)
        this.vikingArmy.splice(iViking,1);
        return saxonAtt;
    }

    showStatus() {
        if (this.saxonArmy.length == 0)
            return "Vikings have won the war of the century!";
        if (this.vikingArmy.length == 0)
            return "Saxons have fought for their lives and survived another day...";
        if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1)
            return "Vikings and Saxons are still in the thick of battle."
    }
}
