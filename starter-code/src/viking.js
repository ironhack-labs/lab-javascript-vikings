// Soldier
function Soldier (health, strength) {
  this.health =health;
  this.strength=strength;
}

Soldier.prototype.attack = function(){
  return this.strength;
}
Soldier.prototype.receiveDamage = function(thedamage){
  this.health -= thedamage;
}
// Viking
function Viking (name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}
Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function(thedamage){
  this.health -= thedamage;
  if(this.health>0){
    return this.name + " has received " + thedamage + " points of damage";
  }
  else{
    return this.name +" has died in act of combat"
  }
}

Viking.prototype.battleCry =function(){
  return "Odin Owns You All!";
}
// Saxon
function Saxon (health, strength) {
  Soldier.call(this, health, strength)
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.receiveDamage = function(thedamage){
  this.health -=thedamage;
  if(this.health>0){
    return "A Saxon has received " + thedamage + " points of damage";
  }
  else{
    return "A Saxon has died in combat";
  }
}
// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy =[];
}

War.prototype.addViking = function(Viking){
  this.vikingArmy.push(Viking);
}

War.prototype.addSaxon = function(Saxon){
  this.saxonArmy.push(Saxon);
}

War.prototype.vikingAttack = function(){
  return this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);
  //console.log(this.vikingArmy[0].strength);
}


War.prototype.saxonAttack = function(){}
War.prototype.showStatus = function(){}
