// Soldier
function Soldier(health, strength){
    this.health = health;
    this.strength = strength;
}

Soldier.prototype.attack = function(){
    return this.strength;
}

Soldier.prototype.receiveDamage = function(theDamage) {
    this.health = this.health - theDamage;
}

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(theDamage) {
    this.health = this.health - theDamage;
    if(this.health > 0) {
        return this.name + ' has received ' + theDamage + ' points of damage';
    }
        return this.name + ' has died in act of combat';
}

Viking.prototype.battleCry = function () {
    return "Odin Owns You All!";
}





// Saxon
function Saxon(health, strength) {
    Soldier.call(health, strength);
    this.name = name;
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;



// War
function War() {}
