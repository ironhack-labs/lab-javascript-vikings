// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
}
//Soldier methods
Soldier.prototype.attack = function(){
    return this.strength;
}
Soldier.prototype.receiveDamage = function(damage){
    this.health -= damage;
}

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
}

// inherit methods from base Soldier
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage){
    this.health -= damage;
    if(this.health > 0){
        return this.name + " has received " + damage + " points of damage"
    }
    if(this.health <= 0){
        return this.name + " has died in act of combat"
    }
}

// Saxon
function Saxon() {}

// War
function War() {}
