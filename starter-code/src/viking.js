//Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
};

Soldier.prototype.attack = function(){
return this.strength;
}


Soldier.prototype.receiveDamage = function(theDamage){
 this.health=this.health-theDamage
}

// Viking
function Viking(name, health, strength) {
this.name = name
this.health = health
this.strength = strength  
}
Viking.prototype = Object.create(Soldier.prototype);

var myViking = new Viking(true);



// Saxon
function Saxon() {}

// War
function War() {}
