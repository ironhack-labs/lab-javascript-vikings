// Soldier
function Soldier (healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
}

Soldier.prototype.attack = function() {
    return this.strength;
}

Soldier.prototype.receiveDamage = function(damage) {
    this.health -= damage;
}

Soldier.prototype.isAlive = function() {
   return this.health > 0;
}

Viking.prototype = Object.create(Soldier.prototype);

// Viking
function Viking (nameArg, healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg);
    this.name = nameArg;
}

Viking.prototype.receiveDamage = function(damage) {
    this.health -= damage;
    if ( this.isAlive() ) {
        return this.name + " has received " + damage + " points of damage";
    }
    else {
        return this.name + " has died in act of combat";
    }
}

Viking.prototype.battleCry = function() {
    return "Odin Owns You All!";    
}

Saxon.prototype = Object.create(Soldier.prototype);

// Saxon
function Saxon (healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg);
}

Saxon.prototype.receiveDamage = function(damage) {
    this.health -= damage;
    if ( this.isAlive() ) {
        return "A Saxon has received " + damage + " points of damage";
    }
    else {
        return "A Saxon has died in combat"
    }
}

// War
function War () {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking = function(vikingObj) {
    this.vikingArmy.push(vikingObj);
}
War.prototype.addSaxon = function(saxonObj) {
    this.saxonArmy.push(saxonObj);
}
War.prototype.vikingAttack = function() {
    vikingIndex = this.getRandomSoldier(this.vikingArmy);
    saxonIndex = this.getRandomSoldier(this.saxonArmy);
    vikingAttack = this.saxonArmy[saxonIndex].receiveDamage(this.vikingArmy[vikingIndex].attack());
    if ( ! this.saxonArmy[saxonIndex].isAlive() ) {
        this.removeSoldier(this.saxonArmy, saxonIndex);
    }
    return vikingAttack;
}
War.prototype.saxonAttack = function() {
    vikingIndex = this.getRandomSoldier(this.vikingArmy);
    saxonIndex = this.getRandomSoldier(this.saxonArmy);
    saxonAttack = this.vikingArmy[vikingIndex].receiveDamage(this.saxonArmy[saxonIndex].attack());
    if ( ! this.vikingArmy[vikingIndex].isAlive() ) {
        this.removeSoldier(this.vikingArmy, vikingIndex);
    }
    return saxonAttack;
}

War.prototype.showStatus = function() {
    if(this.saxonArmy.length == 0) {
        return "Vikings have won the war of the century!";
    }
    else {
        if(this.vikingArmy.length == 0) {
            return "Saxons have fought for their lives and survive another day...";
        }
        else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}

War.prototype.getRandomSoldier = function(soldierArray) {
    return Math.floor(Math.random() * soldierArray.length);
}
War.prototype.removeSoldier = function(soldierArray, index) {
    soldierArray.splice(index, 1);
}