// Soldier
function Soldier(healthArg, strengthArg) {
    this.health = healthArg,
    this.strength = strengthArg,
    this.attack = function () {
        return this.strength;
    }
    this.receiveDamage = function (damage) {
        this.health = healthArg-damage;
    }
}

// Viking
function Viking(name,healthArg,strengthArg) {
    Soldier.call (this,healthArg,strengthArg);
    this.name = name,
    this.receiveDamage = function (damage) {
        this.health =healthArg-damage;
        if (this.health > 0) {
            return this.name + " has received " + damage + " points of damage";
        } else {
            return  this.name + " has died in act of combat";
        }
    },
    this.battleCry = function () {
        return "Odin Owns You All!";
    }
}

Viking.prototype = Object.create(Soldier.prototype);

// Saxon
function Saxon(healthArg,strengthArg) {
    Soldier.call(this,healthArg,strengthArg);
    this.receiveDamage = function (damage) {
        this.health =healthArg-damage;
        if (this.health > 0) {
            return "A Saxon has received " + damage + " points of damage";
        } else {
            return "A Saxon has died in combat";
        }
    }
}

Saxon.prototype = Object.create(Soldier.prototype);

// War
function War() {
    this.vikingArmy = [],
    this.saxonArmy = [],
    this.addViking = function(Viking) {
        this.vikingArmy.push(Viking);
    },
    this.addSaxon = function(Saxon) {
        this.saxonArmy.push(Saxon);
    },
    this.vikingAttack = function () {
        var whichSaxon = Math.floor(Math.random()*this.saxonArmy.length);
        var whichViking = Math.floor(Math.random()*this.vikingArmy.length);
        var fightResult = this.saxonArmy[whichSaxon].receiveDamage(this.vikingArmy[whichViking].strength);
        if (this.saxonArmy[whichSaxon].health <= 0) {
            this.saxonArmy.splice(whichSaxon,1);
        }
        return fightResult;
    },
    this.saxonAttack = function () {
        var whichSaxon = Math.floor(Math.random()*this.saxonArmy.length);
        var whichViking = Math.floor(Math.random()*this.vikingArmy.length);
        var fightResult = this.vikingArmy[whichViking].receiveDamage(this.saxonArmy[whichSaxon].strength);
        if (this.vikingArmy[whichViking].health <= 0) {
            this.vikingArmy.splice(whichViking,1);
        };  
        return fightResult;  
    }
    this.showStatus = function() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } 
        if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survive another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    } 
}


