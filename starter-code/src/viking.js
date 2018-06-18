// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
}
  Soldier.prototype.attack = function(){
    return this.strength;
  }
  
    Soldier.prototype.receiveDamage = function(number){
    this.health = this.health - number;
  }
  
  var soldado = new Soldier(15, 17);
  

  function Viking(name,healthArg, strengthArg){
  Soldier.call(this,healthArg,strengthArg);
  this.name = name;
  }
  Viking.prototype = Object.create(Soldier.prototype);
  Viking.prototype.constructor = Viking;

  Viking.prototype.receiveDamage = function(number){
  this.health = (this.health-number);
  if ((this.health) > 0){
  return this.name + " has received " + number + " points of damage";
  }
  else {
  return this.name + " has died in act of combat";
  };
}
  Viking.prototype.battleCry = function () {
  return "Odin Owns You All!";
}



// Saxon
  function Saxon(healthArg, strengthArg){
  Soldier.call(this,healthArg,strengthArg);
}
  Saxon.prototype = Object.create(Soldier.prototype);
  Saxon.prototype.constructor = Saxon;


  Saxon.prototype.receiveDamage = function(number){
    this.health = (this.health-number);
    if ((this.health) > 0){
      return "A Saxon has received " + number + " points of damage";
    }
      else {
      return "A Saxon has died in combat";
    }
  }



// War
function War() {
  this.vikingArmy=[];
  this.saxonArmy=[];

  this.addViking=function(viking){
  this.vikingArmy.push(viking);
};
  this.addSaxon=function(saxon){
  this.saxonArmy.push(saxon);
};
  this.vikingAttack=function(){
    var whatViking = parseInt(Math.random()*this.vikingArmy.length);
    var whatSaxon = parseInt(Math.random()*this.saxonArmy.length);
    var vikatack = this.saxonArmy[whatSaxon].receiveDamage(this.vikingArmy[whatViking].strength);
    if (this.saxonArmy[whatSaxon].health <= 0) {
    this.saxonArmy.slice[whatSaxon, 1];
    }  
    return vikatack;
  };

this.saxonAttack=function(){
var whatViking = parseInt(Math.random()*this.vikingArmy.length);
var whatSaxon = parseInt(Math.random()*this.saxonArmy.length);
var saxattack = this.vikingArmy[whatViking].receiveDamage(this.saxonArmy[whatSaxon].strength);
if (this.vikingArmy[whatViking].health <= 0) {
this.vikingArmy.slice[whatViking, 1];
}  
return saxattack;
};
}
