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
        this.health -= theDamage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(theDamage) {
        this.health -= theDamage;
        if (this.health > 0) {
            return this.name + " has received " + theDamage + " points of damage";
        } else {
            return this.name + " has died in act of combat";
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {

    receiveDamage(theDamage) {
        this.health -= theDamage;
        if (this.health > 0) {
            return "A Saxon has received " + theDamage + " points of damage";
        } else {
            return "A Saxon has died in combat";
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
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }

    vikingAttack() {
        this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].receiveDamage(this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)].strength);
        this.saxonArmy = this.saxonArmy.filter(function (aliveSaxons) {
            return aliveSaxons > 0
        });
        return "A Saxon has died in combat"
    }

    saxonAttack() {
        this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)].receiveDamage(this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].strength);
        this.vikingArmy = this.vikingArmy.filter(function (aliveVikings) {
            return aliveVikings > 0
        });
        return  `${Viking.name} has received ${Saxon.strength} points of damage`;
    }

    showStatus() {
        if (this.saxonArmy =[]){
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy = []){
            return "Saxons have fought for their lives and survived another day...";
        } else if (this.saxonArmy !=[] && this.vikingArmy !=[]){
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}

