// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
        this.attack = function () {
            return this.strength
        }
        this.receiveDamage = function (damage) {
            this.health = this.health - damage;
        }
    }
}
// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
        this.receiveDamage = function (damage) {
            //super.receiveDamage(damage)
            //if (damage >= this.health) {return `{name}`}
            this.health = this.health - damage;
            if (this.health > 0) {
                return `${this.name} has received ${damage} points of damage`
            } else {
                //these do not work
                return `${this.name} has died in act of combat`
            }
        }
        this.battleCry = function () {
            return ("Odin Owns You All!")
        }
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
        this.receiveDamage = function (damage) {
            this.health = this.health - damage;
            if (this.health > 0) {
                return ("A Saxon has received " + damage + " points of damage");
            } else {
                return ("A Saxon has died in combat");
            }
        }
    }
}

//war
class War {
    constructor() {
        //should assign an empty array to the vikingArmy property
        this.vikingArmy = []
        //should assign an empty array to the saxonArmy property
        this.saxonArmy = []
        this.randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        this.randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    }
    //addViking()
    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }
    //addSaxon()
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }
    // vikingAttack()
    vikingAttack() {
        let result = randomSaxon[0].receiveDamage(randomViking[0].strength)
        this.saxonArmy = this.saxonArmy.filter(soldier => soldier.health > 0);
        return result
    }
    // saxonAttack()
    saxonAttack() {
        let result = randomViking.receiveDamage(randomSaxon.strength);
        this.vikingArmy = this.vikingArmy.filter(soldier => soldier.health > 0);
        return result;
    }
    //showStatus()
    showStatus() {
        if (this.saxonArmy.length == 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length == 0) {
            return "Saxons have fought for their lives and survive another day..."
        }
        else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}