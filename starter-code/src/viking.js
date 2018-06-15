// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = // Viking
strength;

    this.attack = function() {
        return this.strength;
    }
    this.receiveDamage = function(damage) {
        this.health -= damage;
    }
}

function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;
Viking.prototype.receiveDamage = function(damage) { 
    this.health -= damage; 
    console.log("hey");
    if (this.health >= 0){
        return this.name + " has received " + this.damage + " points of damage";
    } 
    return this.name + " has died in act of combat";
}

// Saxon
function Saxon() {}

// War
function War() {}
