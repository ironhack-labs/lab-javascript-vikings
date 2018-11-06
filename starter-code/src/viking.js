// Soldier
function Soldier (health, strength) {
this.health = health;
this.strength = strength;
};
Soldier.prototype.attack = function () {
    return this.strength;
}
Soldier.prototype.receiveDamage = function (damage) {
    var actualHealth = this.health -= damage;
    return undefined;
}
   

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
};

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function (damage){
    Soldier.prototype.receiveDamage.call(this, damage);
    if (this.health > 0) {
        return this.name + " has received " + damage + " points of damage";
    } else {
    return this.name +  " has died in act of combat";
    } 
}

Viking.prototype.battleCry = function () {
    return "Odin Owns You All!";
};

// Saxon
function Saxon() {
    
}

// War
function War() {}



