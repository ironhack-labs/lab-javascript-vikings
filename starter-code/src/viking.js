// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
}

Soldier.prototype.attack = function () {
    return this.strength;
};

Soldier.prototype.receiveDamage = function (damage) {
    this.health = this.health - damage;
    if (this instanceof Viking) {
        return printVikingDamage(this.name, damage, this.health);
    } else if (this instanceof Saxon) {
        return printSaxonDamage(this.name, damage, this.health);
    }
};

// Viking
function Viking(vikName, health, strength) {
    Soldier.call(this, health, strength);
    this.name = vikName;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.battleCry = function () {
    return "Odin Owns You All!";
}

function printVikingDamage(name, damage, health) {
    if (health >= 1) {
        return name + ' has received ' + damage + ' points of damage';
    } else {
        return name + ' has died in act of combat';
    }
}

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

function printSaxonDamage(name, damage, health) {
    if (health >= 1) {
        return 'A Saxon has received ' + damage + ' points of damage';
    } else {
        return 'A Saxon has died in combat';
    }
}


// War
function War() {}
