// Soldier
function Soldier(health, strength) {
 this.health = health;
 this.strength = strength;
}
Soldier.prototype.attack = function() {
    return this.strength;
}
Soldier.prototype.receiveDamage = function(damage) {
    this.health = this.health - 50;
}

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.attack = function() {
    return Soldier.prototype.attack.call(this);
}
Viking.prototype.receiveDamage = function(damage) {
    Soldier.prototype.receiveDamage.call(this);
    var damage = 0;
    if(damage == 50 || damage == 75 ) {
        return this.name + ' has received '+ damage + 'points of damage';
    }
    if(this.health == damage) {
        return this.name + ' has died in act of combat';
    }
        
}

Viking.prototype.battleCry = function() {
    return 'Odin Owns You All!';
}



// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
}

// War
function War() {}
