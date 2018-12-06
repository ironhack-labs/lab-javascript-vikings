function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
}

Soldier.prototype.attack = function () {
    return this.strength;
}

Soldier.prototype.receiveDamage = function (damage) {
    this.health -= damage;
}

let soldier1 = new Soldier(3, 5);
let soldier2 = new Soldier(6, 10);
let soldier3 = new Soldier(12, 20);

function Viking(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
}

Viking.prototype = new Soldier;

Viking.prototype.receiveDamage = function (damage) {
    this.health -= damage;
    if (this.health > 0) {
        return (`${this.name} has received ${damage} points of damage`);
    } else {
        return (`${this.name} has died in act of combat`)
    }
}

Viking.prototype.battleCry = function () {
    return "Odin Owns You All!";
}

let Viking1 = new Viking("Luca", 4, 6);
let Viking2 = new Viking("Marco", 8, 12);
let Viking3 = new Viking("Giovani", 14, 22);


function Saxon(health, strength) {
    this.health = health;
    this.strength = strength;
}

Saxon.prototype = new Soldier;

Saxon.prototype.receiveDamage = function (damage) {
    this.health -= damage;
    if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`;
    } else {
        return `A Saxon has died in combat`
    }
}

let Saxon1 = new Saxon(5, 8);
let Saxon2 = new Saxon(10, 17);
let Saxon3 = new Saxon(13, 20);


function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking = function (viking) {
    this.vikingArmy.push(viking);
}

War.prototype.addSaxon = function (saxon) {
    this.saxonArmy.push(saxon)
}

War.prototype.vikingAttack = function () {
    let damage = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);
    this.saxonArmy = this.saxonArmy.filter(function (saxon) {
        return saxon.health > 0;
    })
    /* The new value of this.saxonArmy will be an array with the elemants 
           that pass the filter*/
    return damage;
}

War.prototype.saxonAttack = function () {
    let damage = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);
    this.vikingArmy = this.vikingArmy.filter(function (viking) {
        return viking.health > 0;
    })
    /* The new value of this.vikingArmy will be an array with the elemants 
           that pass the filter*/
    return damage;
}

War.prototype.showStatus = function () {
    if (this.saxonArmy.length === 0) {
        return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
        return "Saxons have fought for their lives and survive another day...";
    } else {
        return "Vikings and Saxons are still in the thick of battle.";
    }
}