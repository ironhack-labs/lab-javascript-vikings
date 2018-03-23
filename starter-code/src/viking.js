// Soldier
function Soldier(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg


    Soldier.prototype.attack = function() {
        return this.strength
    }

    Soldier.prototype.recieveDamage = function(damage) {
        this.health -= damage;
    }

    // Viking
    function Viking(name, healthArg, strengthArg) {
        Soldier.call(this, healthArg, strengthArg)
        this.health = healthArg;
        this.name = name
    }

    Viking.prototype = Object.create(Soldier.prototype);
    Viking.prototype.constructor = Viking;

    Viking.prototype.recieveDamage = function(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return this.name + 'has received' + this.damage + 'points of damage';
        }
        return this.name + 'has died in act of combat';

    }
}

Viking.prototype.battleCry = function() {
    return 'Odin owns you all!'
}


// Saxon
function Saxon(name, healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg)
    this.health = healthArg;
    this.name = name
}

Saxon.prototype = Object.create(Saxon.prototype);
Saxon.prototype.constructor = Viking;

Saxon.prototype.recieveDamage = function(damage) {
    this.health -= damage;
    if (this.health > 0) {
        return this.name + 'has received' + this.damage + 'points of damage';
    }
    return 'A saxon has died in act of combat';
}

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking = function(Viking) {
    this.vikingArmy.push(Viking)
}

War.prototype.addSaxon = function(Saxon) {
    this.saxonArmy.push(Saxon)
}