// Soldier
function Soldier(healthArg, strengthArg) {
    this.health = healthArg
    this.strength = strengthArg
}

Soldier.prototype.attack = function (){
    return this.strength
}

Soldier.prototype.receiveDamage = function (damage){
    this.health -= damage

}

// Viking
function Viking(nameArg, healthArg, strengthArg) {
    this.name = nameArg
    this.health = healthArg
    this.strength = strengthArg        
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.contructor = Viking;

Viking.prototype.battleCry = function(){
    return "Odin Owns You All!"
}





// Saxon

Saxon.prototype = Object.create(Viking.prototype);
Saxon.prototype.constructor = Saxon;

function Saxon(healthArg, strengthArg) {
    this.health = healthArg
    this.strength = strengthArg
}




// War
function War() {
    this.vikingArmy = []
    this.saxonArmy = []
}

War.prototype.addViking = function (arg){

}

War.prototype.addSaxon = function(arg){

}
War.prototype.vikingAttack = function(){

}
War.prototype.saxonAttack = function(){

}
War.prototype.showStatus = function(){

}

