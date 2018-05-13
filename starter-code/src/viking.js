// Soldier
function Soldier(health,strength) {
    this.health = health;
    this.strength = strength;       
}
Soldier.prototype.attack = function () {
    return this.strength;
}
Soldier.prototype.receiveDamage = function (damageArg) {
    this.health = this.health - 50;
}

// Viking
function Viking(name, health, strength) {
    var viking;
    this.name       = name;
    this.health     = health;
    this.strength   = strength;    
}
Viking.prototype.attack = function () {
    return this.strength;
}
Viking.prototype.receiveDamage = function (damageArg) {
    this.health = this.health - damageArg;
    if (this.health <= 0) return this.name + " has died in act of combat";
    else return this.name + " has received " + damageArg + " points of damage";
}
Viking.prototype.battleCry = function(){
    return "Odin Owns You All!";
}

// Saxon    
function Saxon(health, strength) {
    var viking;    
    this.health     = health;
    this.strength   = strength;    
}
Saxon.prototype.attack = function () {
    return this.strength;
}
Saxon.prototype.receiveDamage = function (damageArg) {
    this.health = this.health - damageArg;
    if (this.health <= 0) return "A Saxon has died in combat";
    else return "A Saxon has received " + damageArg + " points of damage";    
}

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}
War.prototype.showStatus = function () {
}
War.prototype.addViking = function () {
}
War.prototype.addSaxon = function () {
}