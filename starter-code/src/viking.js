

// Soldier
function Soldier(healthArg, strengthArg) {
  
  this.health = healthArg;
  this.strength = strengthArg;

}

Soldier.prototype.attack = function (){

  return this.strength;
  
};

Soldier.prototype.receiveDamage = function (damageArg){

   this.health -=  damageArg;
   
}

// Viking
function Viking(name, health, strength) {

  Soldier.call(this, health, strength);
  this.name = name;
  
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function (damageArg){

  this.health -=  damageArg;
  
  var mensaje;
  
  if(this.health <= 0){

    mensaje = this.name + " has died in act of combat";

  }else{

    mensaje = this.name + " has received "+ damageArg +" points of damage";
    
  }
  
  return mensaje;
  
}

Viking.prototype.battleCry = function(){

  return "Odin Owns You All!";
}


// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);

}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function(damageArg){

  this.health -=  damageArg;

  var mensaje;
  
  if(this.health <= 0){

    mensaje = "A Saxon has died in combat";

  }else{

    mensaje = "A Saxon has received "+ damageArg +" points of damage";
    
  }
  
  return mensaje;

}

// War
function War() { 

  this.vikingArmy = [];
  this.saxonArmy = [];

}

War.prototype.addViking = function(viking){

    this.vikingArmy.push(viking);
}

War.prototype.addSaxon = function(saxon){

  this.saxonArmy.push(saxon);

}
War.prototype.vikingAttack = function(){}
War.prototype.saxonAttack = function(){}
War.prototype.showStatus = function(){}


