// Soldier
function Soldier (health, strength) {
    this.health = health;
    this.strength = strength;    
}
Soldier.prototype.attack = function (){
    return this.strength;
}
Soldier.prototype.receiveDamage = function (theDamage){
    this.health = this.health - theDamage;
}
// Viking
function Viking(name, health, strength) {
    Soldier.call(this,health,strength);
    this.name = name;
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function (theDamage){
    this.health = this.health - theDamage;
    if(this.health >0){
        return this.name + " has received "+ theDamage +" points of damage";
    }else{
        return this.name + " has died in act of combat";
    }
}

Viking.prototype.battleCry = function(){
    return "Odin Owns You All!";
}

// Saxon
function Saxon(health, strength) {
Soldier.call(this, health, strength);
} 

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.attack = function(){
    return this.strength;
}

Saxon.prototype.receiveDamage = function(theDamage){
    this.health = this.health - theDamage;
if (this.health > 0) {
    return "A Saxon has received " + theDamage + " points of damage";
} else {
    return "A Saxon has died in combat";
}
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
    
   var vikRand = Math.floor(Math.random() * this.vikingArmy.length);
   var vikStren = this.vikingArmy[vikRand].strength;
   var saxRand = Math.floor(Math.random() * this.saxonArmy.length);
   var sax = this.saxonArmy[saxRand];

   var mess = sax.receiveDamage(vikStren);
    if (sax.health <= 0) {
        this.saxonArmy.splice(saxRand,1);    
    }
    return mess;
}
War.prototype.saxonAttack = function(){
    var saxRand = Math.floor(Math.random() * this.saxonArmy.length);
    var saxStren = this.saxonArmy[saxRand].strength;
    var vikRand = Math.floor(Math.random() * this.vikingArmy.length);
    var vik = this.vikingArmy[vikRand];

    var mess = vik.receiveDamage(saxStren);
    if (vik.health <=0) {
        this.vikingArmy.splice(vikRand, 1);
    }return mess;
}
War.prototype.showStatus = function (){
    if(this.saxonArmy.length === 0){
        return "Vikings have won the war of the century!"; 
    }else if(this.vikingArmy.length === 0){
        return "Saxons have fought for their lives and survive another day...";
    }else{
        return "Vikings and Saxons are still in the thick of battle.";
    }
}
