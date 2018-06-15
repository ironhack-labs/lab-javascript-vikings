// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
  //this.attack = function(){
  //  return this.strength;
  //}
  //this.receiveDamage = function(damage){
  //  this.health = this.health - damage;
  //}
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
  //this.receiveDamage = function(){
    //if (receiveDamage() > 0) {
    //  return (this.name + " has received " + this.damage + " points of damage");
    //}  else {
    //  return (this.name + " has died in act of combat");
    //}
  //}
}


Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;



// Saxon
function Saxon() {}

// War
function War() {}
