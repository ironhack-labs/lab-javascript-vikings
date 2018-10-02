// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
    this.attack = function() {
        return this.strength;
    };
    this.receiveDamage = function(damage) {
        this.health = health - damage;
    };
}

// Viking
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

function Viking(name, health, strength) {
    this.name = name;
    // Soldier.call(this, health, strength, attack);
    Soldier.call(this, health, strength);

    this.receiveDamage = function(damage) {
        this.health = health - damage;
        if (this.health > 0) {
            return name + " has received " + damage + " points of damage";
        }
        else {
            return name + " has died in act of combat";
        }
    };
}

// Saxon
function Saxon() {}

// War
function War() {}
