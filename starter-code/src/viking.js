'use strict'

// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
}

Soldier.prototype.attack = function() {
    return this.strength;
}

Soldier.prototype.receiveDamage = function(damage) {
    this.health -= damage;
}

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health <= 0) {
        return this.name + " has died in act of combat";
    }
    return this.name + " has received " + damage + " points of damage";
}

Viking.prototype.battleCry = function() {
    return "Odin Owns You All!"
}

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health <= 0) {
        return "A Saxon has died in combat";
    }
    return "A Saxon has received " + damage + " points of damage";
}

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking = function(viking) {
    this.vikingArmy.push(viking);
}

War.prototype.addSaxon = function(saxon) {
    this.saxonArmy.push(saxon);
}

War.prototype.vikingAttack = function() {
    var indexSaxonChoosed = Math.floor(Math.random() * this.vikingArmy.length)
    this.saxonArmy[indexSaxonChoosed].health -= this.vikingArmy[0].strength;
}

War.prototype.saxonAttack = function() {
    var indexVikingChoosed = Math.floor(Math.random() * this.vikingArmy.length)
    this.vikingArmy[indexVikingChoosed].health -= this.saxonArmy[0].strength;
    if (this.vikingArmy[indexVikingChoosed].health <= 0) {
        return this.vikingArmy.splice[indexVikingChoosed];
    }
}