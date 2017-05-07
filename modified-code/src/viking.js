// Soldier
function Soldier (healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
}    

Soldier.prototype.attack = function () {
    return this.strength;
};

Soldier.prototype.receiveDamage = function (damageArg) {
    this.health -= damageArg;
};


// Viking
function Viking (nameArg, healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg);
    this.name = nameArg;
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function (damageArg) {
    var message = "";
    this.health -= damageArg;
    if (this.health > 0) {
        message = this.name + " has received " + damageArg + " points of damage"
    } else {
        message = this.name + " has died in act of combat"
    }
    return message;
}

Viking.prototype.battleCry = function() {
    return "Odin Owns You All!";
}

// Saxon
function Saxon (healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg);
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function (damageArg) {
    var message = "";
    this.health -= damageArg;
    if (this.health > 0) {
        message = "A Saxon has received " + damageArg + " points of damage"
    } else {
        message = "A Saxon has died in combat"
    }
    return message;
}

// War
function War () {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking = function (vikingArg) {
    this.vikingArmy.push(vikingArg);
}
War.prototype.addSaxon = function (saxonArg) {
    this.saxonArmy.push(saxonArg);
}
War.prototype.vikingAttack = function () {
    var randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
    var randomViking = Math.floor(Math.random()*this.vikingArmy.length);
    var result = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].attack());
    if (this.saxonArmy[randomSaxon].health <= 0) {
        this.saxonArmy.splice(randomSaxon, 1);
    }
    return result;
}
War.prototype.saxonAttack = function () {
    var randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
    var randomViking = Math.floor(Math.random()*this.vikingArmy.length);
    var result = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].attack());
    if (this.vikingArmy[randomViking].health <= 0) {
        this.vikingArmy.splice(randomViking, 1);
    }
    return result;
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



