// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function(){
  return this.strength;
}
Soldier.prototype.receiveDamage = function(damage){
  this.health = this.health - damage;
}

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage){
  this.damage = damage;
  this.health -= damage;
  if (this.health > 0) {
    return (this.name + " has received "  + this.damage + " points of damage");
  } else {
    return (this.name + " has died in act of combat");
  }
}
Viking.prototype.battleCry = function(){
  return "Odin Owns You All!";
}

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
  this.attack = function(strength){
    return this.strength;
  }
 
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage){
  this.damage = damage;
  this.health -= damage;
  if (this.health > 0) {
    return ("A Saxon has received " + this.damage + " points of damage");
  } else {
    return ("A Saxon has died in combat");
  }
}

// War
function War() {
this.vikingArmy = [];
this.saxonArmy = [];
}
  War.prototype.addViking = function(Viking){
  this.Viking = this.vikingArmy.push(Viking) ;
  }

  War.prototype.addSaxon = function(Saxon){
    this.Saxon= this.saxonArmy.push(Saxon) ;
  }
  War.prototype.vikingAttack = function(){
  var saxonRandom = Math.floor(Math.random(this.Saxon))
  }
  War.prototype.saxonAttack = function(){

  }
  War.prototype.showStatus = function(){

  }

