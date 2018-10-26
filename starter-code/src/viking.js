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
    Math.floor( Math.random () * (max - min + 1) + min);
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
   return this.saxonArmy[randomNum(0, this.saxonArmy.length)].receiveDamage(this.vikingArmy[randomNum(0, this.saxonArmy.length)]);
}

console.log(War.vikingAttack)


War.prototype.saxonAttack = function () {
    
}

War.prototype.showStatus = function () {
    
}