// Soldier
function Soldier(health,strength) {
    this.health = health;
    this.strength = strength;       
}
Soldier.prototype.attack = function () {
    return this.strength;
}
Soldier.prototype.receiveDamage = function (damageArg) {
    this.health = this.health - 50;
}

// Viking
function Viking(name, health, strength) {
    var viking;
    Soldier.call(this, health,strength);    
    this.name       = name;    
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.attack = function () {
    return this.strength;
}
Viking.prototype.receiveDamage = function (damageArg) {
    this.health = this.health - damageArg;
    if (this.health <= 0) return this.name + " has died in act of combat";
    else return this.name + " has received " + damageArg + " points of damage";
}
Viking.prototype.battleCry = function(){
    return "Odin Owns You All!";
}

// Saxon    
function Saxon(health, strength) {
    //var viking;
    Soldier.call(this, health,strength);        
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

function Saxon(health, strength) {
    var viking;    
    this.health     = health;
    this.strength   = strength;    
}
Saxon.prototype.attack = function () {
    return this.strength;
}
Saxon.prototype.receiveDamage = function (damageArg) {
    this.health = this.health - damageArg;
    if (this.health <= 0) return "A Saxon has died in combat";
    else return "A Saxon has received " + damageArg + " points of damage";    
}

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}
War.prototype.addViking = function (objViking) {
    this.vikingArmy.push(objViking);
}
War.prototype.addSaxon = function (objSaxon) {
    this.saxonArmy.push(objSaxon);
}
War.prototype.vikingAttack = function () {
    let saxonIdx    = Math.floor(Math.random()*this.saxonArmy.length);
    let vikingIdx   = Math.floor(Math.random()*this.vikingArmy.length);
    let viking      = this.vikingArmy[vikingIdx];
    let saxon       = this.saxonArmy[saxonIdx];

    let ataque      = saxon.receiveDamage(viking.attack());    
    if(saxon.health <= 0 ){
        this.saxonArmy.splice(saxonIdx, 1);
    }
    return ataque;
}
War.prototype.saxonAttack = function () {
    let saxonIdx    = Math.floor(Math.random()*this.saxonArmy.length);
    let vikingIdx   = Math.floor(Math.random()*this.vikingArmy.length);
    let viking      = this.vikingArmy[vikingIdx];
    let saxon       = this.saxonArmy[saxonIdx];

    let ataque      = viking.receiveDamage(saxon.attack());    
    if(viking.health <= 0 ){
        this.vikingArmy.splice(vikingIdx, 1);
    }
    return ataque;
}
War.prototype.showStatus = function () {
    if (this.saxonArmy.length == 0) return "Vikings have won the war of the century!";
    else if (this.vikingArmy.length == 0) return "Saxons have fought for their lives and survive another day...";
    else if (this.saxonArmy.length == this.vikingArmy.length) return "Vikings and Saxons are still in the thick of battle.";    
}
