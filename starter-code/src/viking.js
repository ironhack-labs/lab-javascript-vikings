// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;

}
Soldier.prototype.attack = function () {
    return this.strength;
}
Soldier.prototype.receiveDamage = function (damage) {
    this.health = this.health - damage;

}

// Viking
function Viking(name, health, strength) {
    Viking.call(this, health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;


// Saxon
function Saxon(healt, strength) {}

// War
function War(healt, strength) {}
