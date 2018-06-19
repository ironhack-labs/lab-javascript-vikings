// Soldier
function Soldier(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
};

Soldier.prototype.attack = function () {
    return Soldier.attack = this.strength;
};

Soldier.prototype.receiveDamage = function (dmgArg) {
    this.health = this.health - dmgArg;
};

// -----------------Viking--------------------------------
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
};
Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function (dmgArg) {
    this.health = this.health - dmgArg;
    if (this.health > 0) {
        return this.name + " has received " + dmgArg + " points of damage";
    } else if (0 >= this.health) {
        return this.name + " has died in act of combat";
    };
};

Viking.prototype.battleCry = function () {
    return "Odin Owns You All!";
};


// --------------Saxon------------------------
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
};

Saxon.prototype = Object.create(Soldier.prototype);


Saxon.prototype.receiveDamage = function (dmgArg) {
    this.health = this.health - dmgArg;
    if (this.health > 0) {
        return "A Saxon has received " + dmgArg + " points of damage";
    } else if (0 >= this.health) {
        return "A Saxon has died in combat";
    };
};


// -------------- War ----------------------------

function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
};

War.prototype.addViking = function (aVikingObject) {
    this.vikingArmy.push(aVikingObject);
};

War.prototype.addSaxon = function (aSaxonObject) {
    this.saxonArmy.push(aSaxonObject);
};

War.prototype.vikingAttack = function () {
    
    var vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    var saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    
    var randViking = this.vikingArmy[vikingIndex]; 
    var randSaxon = this.saxonArmy[saxonIndex];

    var result = randSaxon.receiveDamage(randViking.attack());

    if (randSaxon.health <= 0) {
        this.saxonArmy.splice(saxonIndex, 1);
    }

    return result;
};

War.prototype.showStatus = function () {

    if (this.saxonArmy.length === 0) {
        return "Vikings have won the war of the century";
    }

    if (this.vikingArmy.length === 0) {
        return "Saxons have fought for their lives and survive another day...";
    }

    return "Vikings and Saxons are still in the thick of battle.";
};
