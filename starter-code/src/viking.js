// Soldier
function Soldier (healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;

}


// Viking
function Viking(name,healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg);
    this.name = name;
}

// Saxon
function Saxon(healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg);

}

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking = function (Viking){
    this.vikingArmy.push(Viking);
}
War.prototype.addSaxon = function (Saxon){
    this.saxonArmy.push(Saxon);
}
War.prototype.vikingAttack = function (){
    var randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
    var force = Viking.attack();
    this.saxonArmy[randomSaxon].receiveDamage(force);
    
    //Si se muere
    //if(this.saxonArmy[randomSaxon].health <= 0) this.saxonArmy.splice(randomSaxon,1);
}
War.prototype.saxonAttack = function (){

}
War.prototype.showStatus = function (){}

Soldier.prototype.attack = function(){
    return this.strength;
}
    
Soldier.prototype.receiveDamage = function(damage){
    this.health -= damage;
}

Viking.prototype.attack = function(){
    return this.strength;
}

Viking.prototype.receiveDamage = function(damage){
    this.health -= damage;
    if(this.health > 0) return this.name + " has received " + damage + " points of damage";
    return this.name + " has died in act of combat";
}

Viking.prototype.battleCry = function(){
    return "Odin Owns You All!";
}
Saxon.prototype.attack = function(){
    return this.strength;
}
Saxon.prototype.receiveDamage = function(damage){
    this.health -= damage;
    if(this.health > 0) return "A Saxon has received " + damage + " points of damage";
    return "A Saxon has died in combat";
}

