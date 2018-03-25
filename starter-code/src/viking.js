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
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;
Viking.prototype.receiveDamage = function(damage) {
    this.health -=  damage;
    if (this.health <= 0){
        return this.name + " has died in act of combat";
    } else {
        return this.name + " has received " + damage + " points of damage";
    }
}
Viking.prototype.battleCry = function(){
    return "Odin Owns You All!";
}

// Saxon
function Saxon(health, strength) {
    Soldier.call(this,health,strength);
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage) {
    this.health -=  damage;
    if (this.health <= 0){
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
    this.vikingArmy.push(Viking);
}
War.prototype.addSaxon = function(Saxon){
    this.saxonArmy.push(Saxon);
}
War.prototype.vikingAttack = function(){
    var numRanViking = Math.floor(Math.random()*this.vikingArmy.length);
    var numRanSaxon = Math.floor(Math.random()*this.saxonArmy.length);
    var pepe = this.saxonArmy[numRanSaxon].receiveDamage(this.vikingArmy[numRanViking].strength);
    if (this.saxonArmy[numRanSaxon].health <= 0){
        this.saxonArmy.splice(numRanSaxon,1);
    }
    return pepe;

}
War.prototype.saxonAttack = function(){
    var numRanViking = Math.floor(Math.random()*this.vikingArmy.length);
    var numRanSaxon = Math.floor(Math.random()*this.saxonArmy.length);
    var pepe = this.vikingArmy[numRanViking].receiveDamage(this.saxonArmy[numRanSaxon].strength);
    if (this.vikingArmy[numRanViking].health <= 0){
        this.vikingArmy.splice(numRanViking,1);
    }
    return pepe;
}
War.prototype.showStatus = function(){
    if (this.vikingArmy.length === 0 ){
        return "Saxons have fought for their lives and survive another day...";
    }else if (this.saxonArmy.length === 0){
        return "Vikings have won the war of the century!";
    } else if(this.saxonArmy.length === 1 && this.vikingArmy.length === 1){
        return "Vikings and Saxons are still in the thick of battle.";
    }
}