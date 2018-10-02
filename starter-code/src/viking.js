// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
}

Soldier.prototype.attack = function (){
    return this.strength;
}

Soldier.prototype.receiveDamage = function (damage) {
    this.health -= damage;
}



// Viking
function Viking (name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
}

Viking.prototype.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health > damage) {
        return this.name +" has received " + damage +" points of damage";
    } else {
        return this.name +" has died in act of combat";
    }
}

Viking.prototype.battleCry = function() {
    return "Odin Owns You All!";
}


Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
}

Saxon.prototype.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health > damage) {
        return "A Saxon has received " + damage +" points of damage";
    } else {
        return "A Saxon has died in combat";
    }
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// War
function War() {}
