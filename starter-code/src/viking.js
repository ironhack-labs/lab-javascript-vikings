// Soldier
function Soldier(healthArg, strengthArg) {
    this.health=healthArg;
    this.strength=strengthArg;
}
Soldier.prototype.attack = function(){
return this.strength;
}
Soldier.prototype.receiveDamage=function(theDamage){
    this.health -=theDamage;
}


// Viking


function Viking(nameArg, health, strength) {
this.name=nameArg;
Soldier.call(this, health, strength)
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.receiveDamage=function(theDamage){
    this.health -=theDamage;
    if (this.health>0){ 
        return this.name +" has received " + theDamage + " points of damage"}
    else {
            return this.name + " has died in act of combat"
    }
}
Viking.prototype.battleCry=function(){
    return "Odin Owns You All!"
}
// Saxon
function Saxon(health, strength) {
Soldier.call(this, health, strength)
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.receiveDamage=function(theDamage){
    this.health -=theDamage;
    if (this.health>0){ 
        return "A Saxon has received " + theDamage + " points of damage"}
    else {
            return "A Saxon has died in combat"
    }
}
// War
function War() {
this.vikingArmy=[];
this.saxonArmy=[];
}
War.prototype.addViking=function(aViking){
this.vikingArmy.push(aViking);
}
War.prototype.addSaxon=function(aSaxon){
    this.saxonArmy.push(aSaxon);
    }
//viking attack function    
War.prototype.vikingAttack=function(){
var aRandomViking = Math.floor(Math.random() * this.vikingArmy.length);
var aRandomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
var combatResult = this.saxonArmy[aRandomSaxon].receiveDamage(this.vikingArmy[aRandomViking].strength);
//get rid of deadies
var that = this;
this.saxonArmy.forEach(function(eachSaxon){
var index = that.saxonArmy.indexOf(eachSaxon);   
if (eachSaxon.health <= 0){
    that.saxonArmy.splice(index, 1)
}
})
return combatResult;
}

//saxon attack function    
War.prototype.saxonAttack=function(){
    var aRandomViking = Math.floor(Math.random() * this.vikingArmy.length);
    var aRandomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var combatResult = this.vikingArmy[aRandomViking].receiveDamage(this.saxonArmy[aRandomSaxon].strength);
    //get rid of deadies
    var that = this;
    this.vikingArmy.forEach(function(eachViking){
    var index = that.vikingArmy.indexOf(eachViking);   
    if (eachViking.health <= 0){
        that.vikingArmy.splice(index, 1)
    }
    })
    return combatResult;
    }
    
    War.prototype.showStatus = function(){
        if (this.saxonArmy.length===0) {
        return "Vikings have won the war of the century!";
        }
        else if (this.vikingArmy.length===0){
            return "Saxons have fought for their lives and survive another day...";
        }
    else{ 
        return "Vikings and Saxons are still in the thick of battle."
     }
    }