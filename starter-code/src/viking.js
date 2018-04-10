// // Soldier
function Soldier (healthArg, strengthArg) {
this.health = healthArg;
this.strength = strengthArg;

};

Soldier.prototype.attack = function() {
return this.strength;
};

Soldier.prototype.receiveDamage = function(receiveDamage) {
  this.health = this.health - receiveDamage;
  
};


// Viking
function Viking(nameArg, healthArg, strengthArg) {
this.name = nameArg;
Soldier.call(this, healthArg, strengthArg);

}

Viking.prototype = Object.create(Soldier.prototype); // this links everything from soldier EVERYTHING!!
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(receiveDamage){
  this.health = this.health - receiveDamage;
  if(this.health === 0){
    return this.name + " has died in act of combat";
  }
  return this.name + " has received " + receiveDamage + " points of damage";
}

Viking.prototype.battleCry = function(){
  return "Odin Owns You All!";
}


// Saxon
function Saxon(healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(receiveDamage){
  this.health = this.health - receiveDamage;
  if(this.health === 0){
    return "A Saxon has died in combat";
  }
  return "A Saxon has received " + receiveDamage + " points of damage";
}



// War
function War() {
this.vikingArmy = [];
this.saxonArmy = [];

}

War.prototype.addViking = function (addviking){

// addViking(this.Viking);

}



