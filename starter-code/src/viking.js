// Soldier
function Soldier(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
}
Soldier.prototype.attack = function(){
    return this.strength;
}
Soldier.prototype.receiveDamage = function(damage){
    this.health -= damage;
}

// Viking
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;
function Viking(nameViking, health, strength) {
    Soldier.call(this, health, strength);
    this.name = nameViking;
}
Viking.prototype.receiveDamage = function(damage){
    this.health -= damage;
    if (this.health > 0){
        return this.name + ' has received ' + damage + ' points of damage';
    } else {
        return this.name + ' has died in act of combat';
    }
}

Viking.prototype.battleCry = function(){
    return "Odin Owns You All!";
}



// Saxon
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
}
Saxon.prototype.receiveDamage = function(damage){
    this.health -= damage;
    if (this.health > 0){
        return 'A Saxon has received ' + damage + ' points of damage';
    } else {
        return 'A Saxon has died in combat';
    }
}

// War
function War() {}
