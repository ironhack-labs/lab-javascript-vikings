// Soldier
function Soldier(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;

    this.attack = function() {
        return this.strength;
    }    
}

Soldier.prototype.attack = function() {
    this.health -= theDamage;
}

Soldier.prototype.receiveDamage = function(theDamage) {
    this.health -= theDamage;
}

// Viking
function Viking(nameArg, healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg);
    this.name = nameArg;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(theDamage) {
    this.health -= theDamage;
    if (this.health > 0) {
    return `${this.name} has received ${theDamage} points of damage`
} else {
        return `${this.name} has died in act of combat`;
    }
}

Viking.prototype.battleCry = function() {
    return "Odin Owns You All!";
}

// Saxon
function Saxon(healthArg, strengthArg) {
Soldier.call(this, healthArg, strengthArg);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(theDamage) {
    this.health -= theDamage;
    if (this.health > 0) {
        return `A Saxon has received ${theDamage} points of damage`
    } else {
            return `A Saxon has died in combat`;
        }
    }


// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking = function(aViking) {
    this.vikingArmy.push(aViking);
}

War.prototype.addSaxon = function(aSaxon) {
    this.saxonArmy.push(aSaxon);
}

War.prototype.vikingAttack = function() {
    var attackResult = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);
    if (this.saxonArmy[0].health <= 0) {
            this.saxonArmy.pop(this.saxonArmy[0]);
        }
     return attackResult;   
    }

War.prototype.saxonAttack = function() {
    var attackResult = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);
    if (this.vikingArmy[0].health <= 0) {
            this.vikingArmy.pop(this.vikingArmy[0]);
        }
    return attackResult;
    }

War.prototype.showStatus = function() {
    if (this.saxonArmy.length === 0) {
        return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
        return "Saxons have fought for their lives and survive another day...";
    } else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
        return "Vikings and Saxons are still in the thick of battle.";
    }
}