// Soldier
function Soldier(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
}

Soldier.prototype.attack = function () {
    return this.strength;
}

Soldier.prototype.receiveDamage = function (damageArg){
    this.health = this.health - damageArg;
}

// Viking
function Viking(nameArg, healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg);
    this.name = nameArg;
}

Viking.prototype = Object.create(Soldier.prototype); //We put this BEFORE our viking methods, so that they can 
Viking.prototype.constructor = Viking;//...inherit

Viking.prototype.receiveDamage = function (damageArg){
    this.health = this.health - damageArg;
    if (this.health > 0){
        return this.name + ' has received ' + damageArg + ' points of damage';
    }
    else {
        return this.name + ' has died in act of combat';
    }
}

Viking.prototype.battleCry = function (){
 return 'Odin Owns You All!';
}


// Saxon
function Saxon() {}

// War
function War() {}
