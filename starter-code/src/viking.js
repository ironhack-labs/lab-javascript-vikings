// Soldier
function Soldier(health,strength) {
    this.health = health;
    this.strength = strength;
    this.attack = function() {
        return this.strength
    };
    this.receiveDamage = function(damage) {
        this.health = health - damage
    }
}

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
    this.receiveDamage = function(damage) {
        this.health = this.health - damage
        if (this.health >= 0) {
            return this.name + 'has received ' + damage + ' points of damage'
        }
        else { return this.name + " has died in act of combat"}
    }
    this.battleCry = function() {
        return 'Odin Owns You All!'
    }
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;
// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
    this.receiveDamage = function(damage) {
        this.health = this.health - damage
        if (this.health >= 0) {
            return 'A Saxon has received ' + damage + ' points of damage'
        }
        else { return 'A Saxon has died in combat'}
    }      
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
    this.addViking = function(Viking) {
        this.vikingArmy.push(Viking)
    }
    this.addSaxon = function(Saxon) {
        this.saxonArmy.push(Saxon)
    }
    this.vikingAttack = function() {
        var damagedSaxonIdx = Math.floor(Math.random * this.saxonArmy.length-1)
        var damagedSaxon = saxonArmy[damagedSaxonIdx];
        var attackingViking = this.vikingArmy[Math.floor(Math.random * this.vikingArmy.length-1)]
        if (damagedSaxon.receiveDamage(attackingViking.strength) >= 0) {
            return damagedSaxon.receiveDamage(attackingViking.strength)
        }
        else {
            saxonArmy.splice(damagedSaxonIdx, 1);
            return damagedSaxon.receiveDamage(attackingViking.strength)
        }
    }
    this.saxonAttack = function() {
        var damagedvikingIdx = Math.floor(Math.random * this.vikingArmy.length-1)
        var damagedviking = vikingArmy[damagedvikingIdx];
        var attackingsaxon = this.saxonArmy[Math.floor(Math.random * this.saxonArmy.length-1)]
        if (damagedviking.receiveDamage(attackingsaxon.strength) >= 0) {
            return damagedviking.receiveDamage(attackingsaxon.strength)
        }
        else {
            vikingArmy.splice(damagedvikingIdx, 1);
            return damagedviking.receiveDamage(attackingsaxon.strength)
        }
    }
    this.showStatus = function() {
        if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
            return 'Vikings and Saxons are still in the thick of battle.'
        }
        else if (this.vikingArmy.length > 0) {
            return 'Vikings have won the war of the century!'
        }
        else { return 'Saxons have fought for their lives and survive another day...'}
    }
}
