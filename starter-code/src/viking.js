// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
};

Soldier.prototype.attack = function() {
    return this.strength;
};

Soldier.prototype.receiveDamage = function(damage){
    this.health -= damage;
};

// Viking
function Viking(name, health, strength) {
    this.name = name;
    Soldier.call(this, health, strength);
};

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function(damage){
    var lifeDamaged = this.health -= damage;
    if (lifeDamaged > 0){
        return (`${this.name} has received ${damage} points of damage`);
    } else {
        return (`${this.name} has died in act of combat`);
    };
};

Viking.prototype.battleCry = function(){
    return ("Odin Owns You All!");
};

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
};

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function(damage){
    var lifeDamaged = this.health -= damage;
    if (lifeDamaged > 0){
        return (`A Saxon has received ${damage} points of damage`);
    } else {
        return (`A Saxon has died in combat`);
    }
};

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
};

War.prototype.addViking = function(vikingObject){
    this.vikingArmy.push(vikingObject);
};

War.prototype.addSaxon = function(saxonObject){
    this.saxonArmy.push(saxonObject);
};

War.prototype.vikingAttack = function(){
    var randomIdViking = Math.floor(Math.random() * this.vikingArmy.length);
    var randomIdSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    this.saxonArmy[randomIdSaxon]
};