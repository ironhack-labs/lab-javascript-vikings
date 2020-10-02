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
            return aliveSaxons.health > 0
        });
        return "A Saxon has died in combat"
    }

    saxonAttack() {
        let selectViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let selectSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        selectViking.receiveDamage(selectSaxon.strength);

        this.vikingArmy = this.vikingArmy.filter(function (aliveVikings) {
            return aliveVikings.health > 0
        });
        return  `${selectViking.name} has received ${selectSaxon.strength} points of damage`;
    }

    showStatus() {
        if (this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day...";
        } else if (this.saxonArmy !== [] && this.vikingArmy !== []){
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}

