// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;

}

Soldier.prototype.attack = function () {
    return Soldier.strength = 150
};
Soldier.prototype.receiveDamage = function (damage) {
    this.health = this.health - damage
};

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;

}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function (damage) {
    this.health = this.health - damage;
    if (this.health > 0) { return this.name + " has received " + damage + " points of damage" } else {
        return this.name + " has died in act of combat"
    }
};

Viking.prototype.battleCry = function () {
    return "Odin Owns You All!"
};


// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.attack = function () {
    return this.strength
};

Saxon.prototype.receiveDamage = function (damage) {
    this.health = this.health - damage;
    if (this.health > 0) { return "A Saxon has received " + damage + " points of damage" } else {
        return "A Saxon has died in combat"
    }
};


// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking = function (viking) {
    this.vikingArmy.push(viking)
};
War.prototype.addSaxon = function (saxon) {
    this.saxonArmy.push(saxon)
};

War.prototype.vikingAttack = function () {
    this.Saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    this.Viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    this.Saxon.receiveDamage(this.Viking.strength);
    if (this.Saxon.health <= 0) {
        this.saxonArmy.pop(Saxon);
        return 'A Saxon has died in combat'
    } else {

    }

};


War.prototype.saxonAttack = function () {
    this.Saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    this.Viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    this.Viking.receiveDamage(this.Saxon.strength);
    if (this.Viking.health <= 0) {
        this.vikingArmy.pop(Viking);
        return 'A Viking has died in combat'
    } else {
        return this.Viking.name + " has received " + this.Saxon.strength + " points of damage"
    }
};


War.prototype.showStatus = function () {
    if (this.saxonArmy.length == 0 && this.vikingArmy.length > 0) {
        return "Vikings have won the war of the century!"
    } else if (this.saxonArmy.length > 0 && this.vikingArmy.length == 0){
        return "Saxons have fought for their lives and survive another day..."
    }
    else {
        return "Vikings and Saxons are still in the thick of battle."
    }
};

