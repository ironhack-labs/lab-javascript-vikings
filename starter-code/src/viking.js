
// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
  
  
}
Soldier.prototype.attack = function() {
  return this.strength;
}
Soldier.prototype.receiveDamage = function(damage) {
  console.log("Hello again");
  this.health -= damage;
}
// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
  
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;


Viking.prototype.receiveDamage = function(damage) {
  // console.log("Hello");
  this.health -= damage;
  if(this.health > 0) {
      return this.name + " has received " + damage + " points of damage";
  }
  if(this.health <= 0) {
    return this.name + " has died in act of combat";
  }
}
var harald = new Viking ("harald", 90, 90)
harald.receiveDamage(50);

Viking.prototype.battleCry = function()
{
    return "Odin Owns You All!";
}


function Saxon(health, strength) {
  Soldier.call(this, health, strength);

 
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;


Saxon.prototype.receiveDamage = function(damage) {
  console.log("Hello");
  this.health -= damage;
  if(this.health > 0) {
      return  "A Saxon has received " +damage+ " points of damage";
  }
  if(this.health <= 0) {
    return  "A Saxon has died in combat";
  }
}

// // Saxon
// function Saxon() {}
// War
function War() {}
Collapse 

