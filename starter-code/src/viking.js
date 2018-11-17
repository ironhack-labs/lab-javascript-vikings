// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
    this.attack = function () {
        return this.strength;
    }
    this.receiveDamage = function (damage) {
        this.health -= damage;
    }
}

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
    this.receiveDamage = function (damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    };
    this.battleCry = function () {
        return `Odin Owns You All!`
    }
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;
// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
    this.receiveDamage = function (damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    };
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;
// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
    this.addViking = function (vikingSoldier) {
        this.vikingArmy.push(vikingSoldier);
    }
    this.addSaxon = function (saxonSoldier) {
        this.saxonArmy.push(saxonSoldier);
    }
    this.vikingAttack = function () {
        this.theSaxon = randomSoldier(this.saxonArmy);
        this.theViking = randomSoldier(this.vikingArmy);
        this.attackResult = this.theSaxon.receiveDamage(this.theViking.strength);

        if (this.attackResult === `A Saxon has died in combat`) {
            this.saxonArmy.pop();
        }
        return this.attackResult;
    }
}

// Get Random Soldier
function randomSoldier(army) {
    return army[Math.floor(Math.random() * army.length)];
}
// Call
// var newVik = new Viking(`Diego`, 100, 20);
// var newSax = new Saxon(100, 15);
// var newWar = new War()

// newWar.addViking(newVik);
// newWar.addSaxon(newSax);
// newWar.vikingAttack();


