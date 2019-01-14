// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;

    function receiveDamage(damage){
        health = health - damage;
    }
}

Soldier.prototype.attack = function(){
    return this.strength;
}

Soldier.prototype.receiveDamage = function(damage){
    this.health = this.health - damage;
}

var sol = new Soldier(1000,200);

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.receiveDamage = function(damage){
    this.health = this.health - damage;
    return (this.health > 0) ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
}
Viking.prototype.battleCry = function(){
    return "Odin Owns You All!"
}
var vik = new Viking('thor', 2000,500);
// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.receiveDamage = function(damage){
    this.health = this.health - damage;
    return (this.health > 0) ? `A Saxon has received ${damage} points of damage` : "A Saxon has died in combat";
}
Saxon.prototype.battleCry = function(){
    return "Odin Owns You All!"
}
// War
function War() {}
