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
}
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
}



// Saxon
function Saxon() {}

// War
function War() {}
