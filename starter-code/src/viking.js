// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
}
Soldier.prototype.attack = function(){
    return this.strength;
}
Soldier.prototype.receiveDamage = function(damage){
    this.health -= damage;
}

// Viking
function Viking(name, health, strength) {  
    Soldier.call(this, health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.receiveDamage = function(damage){
    this.health -= damage;
    if (this.health > 0) return this.name + " has received " + damage + " points of damage";
    else return this.name + " has died in act of combat";
}
Viking.prototype.battleCry = function(){
    return "Odin Owns You All!";
}

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
    this.health = health;
    this.strength = strength;
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.receiveDamage = function(damage){
    this.health -= damage;
    if(this.health > 0) return "A Saxon has received " + damage + " points of damage";
    else return "A Saxon has died in combat";
}
// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}
War.prototype.addViking = function(vikingObj){
    this.vikingArmy.push(vikingObj);
}
War.prototype.addSaxon = function(saxonObj){
    this.saxonArmy.push(saxonObj);
}
War.prototype.vikingAttack = function(){
    // should make a Saxon receiveDamage() equal to the strength of a Viking
    var randomViking = this.vikingArmy[parseInt(Math.floor(Math.random() * this.vikingArmy.length))];
    var saxonIndex = parseInt(Math.floor(Math.random() * this.saxonArmy.length))
    var randomSaxon = this.saxonArmy[saxonIndex];
    // should remove dead saxons from the army
    var action = randomSaxon.receiveDamage(randomViking.strength);
    if (this.saxonArmy.length > 0 && randomSaxon.health <= 0) this.saxonArmy.splice(saxonIndex, 1);
    // should return result of calling receiveDamage() of a Saxon with the strength of a Viking
    return action;
}
War.prototype.saxonAttack = function(){
    // The Saxon version of vikingAttack(). A Viking receives the damage equal to the strength of a Saxon.
    var vikingIndex = parseInt(Math.floor(Math.random() * this.vikingArmy.length))
    var randomViking = this.vikingArmy[vikingIndex];
    var randomSaxon = this.saxonArmy[parseInt(Math.floor(Math.random() * this.saxonArmy.length))];
    // should make a Viking receiveDamage() equal to the strength of a Saxon
    var action = randomViking.receiveDamage(randomSaxon.strength);
    // should remove dead vikings from the army
    if (this.vikingArmy.length > 0 && randomViking.health <= 0) this.vikingArmy.splice(vikingIndex, 1);
    // should return result of calling receiveDamage() of a Viking with the strength of a Saxon
    return action;

}
War.prototype.showStatus = function(){
    // if the Saxon array is empty, should return "Vikings have won the war of the century!"
    if(this.saxonArmy.length === 0) return "Vikings have won the war of the century!";
    // if the Viking array is empty, should return "Saxons have fought for their lives and survive another day..."
    if(this.vikingArmy.length === 0) return "Saxons have fought for their lives and survive another day...";    
    // if there are at least 1 Viking and 1 Saxon, should return "Vikings and Saxons are still in the thick of battle."
    return "Vikings and Saxons are still in the thick of battle.";
}