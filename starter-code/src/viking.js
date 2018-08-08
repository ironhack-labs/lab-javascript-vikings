// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
    this.attack = function() {
        return this.strength;
    }
    this.receiveDamage = function(damage) {
        this.health -= damage;
    }
}

// Viking
function Viking(name, health, strength) {
    this.name = name;
    Soldier.call(this, health, strength);
    this.receiveDamage = function(damage) {
        var currentHealth = this.health -= damage;
        if(currentHealth === 0) {
            return `${this.name} has died in act of combat`;
        } else {
            return `${this.name} has received ${damage} points of damage`;
        }
    };
    this.battleCry = function() {
        return `Odin Owns You All!`;
    };
}
Viking.prototype = Object.create(Soldier.prototype);

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
    this.receiveDamage = function(damage) {
        this.health -= damage;
    };
    this.attack = function() {
        return this.strength;
    };
    this.receiveDamage = function(damage) {
        var currentHealth = this.health -= damage;
        if(currentHealth === 0) {
            return `A Saxon has died in combat`;
        } else {
            return `A Saxon has received ${damage} points of damage`;
        }
    };
}
Saxon.prototype = Object.create(Soldier.prototype);

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
    this.addViking = function(viking) {
        vikingArmy.push(viking);
    };
    this.addSaxon = function() {};
    this.vikingAttack = function() {};
    this.saxonAttack = function() {};
    this.showStatus = function() {};
}
