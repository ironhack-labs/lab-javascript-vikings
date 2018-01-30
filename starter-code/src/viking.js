// Soldier
//Constructor function receving 2 arguments
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
  
  this.attack = function(){
    return this.strength;
  }

  this.receiveDamage = function(theDamage){
    //health to be decremented
    this.health -= theDamage;
  }
}

//Viking
function Viking(name, health, strength) {
  //inheriting from Soldier constructor
  Soldier.call(this, health, strength);
  //property unique to viking
  this.name = name;

  this.receiveDamage = function(damage){
    this.health -= damage;
    if(this.health > 0){
      //this keyword to reference the viking function
      return this.name + " has received " + damage + " points of damage";
    } else{
      return this.name + " has died in act of combat"
    }
  }

  this.battleCry = function() {
    return "Odin Owns You All!";
  }
}
//Viking function inherits from the Soldier completely
//Parent and child objects behavior are now similar
Viking.prototype = Object.create(Soldier.prototype);
// Viking.prototype.constructor = Viking;


// // Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);

  this.receiveDamage = function(damage){
    this.health -= damage;
    if(this.health > 0){
      //this keyword to reference the viking function
      return "A Saxon has received " + damage + " points of damage";
    } else {
      return "A Saxon has died in combat";
    }
  }
}
//Saxon function inherits from the Soldier completely
//Parent and child objects behavior are now similar
Saxon.prototype = Object.create(Soldier.prototype);

// // War
// function War() {}
