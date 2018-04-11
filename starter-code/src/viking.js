// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
}

Soldier.prototype.attack = function(){
    return this.strength;
}

Soldier.prototype.receiveDamage = function(damage){
    this.health = this.health - damage;
}

// Viking

Viking.prototype = Object.create(Soldier.prototype);



function Viking(name, health, strength) {
    Soldier.call(this, name, health);
    this.name = name;
    this.health = health;
    this.strength = strength;
}

Viking.prototype.attack = function(){
    return this.strength;
}

Viking.prototype.receiveDamage = function(damage) {
    this.health -= damage;
    // if this.health > 0 {
    //     return this.name + " has received " + damage + " points of damage, if the Viking is still alive";
    // }
    // else {
    //     return this.name + " has died in act of combat, if the Viking dies";
    // }
}

Viking.prototype.battleCry = function(){
    return "Odin Owns You All!";
}

var viking = new Viking("Harald", 150, 300);

// Saxon
function Saxon() {}

Saxon.prototype = Object.create(Soldier.prototype);

function Saxon(health, strength) {
    Soldier.call (this, health, strength);
    this.health = health;
    this.strength = strength;
}
// War
function War() {}
