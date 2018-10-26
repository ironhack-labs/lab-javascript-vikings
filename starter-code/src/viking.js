// Soldier
function Soldier(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
}

Soldier.prototype.attack = function () {
    return this.strength;
}

Soldier.prototype.receiveDamage = function (damage) {
    this.health -= damage;
}

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function (damage) {
    this.health -= damage;
    if (this.health <= 0) {
        return `${this.name} has died in act of combat`
    } else {
        return `${this.name} has received ${damage} points of damage`
    }
}

Viking.prototype.battleCry = function () {
    return `Odin Owns You All!`
}

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function (damage) {
    this.health -= damage;
    if (this.health <= 0) {
        return `A Saxon has died in combat`
    } else {
        return `A Saxon has received ${damage} points of damage`
    }
}

function randomNum(min, max) {
    Math.floor(Math.random() * (max - min + 1) + min);
}

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}


War.prototype = Object.create(Viking.prototype);
War.prototype = Object.create(Saxon.prototype);



War.prototype.addViking = function (viking) {
    this.vikingArmy.push(viking);
}

War.prototype.addSaxon = function (saxon) {
    this.saxonArmy.push(saxon);
}

War.prototype.vikingAttack = function () {
    var randomSaxon = this.saxonArmy[0];
    var randomViking = this.vikingArmy[0];
    if (randomSaxon.receiveDamage(randomViking.strength)) {
        this.saxonArmy.splice(0, 1);
        return "A Saxon has died in combat"
    } else {
        return randomSaxon.receiveDamage(randomViking.strength)
    }
}


War.prototype.saxonAttack = function () {
    console.log(this.vikingArmy)
    var randomSaxon = this.saxonArmy[0];
    var randomViking = this.vikingArmy[0];
    // debugger
    randomViking.receiveDamage(randomSaxon.strength)
    if (randomViking.health <= 0) {
        this.vikingArmy.splice(0, 1);
        return "A viking died"
    } else {
        return `${randomViking.name} has received ${randomSaxon.strength} points of damage`;
    }
}


War.prototype.showStatus = function () {
    if (this.saxonArmy.length === 0) {
        return `Vikings have won the war of the century!`
    } else if (this.vikingArmy.length === 0) {
        return `Saxons have fought for their lives and survive another day...`
    } else {
        return `Vikings and Saxons are still in the thick of battle.`
    }
}