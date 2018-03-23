// Soldier
function Soldier(health, strength) {

    this.health = health;
    this.strength = strength;
     
    

}
Soldier.prototype.attack = function () {
    return this.strength
}
Soldier.prototype.receiveDamage = function(damage) {
    this.health -=  damage;
}

// Viking
function Viking(name, health, strength) {
    Soldier.call(this,health,strength);
    this.name = name;    
    
    this.battleCry = function(){
        return "Odin Owns You All!";
    }
    
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;
Viking.prototype.receiveDamage = function(damage) {
    this.health -=  damage;
    if (this.health === 0){
        return this.name + " has died in act of combat";
    } else {
        return this.name + " has received " + damage + " points of damage";
    }
}

// Saxon
function Saxon(health, strength) {
    Soldier.call(this,health,strength);
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage) {
    this.health -=  damage;
    if (this.health === 0){
        return "A Saxon has died in combat";
    } else {
        return "A Saxon has received " + damage + " points of damage";
    }
}
// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];

    
}


War.prototype.addViking = function(Viking){
    for(let i = 1; i < Viking.length ;i++)
        this.vikingArmy.push(Viking[i]);
    return this.vikingArmy;
}
War.prototype.addSaxon = function(Saxon){
    return this.saxonArmy;
}
War.prototype.vikingAttack = function(){
    
}
War.prototype.saxonAttack = function(){}
War.prototype.showStatus = function(){}