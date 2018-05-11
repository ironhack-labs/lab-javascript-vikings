// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
};


Soldier.prototype.attack = function () {
    return this.strength;
};
Soldier.prototype.receiveDamage = function (damage) {
    this.health = this.health - damage;
};

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function (damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
        return this.name + " has received " + damage + " points of damage";
    } else {
        return this.name + " has died in act of combat";
    }

};

Viking.prototype.battleCry = function () {
    return "Odin Owns You All!";
};

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
};

Saxon.prototype = Object.create(Viking.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function (damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
        return "A Saxon has received " + damage + " points of damage";
    } else {
        return "A Saxon has died in combat";
    }

};
// War
function War() {
    vikingArmy = [];
    saxonArmy = [];
};

War.prototype.addViking = function (viking) {
    this.vikingArmy.push(viking);
};

War.prototype.addSaxon = function (saxon) {
    this.saxonArmy.push(saxon);
};

War.prototype.vikingAttack = function () {
    var numberViking = Math.floor(Math.random() * this.vikingArmy.length);
    var numberSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var message = this.saxonArmy[numberSaxon].receiveDamage(this.vikingArmy[numberViking].attack());
    if (this.saxonArmy[numberSaxon].health <= 0) {
        this.saxonArmy.splice(numberSaxon, 1);
    }
    return message;
};

War.prototype.saxonAttack = function () {
    var numberViking = Math.floor(Math.random() * this.vikingArmy.length);
    var numberSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var message = this.vikingArmy[numberViking].receiveDamage(this.saxonArmy[numberSaxon].attack());
    if (this.vikingArmy[numberViking].health <= 0) {
        this.vikingArmy.splice(numberViking, 1);
    }
    return message;
};

War.prototype.showStatus = function () {

    if (this.saxonArmy.length === 0) {
        return "Vikings have won the war of the century!"
    }
    if (this.vikingArmy.length === 0) {
        return "Saxons have fought for their lives and survive another day..."
    }
    if (this.saxonArmy.length === this.vikingArmy.length) {
        return "Vikings and Saxons are still in the thick of battle."
    }
};