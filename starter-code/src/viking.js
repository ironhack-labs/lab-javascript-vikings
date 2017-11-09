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
    if(this.health > 0) {
        return true;
    }
    else {
        return false;
    }
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

War.prototype.addViking = function() {}
War.prototype.addSaxon = function() {}
War.prototype.vikingAttack = function() {}
War.prototype.saxonAttack = function() {}
War.prototype.showStatus = function() {}
