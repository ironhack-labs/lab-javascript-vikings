// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
}

Soldier.prototype.attack = function () {
    return this.strength;
};

Soldier.prototype.receiveDamage = function (damage) {
    this.health -= damage;
};

// Viking
function Viking(name, health, strength) {
    this.name = name;
    Soldier.call(this, health, strength);
}

Viking.prototype = new Soldier;

Viking.prototype.receiveDamage = function (damage) {
    this.health -= damage;
    return this.health !== 0 ? this.name + " has received " + damage + " points of damage" :
        this.name + " has died in act of combat";
};

Viking.prototype.battleCry = function () {
    return "Odin Owns You All!";

};

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength)
}

Saxon.prototype = new Soldier;

Saxon.prototype.receiveDamage = function (damage) {
    this.health -= damage;
    return this.health !== 0 ? "A Saxon has received " + damage + " points of damage" :
        "A Saxon has died in combat";
};

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking = function (viking) {
    this.vikingArmy.push(viking);

};

War.prototype.addSaxon = function (saxon) {
    this.saxonArmy.push(saxon);

};

War.prototype.vikingAttack = function () {
    this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);
    this.saxonArmy = this.saxonArmy.filter(function (saxon) {
        return saxon.health > 0;
    })
    ;
    return "A Saxon has died in combat"
};

War.prototype.saxonAttack = function () {
    this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);
    let name = this.vikingArmy[0].name;
    this.vikingArmy = this.vikingArmy.filter(function (viking) {
        return viking.health > 0;
    });
    return name + " has received " + this.saxonArmy[0].strength +
        " points of damage";
};

War.prototype.showStatus = function () {
    if (this.saxonArmy.length === 0) {
        return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
        return "Saxons have fought for their lives and survive another day...";
    } else {
        return "Vikings and Saxons are still in the thick of battle.";
    }

};

module.exports = {Soldier, Viking, Saxon, War};
