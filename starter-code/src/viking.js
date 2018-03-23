// Soldier
function Soldier(health , strength) {
 this.health = health;
 this.strength = strength;
}
Soldier.prototype.attack = function(){
  return this.strength;
}
Soldier.prototype.receiveDamage = function (damage){
console.log(this)
  if(this.hasOwnProperty('name')){
    this.health = this.health - damage
    if((this.health - damage)<0){
      return this.name + " has died in act of combat"
    }else{  
      return this.name + " has received " + damage + " points of damage"
    }
  }else{
    this.health = this.health - damage
  }
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength)
  this.name = name;
}
Viking.prototype.battleCry = function(){
  return "Odin Owns You All!"
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;
// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength)
}

// War
function War() {}

