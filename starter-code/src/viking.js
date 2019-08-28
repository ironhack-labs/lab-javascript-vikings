// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health;
        this.strength  = strength;
    }
    attack () {
        return this.strength;
    }
    receiveDamage (damage) {
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = "Harald";
    }
    receiveDamage (damage) {
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry () {
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }
    receiveDamage (damage) {
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
        else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War{
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
        let saxonSoldier = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        let vikingSoldier = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        let resultFight = saxonSoldier.receiveDamage(vikingSoldier.attack());

        if (saxonSoldier.health < 1) {
            this.saxonArmy.splice (this.saxonArmy.indexOf(saxonSoldier),1);
        }
        
        return resultFight;
    }

    saxonAttack () {
        let saxonSoldier = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        let vikingSoldier = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        let resultFight = vikingSoldier.receiveDamage(saxonSoldier.attack());

        if (vikingSoldier.health < 1) {
            this.vikingArmy.splice (this.vikingArmy.indexOf(vikingSoldier),1);
        }
        
        return resultFight;
    }

    showStatus () {
        if (this.saxonArmy == '') {
            return "Vikings have won the war of the century!";
        }
        else if (this.vikingArmy == '') {
            return "Saxons have fought for their lives and survive another day...";
        }
        else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
