// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength= strengthArg;
}
Soldier.prototype.attack=function(){
  return this.strength ; 
}

Soldier.prototype.receiveDamage=function(value){
  this.health -= value; 
}

// Viking
function Viking(nameArg,healthArg,strengthArg) {
  Soldier.call(this,healthArg,strengthArg);
  this.name=nameArg;
}
Viking.prototype=Object.create(Soldier.prototype);
Viking.prototype.constructor=Viking;

Viking.prototype.receiveDamage=function(value){
  this.health -= value;
  if (this.health>0) { 
    return this.name+" has received "+value+" points of damage"
  } else {
    return this.name+" has died in act of combat" 
  };
}

Viking.prototype.battleCry=function(){
  return "Odin Owns You All!";
}


// Saxon

function Saxon(healthArg,strengthArg) {
  Soldier.call(this,healthArg,strengthArg);
}
Saxon.prototype=Object.create(Soldier.prototype);
Saxon.prototype.constructor=Saxon;

Saxon.prototype.receiveDamage=function(value){
  this.health -= value;
  if (this.health>0) { 
    return "A Saxon has received "+value+" points of damage"
  } else {
    return "A Saxon has died in combat" 
  };
}


// War

function War() {
  this.vikingArmy = [];
  this.saxonArmy= [];
}
War.prototype.addViking=function(Viking){
  this.vikingArmy += vikingArg ; 
}

War.prototype.addSaxon=function(Saxon){
  this.saxonArmy += saxongArg; 
}

var NewWar= new War();

War.prototype.vikingAttack=function(){
  War.saxonArmy[random].receiveDamage(War.vikinArmy[random].strength);
}

