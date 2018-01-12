

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

function givePositionRandom(maximo){

  var position;
  
  if(maximo > 1){

    position = Math.floor(Math.random() * maximo);

  }else{

    position = 0;
  }
  

  return position;
}

War.prototype.vikingAttack = function(){

  var indexSaxonRandom;
  var indexVikinRandom;
  var resultadoSaxon;

    if(this.vikingArmy.length > 0 && this.saxonArmy.length > 0){
      
      indexSaxonRandom = givePositionRandom(this.saxonArmy.length);
      indexVikinRandom = givePositionRandom(this.vikingArmy.length);

      resultadoSaxon = this.saxonArmy[indexSaxonRandom].receiveDamage(this.vikingArmy[indexVikinRandom].strength);
      
      if(this.saxonArmy[indexSaxonRandom].health <= 0){

        this.saxonArmy.splice(indexSaxonRandom,1);

       } ;

    }

  return resultadoSaxon;
   

}

War.prototype.saxonAttack = function(){

  

}

War.prototype.showStatus = function(){}


